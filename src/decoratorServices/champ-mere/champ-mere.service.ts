import { Inject, Injectable } from '@nestjs/common';
import mongoose, { Model as MongooseModel } from 'mongoose';
import { CHAMP_Mere_METADATA_KEY, ChampMereMetadata } from 'src/decorators/champ-mere/champ-mere.decorator'; // Assurez-vous d'importer ChampMereMetadata depuis le bon emplacement
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Model, Sequelize } from 'sequelize';
import { Model as SequelizeModel } from 'sequelize';
import { ForeignKeyService } from '../foreign_key/foreign-key.service';
import { ClassLoaderService } from 'src/sync-services/classLoader.service';
import { MongoNamespace } from 'src/test-mongo/schema/dns-affilie.schema';

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
    const data = await (dynamicModel as any).findAll();
    const metadata: ChampMereMetadata[] = Reflect.getMetadata(CHAMP_Mere_METADATA_KEY, dynamicModel);

    if (!metadata || metadata.length === 0) {
      return [];
    }

    const groupedMetadata = new Map<typeof SequelizeModel, ChampMereMetadata[]>();
    let tabFille: any[] = [];
    for (const champMetadata of metadata) {
      if (!groupedMetadata.has(champMetadata.tableFille)) {
        groupedMetadata.set(champMetadata.tableFille, []);
      }

      groupedMetadata.get(champMetadata.tableFille)?.push(champMetadata);

      // tabFille.push(await this.enregistrerInstanceDeModel(champMetadata.tableFille,null));
    }

    // const groupedMetadataArray: any[][] = [...groupedMetadata.values()];

    const result: { tablefille: any, metadata: ChampMereMetadata[] }[] = [];

    for (const [tableFille, metadataArray] of groupedMetadata) {
      result.push({ tablefille: tableFille, metadata: this.filtrerDonnees(metadataArray) });
    }
    const alldata: { tablefille: any, data: any[] }[] = [];
    for (let index = 0; index < result.length; index++) {
      const donnees=await this.extractionService.extraireDonnees(dynamicModel, modelMongoose, result[index].metadata, data, result[index].tablefille, (dynamicModel as any).name,this.connection) ;
      alldata.push({ tablefille: result[index].tablefille, data: await donnees });
      
        for (let y = 0; y < donnees.length; y++) {
          this.savingOnMongo.savingOnMongo(result[index].tablefille,donnees[y],this.connection)
        }
        
      
    }
    
    
    return await alldata;
  }





  
  filtrerDonnees(donnees): any[] {
    return donnees.map((item) => {
      const { tableFille, ...rest } = item;
      return rest;
    });
  }
  
}
