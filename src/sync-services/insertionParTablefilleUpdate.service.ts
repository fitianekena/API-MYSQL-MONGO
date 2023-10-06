import { Injectable } from "@nestjs/common";
import { ExtractionService } from "./extraction.service";
import { SavingOnMongoService } from "./savingOnMongo.service";
import { Model, Op, Sequelize } from 'sequelize';
import { InjectConnection } from "@nestjs/mongoose";
import { Connection } from "mongoose";
@Injectable()
export class InsertionParTableFilleUpdate{
     constructor(
        private readonly extractionService:ExtractionService,
        private readonly savingOnMongo:SavingOnMongoService,
        @InjectConnection('test') private readonly connection: Connection,
     ){

     }
    async insertionParTableFilleUpdate(dynamicModel:any,modelMongoose:any,result:any,data:any){
    
        const alldata: { tablefille: any, data: any[] }[] = [];
        let nombredemiseajour=0;
        //boucler les tables filles 
        for (let index = 0; index < result.length; index++) {
          //Creer les donnees qui s'apparente a la tableMere 
          //l'ajouter au tableau
          const idlist=await  this.extractionService.extraireDonneesIdIhany(dynamicModel, modelMongoose, result[index].metadata, data, result[index].tablefille, (dynamicModel as any).name,this.connection) ;
          //Recuperer le nom du primary key de l'objet sequelize 
          const primaryKeyField = Object.keys((dynamicModel as any).rawAttributes).find(
            (key) => (dynamicModel as any).rawAttributes[key].primaryKey
        );
        const data2=await dynamicModel.findAll({
          where: {
            [primaryKeyField]: {
    
              [Op.notIn]: idlist,
            },
          },
        });
          console.log(data2)
          const donnees=await this.extractionService.extraireDonnees(dynamicModel, modelMongoose, result[index].metadata, data2, result[index].tablefille, (dynamicModel as any).name,this.connection) ;
         
          alldata.push({ tablefille: result[index].tablefille, data: await donnees });
           
            for (let y = 0; y < donnees.length; y++) {
              //Sauvegarder avec la fonction de saving 
              nombredemiseajour++;
              this.savingOnMongo.savingOnMongo(result[index].tablefille,donnees[y],this.connection)
            }
                      
        }
        return 'nombre d element mis a jour '+nombredemiseajour;
      }
}