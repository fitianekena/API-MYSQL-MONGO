import { Inject, Injectable } from '@nestjs/common';
import mongoose, { Model as MongooseModel } from 'mongoose';
import { CHAMP_Mere_METADATA_KEY, ChampMereMetadata } from 'src/decorators/champ-mere/champ-mere.decorator'; // Assurez-vous d'importer ChampMereMetadata depuis le bon emplacement
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Model, Op, Sequelize } from 'sequelize';
import { Model as SequelizeModel } from 'sequelize';
import { ForeignKeyService } from '../foreign_key/foreign-key.service';
import { ClassLoaderService } from 'src/sync-services/classLoader.service';


import { SavingOnMongoService } from '../../sync-services/savingOnMongo.service';
import { ExtractionService } from 'src/sync-services/extraction.service';
import { GettingIdMongoService } from 'src/sync-services/gettingIdMongoService.service';
@Injectable()
export class ChampMereService {
  constructor(
    @InjectConnection('test') private readonly connection: Connection,
    private readonly fkService: ForeignKeyService,
    private readonly findclasSService: ClassLoaderService,
    private readonly getIdMongoService: GettingIdMongoService,
    private readonly extractionService:ExtractionService,
    private readonly savingOnMongo:SavingOnMongoService,
  ) { }

  
  async groupChampMereDataByTableFille(dynamicModel: SequelizeModel, modelMongoose: MongooseModel<any>) {
    //Recuperation de tous les donnes chez Sql
    const data = await (dynamicModel as any).findAll();
    //Recuperer les metadata ChampMere  contenus dans la classe Mere 
    const metadata: ChampMereMetadata[] = Reflect.getMetadata(CHAMP_Mere_METADATA_KEY, dynamicModel);
    //Si il n'y pas de Metadata on sort de la f onction
    if (!metadata || metadata.length === 0) {
      return [];
    }
    //Creation de groupedMetadata pouyr avoir le metadata groupes par ClasseFille
    const groupedMetadata = new Map<typeof SequelizeModel, ChampMereMetadata[]>();
    //Boucler pour avoir 
    for (const champMetadata of metadata) {
      if (!groupedMetadata.has(champMetadata.tableFille)) {
        //creer un nouvel element dans l'ensemble et instancier le tableau 
        groupedMetadata.set(champMetadata.tableFille, []);
      }
      //Push au sein  du tableau 
      groupedMetadata.get(champMetadata.tableFille)?.push(champMetadata);  
    }
    
    //Definition du result pour avoir le tableau de Metadata groupe 
    const result: { tablefille: any, metadata: ChampMereMetadata[] }[] = [];

    for (const [tableFille, metadataArray] of groupedMetadata) {
      result.push({ tablefille: tableFille, metadata: this.filtrerDonnees(metadataArray) });
    }
    //recuperation all data 
    return await this.insertionParTableFilleUpdate(dynamicModel,modelMongoose,result,this.connection,data);
  }

  //Fonction pour l'insertion des donnes table filles 
  async insertionParTableFille(dynamicModel:any,modelMongoose:any,result:any,connection:any,data:any){
    
    const alldata: { tablefille: any, data: any[] }[] = [];
    //boucler les tables filles 
    for (let index = 0; index < result.length; index++) {
      //Creer les donnees qui s'apparente a la tableMere 
      //l'ajouter au tableau
      //const idlist=await  this.extractionService.extraireDonneesIdIhany(dynamicModel, modelMongoose, result[index].metadata, data, result[index].tablefille, (dynamicModel as any).name,connection) ;
      
      const donnees=await this.extractionService.extraireDonnees(dynamicModel, modelMongoose, result[index].metadata, data, result[index].tablefille, (dynamicModel as any).name,connection) ;
      
      alldata.push({ tablefille: result[index].tablefille, data: await donnees });
        
        for (let y = 0; y < donnees.length; y++) {
          //Sauvegarder avec la fonction de saving 
          this.savingOnMongo.savingOnMongo(result[index].tablefille,donnees[y],this.connection)
        }
        
      
    }
    
  }
  async insertionParTableFilleUpdate(dynamicModel:any,modelMongoose:any,result:any,connection:any,data:any){
    
    const alldata: { tablefille: any, data: any[] }[] = [];
    //boucler les tables filles 
    for (let index = 0; index < result.length; index++) {
      //Creer les donnees qui s'apparente a la tableMere 
      //l'ajouter au tableau
      const idlist=await  this.extractionService.extraireDonneesIdIhany(dynamicModel, modelMongoose, result[index].metadata, data, result[index].tablefille, (dynamicModel as any).name,connection) ;
      
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
      //const donnees=await this.extractionService.extraireDonnees(dynamicModel, modelMongoose, result[index].metadata, data2, result[index].tablefille, (dynamicModel as any).name,connection) ;
     
      //alldata.push({ tablefille: result[index].tablefille, data: await donnees });
       
        // for (let y = 0; y < donnees.length; y++) {
        //   //Sauvegarder avec la fonction de saving 
        //   this.savingOnMongo.savingOnMongo(result[index].tablefille,donnees[y],this.connection)
        // }
        
      
    }
    
  }



  
  filtrerDonnees(donnees): any[] {
    return donnees.map((item) => {
      const { tableFille, ...rest } = item;
      return rest;
    });
  }
  
}
