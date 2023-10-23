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
        private readonly mongoconnectionservice: MongoConnectionService,
        private readonly reflector: Reflector,
       


    ) { }
    async synctoMySql(nomdedatabase: string, nomtableprioritaire: string, nomdedatabasemongo: string, id: string,sequelizeModel:any) {
        //Recuperation de la connexion mongo recommande
        const dbmongo = await this.mongoconnectionservice.getConnection(nomdedatabasemongo);
        //Recuperation de la connexion sequelize recommande
        const connection = await this.sequelizeconnectionmodule.getConnection(nomdedatabase);
        //Recuperation de la classe corresponand a la table donnee par lutilisateur
        const model = await this.utilservice.findMostSimilarString(nomtableprioritaire, this.classingService.getClassNames());
        //recuperation des annotations internes et des autres table disposant de la meme table mere 
        const groupedMetadata: any = await this.champfilleservice.getAllModelsWithTheSameMere(this.classingService.getClass(model));

        // console.log(groupedMetadata);
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
        const sqlciblemodel = connection;
        const conditions = {
            [reference]: {
                [Op.eq]: id, // Utilisez l'opérateur d'égalité (ou un autre opérateur selon vos besoins)
            },
        };
        //const tabdonneesqlamettreajour=await sqlciblemodel.findOne({where:conditions});
        console.log(sqlciblemodel)
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
            let updateQuery = 'UPDATE '+champ_fille[0].tableMere+ ' SET ';
            for (let u = 0; u < champ_fille.length; u++) {
                const champ_fillemodel = champ_fille[u];
                
                if (u==0) {
                    updateQuery=updateQuery+"" +champ_fillemodel.nomduchamp+"='"+elementmisajour[champ_fillemodel.identifiant]+"'";
                }else{
                    updateQuery=updateQuery+"," +champ_fillemodel.nomduchamp+"='"+elementmisajour[champ_fillemodel.identifiant]+"'";

                }
                
                
                 
                
                

            }
            const vodiny=updateQuery+' WHERE '+ reference+'=' +id;
            console.log(vodiny);
            connection.query(updateQuery).then(([results]) => {
                console.log(`Rows affected: ${results[0]}`);
              })
            
            // console.log(tabdonneesqlamettreajour)
        }

        return this.classingService.getClass(model);
    }

}