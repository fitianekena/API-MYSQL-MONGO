import { Injectable } from "@nestjs/common";
import { ExtractionService } from "./extraction.service";
import { SavingOnMongoService } from "./savingOnMongo.service";
import { Model, Op, Sequelize } from 'sequelize';
import { InjectConnection } from "@nestjs/mongoose";
import { Connection } from "mongoose";
@Injectable()
export class InsertionParTableFille {
    constructor(
        private readonly extractionService: ExtractionService,
        private readonly savingOnMongo: SavingOnMongoService,
        @InjectConnection('test') private readonly connection: Connection,
    ) {}
    async insertionParTableFille(dynamicModel:any,modelMongoose:any,result:any,data:any,connection2:any){
        
        const alldata: { tablefille: any, data: any[] }[] = [];
        //boucler les tables filles 
        for (let index = 0; index < result.length; index++) {
          //Creer les donnees qui s'apparente a la tableMere 
          //l'ajouter au tableau
          //const idlist=await  this.extractionService.extraireDonneesIdIhany(dynamicModel, modelMongoose, result[index].metadata, data, result[index].tablefille, (dynamicModel as any).name,connection) ;
          
          const donnees=await this.extractionService.extraireDonnees(dynamicModel, modelMongoose, result[index].metadata, data, result[index].tablefille, (dynamicModel as any).name,connection2) ;
          
          alldata.push({ tablefille: result[index].tablefille, data: await donnees });
            
            for (let y = 0; y < donnees.length; y++) {
              //Sauvegarder avec la fonction de saving 
              this.savingOnMongo.savingOnMongo(result[index].tablefille,donnees[y],connection2)
            }
        }
        
    }
    async insertionParTableFilleGlobal(dynamicModel:any,modelMongoose:any,result:any,data:any){
      return await this.insertionParTableFille(dynamicModel,modelMongoose,result,data,this.connection);
      
      
    }

}