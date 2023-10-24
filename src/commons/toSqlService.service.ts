import { Inject, Injectable } from "@nestjs/common";
import { Op, Sequelize, Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document, Connection } from 'mongoose';
import { SyncroService } from "src/syncro.service";
import { InjectConnection } from "@nestjs/mongoose";
import { SequelizeConnectionService } from "src/database-module/sequelize-connection-service/sequelize-connection-service.service";
import { UtilService } from "src/util.service";
import { ClassingService } from "src/sync-services/classing.service";
import { ChampFilleService } from "src/decoratorServices/champ-fille/champ-fille.service";
import { Reflector } from '@nestjs/core';
import { MongoConnectionService } from "src/database-module/mongo-connection/mongo-connection.service";
import e from "express";
@Injectable()
export class ToSqlService {
    constructor(
        private readonly sequelizeconnectionmodule: SequelizeConnectionService,
        private readonly utilservice: UtilService,
        private readonly classingService: ClassingService,
        private readonly champfilleservice: ChampFilleService,
        private readonly mongoconnectionservice:MongoConnectionService,
        private readonly reflector: Reflector,
        @InjectConnection('db_24mklen') private readonly db_24mklen: Connection,
        @InjectConnection('db_ampasamadinika') private readonly db_ampasamadinika: Connection,
        @InjectConnection('db_ostie') private readonly db_ostie: Connection,
        @InjectConnection('db_tanjombato') private readonly db_tanjombato: Connection,
        @InjectConnection('ostie') private readonly ostiemongo: Connection,
        @InjectConnection('db_behoririka') private readonly db_behoririka: Connection,
        @InjectConnection('test') private readonly test: Connection,


    ) { 
        this.mongoconnectionservice.addConnection('db_24mklen',db_24mklen);
        this.mongoconnectionservice.addConnection('db_ampasamadinika',db_ampasamadinika);
        this.mongoconnectionservice.addConnection('db_behoririka',db_behoririka);
        this.mongoconnectionservice.addConnection('db_ostie',db_ostie);
        this.mongoconnectionservice.addConnection('db_tanjombato',db_tanjombato);
        this.mongoconnectionservice.addConnection('ostie',ostiemongo);
        this.mongoconnectionservice.addConnection('global_test',test);
    }
    
    async synctoMySql( nomtableprioritaire: string, nomdedatabasemongo: string, id: string,sequelizeModel:any) {
        //Recuperation de la connexion mongo recommande
        
        const dbmongo = await this.mongoconnectionservice.getConnection(nomdedatabasemongo);
        //Recuperation de la connexion sequelize recommande
        
        //Recuperation de la classe corresponand a la table donnee par lutilisateur
        const model = await this.utilservice.findMostSimilarString(nomtableprioritaire, this.classingService.getClassNames());
        //recuperation des annotations internes et des autres table disposant de la meme table mere 
        const groupedMetadata: any = await this.champfilleservice.getAllModelsWithTheSameMere(this.classingService.getClass(model));

        let tabdonneemisajour: any;
        let reference: string;
        let champ_fille;
        for (const [clé, valeur] of groupedMetadata) {
            if (clé.name == model) {
                reference = valeur[0].reference;
                champ_fille = valeur;

            }
        }
        const filtercible = {};
        filtercible[reference] = [id];
        
        const mongociblemodel = dbmongo.model(model);
        tabdonneemisajour = await mongociblemodel.find(filtercible).exec();
        
        const conditions = {
            [reference]: {
                [Op.eq]: id, // Utilisez l'opérateur d'égalité (ou un autre opérateur selon vos besoins)
            },
        };
        const tabdonneesqlamettreajour=await sequelizeModel.findOne({where:conditions});
        
        //Mettre a jour les clonnes
        for (let i = 0; i < tabdonneemisajour.length; i++) {
            const elementmisajour = tabdonneemisajour[i];
            for (const [clé, valeur] of groupedMetadata) {
                let tabclone: any;
                //Si different du model fourni on effectue le changement suivant 
                if (clé.name != model) {
                    const modelget = dbmongo.model(clé.name);
                    const filter = {};
                    filter[valeur[0].reference] = elementmisajour[reference];
                    tabclone = await modelget.find(filter).exec();
                    for (let j = 0; j < tabclone.length; j++) {
                        const elementtabclone = tabclone[j];
                        //Boucler les champs filles du model preciser
                        for (let u = 0; u < champ_fille.length; u++) {
                            const champ_fillemodel = champ_fille[u];
                            //Boucler les champfilles du modele exterieurs
                            for (let p = 0; p < valeur.length; p++) {
                                const elementchampfille = valeur[p];
                                //si il s'agit du meme champ on procede a une 
                                if (champ_fillemodel.nomduchamp == elementchampfille.nomduchamp) {
                                    elementtabclone[elementchampfille.identifiant] = elementmisajour[champ_fillemodel.identifiant];
                                }
                            }
                        }
                        modelget.findByIdAndUpdate(elementtabclone._id, elementtabclone, { new: true }).exec();
                        
                    }

                }
            }
            
            
            for (let u = 0; u < champ_fille.length; u++) {
                const champ_fillemodel = champ_fille[u];
                
                tabdonneesqlamettreajour[champ_fillemodel.nomduchamp]=elementmisajour[champ_fillemodel.identifiant];
                console.log(champ_fillemodel.nomduchamp+'-'+tabdonneesqlamettreajour[champ_fillemodel.nomduchamp])
            }
            
            console.log(await tabdonneesqlamettreajour.save());
        }

        return this.classingService.getClass(model);
    }

}