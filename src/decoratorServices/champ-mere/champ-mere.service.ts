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
import { Update } from 'src/sync-services/update.service';
import { InsertionParTableFilleUpdate } from 'src/sync-services/insertionParTablefilleUpdate.service';
import { InsertionParTableFille } from 'src/sync-services/insertionParTablefille.service';
@Injectable()
export class ChampMereService {
  constructor(
    @InjectConnection('test') private readonly connection: Connection,
    private readonly fkService: ForeignKeyService,
    private readonly findclasSService: ClassLoaderService,
    private readonly getIdMongoService: GettingIdMongoService,
    private readonly extractionService:ExtractionService,
    private readonly savingOnMongo:SavingOnMongoService,
    private readonly insertionParTableFilleUpdate:InsertionParTableFilleUpdate,
    private readonly insertionParTableFille:InsertionParTableFille,
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
    //console.log({dynamicModel:dynamicModel,modelMongoose:modelMongoose,result:result,data:data})
    return {dynamicModel:dynamicModel,modelMongoose:modelMongoose,result:result,data:data}
  }

  
  
  filtrerDonnees(donnees): any[] {
    return donnees.map((item) => {
      const { tableFille, ...rest } = item;
      return rest;
    });
  }
  
}
