import {  Model as MongooseModel} from "mongoose";
import { ClassLoaderService } from "src/sync-services/classLoader.service";


import { Model as SequelizeModel} from "sequelize";
import { GettingIdMongoService } from "./gettingIdMongoService.service";
import { Injectable } from "@nestjs/common";
import { ForeignKeyService } from "src/decoratorServices/foreign_key/foreign-key.service";
import { AppModule } from "src/app.module";
import * as path from "path";
import { ClassingService } from "./classing.service";

@Injectable()
export class ExtractionService{
    constructor(
        private readonly findClassService:ClassLoaderService,
        private readonly foreignKeyService:ForeignKeyService,
        private readonly gettingMongoIdService:GettingIdMongoService,
        private readonly classingService:ClassingService,
    ){

    }
    async extraireDonnees(sequelizeModel, mongooseModel, result, data, nomdumodele, nomdelamere,connection): Promise<Record<string, any>[]> {
        const resultat: any[] = [];
    
    // Recuperer les attributs de la classe cible 
    const model: any = connection.models[nomdumodele] as any as MongooseModel<Document>;
    const instance = new model();

    const className: any =await  this.classingService.getClass(nomdumodele);
    console.log(className)
    
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
      if (metadata) {
        
      
      for (const champMetadata of metadata) {
        
        // //Cas ou on reference un id par rapport a la table Mere
        // if (champMetadata.tableMere == nomdelamere && ) {
        //   //Recuperer l'id dans mongodb de la table en question 
        //   const id = await this.gettingMongoIdService.getTheIdOfADocumentInTheMongoDatabase(sequelizeModel, mongooseModel, itemdata);
        //   //ajouter le fk a l'objt 
        //   nouvelObjet[champMetadata.local] = id;
        //   //Essai recuperation de la table Mere Sequelize 
        //   const model:SequelizeModel=sequelizeModel.sequelize.model(champMetadata.tableMere);
        // }
        // //Cas ou on reference un id par rapport a une autre table
        // else  {
          // console.log(await sequelizeModel.sequelize.model(champMetadata.tableMere).findAll())
          // console.log(connection.model(champMetadata.tableMere))
          // console.log(itemdata)
          const id:any|undefined=await this.gettingMongoIdService.getTheIdinMongoNotKnowingTheSequelizeModel(connection,itemdata,champMetadata.tableMere,champMetadata.local,champMetadata.foreign,champMetadata.refcollect)
          nouvelObjet[champMetadata.local] = id;
          
        // }
      }
    }
    
      
      resultat.push(nouvelObjet);
    }));
    
    return resultat;
    
      }
      async extraireDonneesIdIhany(sequelizeModel, mongooseModel, result, data, nomdumodele, nomdelamere,connection): Promise<Record<string, any>[]> {
        const resultat: any[] = [];
    
    // Recuperer les attributs de la classe cible 
    const model: any = await connection.models[nomdumodele] as any as MongooseModel<Document>;
    const instance = new model();

    const className: any =await  this.classingService.getClass(nomdumodele);
    const metadata = await this.foreignKeyService.getAllForeignKeysInAModel(className);
    //console.log(className)
    
    
    let idlist:any[]=[]
    // Boucler les données
    await Promise.all(data.map(async (itemdata) => {
      
          
          //Recuperer l'id dans mongodb de la table en question 
          const id = await this.gettingMongoIdService.getTheIdInTheMongoDatabase(sequelizeModel, model, itemdata); 
          if (id) {
            idlist.push(String(id))
          }
          
        
        
      
    }))
    return idlist;
      
      
    };
    
    
    
      
}