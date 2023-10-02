import {  Model as MongooseModel} from "mongoose";
import { ClassLoaderService } from "src/sync-services/classLoader.service";
import { MongoNamespace } from "src/test-mongo/schema/dns-affilie.schema";

import { Model as SequelizeModel} from "sequelize";
import { GettingIdMongoService } from "./gettingIdMongoService.service";
import { Injectable } from "@nestjs/common";
import { ForeignKeyService } from "src/decoratorServices/foreign_key/foreign-key.service";

@Injectable()
export class ExtractionService{
    constructor(
        private readonly findClassService:ClassLoaderService,
        private readonly foreignKeyService:ForeignKeyService,
        private readonly gettingMongoIdService:GettingIdMongoService,
    ){

    }
    async extraireDonnees(sequelizeModel, mongooseModel, result, data, nomdumodele, nomdelamere,connection): Promise<Record<string, any>[]> {
        const resultat: any[] = [];
    
    // Recuperer les attributs de la classe cible 
    const model: any = connection.models[nomdumodele] as any as MongooseModel<Document>;
    const instance = new model();
    const className: any = this.findClassService.findClassByClassName(nomdumodele, MongoNamespace);
    
    // Recuperer le contenu de @ForeignKey de la table fille
    const metadata = await this.foreignKeyService.getAllForeignKeysInAModel(className);
    
    // Boucler les données
    await Promise.all(data.map(async (itemdata) => {
      const nouvelObjet: Record<string, any> = {};
      
      // Boucler les champs à insérer
      await Promise.all(result.map(async (item) => {
        const identifiant = item.identifiant;
        const valeur = itemdata[identifiant];
        // Inserer le champ et recuperer la valeur du champ dans le data
        nouvelObjet[item.nomduchamp] = valeur;
      }));
      
      for (const champMetadata of metadata) {
        if (champMetadata.tableMere == nomdelamere) {
          //Recuperer l'id dans mongodb de la table en question 
          const id = await this.gettingMongoIdService.getTheIdOfADocumentInTheMongoDatabase(sequelizeModel, mongooseModel, itemdata);
          //ajouter le fk a l'objt 
          nouvelObjet[champMetadata.local] = id;
          //Essai recuperation de la table Mere Sequelize 
          const model:SequelizeModel=sequelizeModel.sequelize.model(champMetadata.tableMere);
        }
        else  {
          console.log(sequelizeModel.sequelize.model(champMetadata.tableMere))
    
        }
      }
    
      
      resultat.push(nouvelObjet);
    }));
    
    return resultat;
    
      }
}