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
import { GettingIdMongoService } from '../gettingIdMongoService.service';
@Injectable()
export class ChampMereService {
  constructor(
    @InjectConnection('test') private readonly connection: Connection,
    private readonly fkService: ForeignKeyService,
    private readonly findclasSService: ClassLoaderService,
    private readonly getIdMongoService: GettingIdMongoService,
  ) { }

  // Fonction pour récupérer la table fille associée à un identifiant
  //   getTableFilleModel(target: Model, identifiant: string): typeof Model | undefined {
  //     const metadata: ChampMereMetadata[] = Reflect.getMetadata(CHAMP_Mere_METADATA_KEY, target.constructor);
  //     const champMetadata = metadata.find((item) => item.identifiant === identifiant);
  //     return champMetadata?.tableFille;
  //   }

  // Fonction pour récupérer le nom du champ associé à un identifiant
  getNomDuChamp(target: SequelizeModel, identifiant: string): string | undefined {
    const metadata: ChampMereMetadata[] = Reflect.getMetadata(CHAMP_Mere_METADATA_KEY, target.constructor);
    const champMetadata = metadata.find((item) => item.identifiant === identifiant);
    return champMetadata?.nomduchamp;
  }

  // Fonction pour récupérer le type du champ associé à un identifiant
  getTypeDuChamp(target: SequelizeModel, identifiant: string): any | undefined {
    const metadata: ChampMereMetadata[] = Reflect.getMetadata(CHAMP_Mere_METADATA_KEY, target.constructor);
    const champMetadata = metadata.find((item) => item.identifiant === identifiant);
    return champMetadata?.type;
  }
  getTablesFilles(model: typeof SequelizeModel): typeof SequelizeModel[] {
    const metadata: ChampMereMetadata[] = Reflect.getMetadata(CHAMP_Mere_METADATA_KEY, model.prototype);

    // Filtrer les métadonnées pour obtenir uniquement les tables filles uniques
    const tablesFilles: typeof SequelizeModel[] = [];
    const seen: Set<typeof SequelizeModel> = new Set();

    // for (const champMetadata of metadata) {
    //   if (!seen.has(champMetadata.tableFille)) {
    //     seen.add(champMetadata.tableFille);
    //     tablesFilles.push(champMetadata.tableFille);
    //   }
    // }

    return tablesFilles;
  }
  getChampMereMetadata(model: typeof SequelizeModel): ChampMereMetadata[] | undefined {
    return Reflect.getMetadata(CHAMP_Mere_METADATA_KEY, model.prototype);
  }
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
      const donnees=await this.extraireDonnees(dynamicModel, modelMongoose, result[index].metadata, data, result[index].tablefille, (dynamicModel as any).name) ;
      alldata.push({ tablefille: result[index].tablefille, data: await donnees });
      
        for (let y = 0; y < donnees.length; y++) {
          this.enregistrerInstanceDeModel(result[index].tablefille,donnees[y])
          
        }
        
      
    }
    
    
    return await alldata;
  }





  async enregistrerInstanceDeModel(nomDuModele: string, data: any): Promise<any> {
    // Vérifiez que le modèle existe dans la base de données
    if (!this.connection.model(nomDuModele)) {
      throw new Error();
    }
    this.connection.readyState;
    const model: any = this.connection.models[nomDuModele] as any as MongooseModel<Document>;
    const instance = new model(data);
    instance.save();
    
    return instance;
  }
  filtrerDonnees(donnees): any[] {
    return donnees.map((item) => {
      const { tableFille, ...rest } = item;
      return rest;
    });
  }
  async extraireDonnees(sequelizeModel, mongooseModel, result, data, nomdumodele, nomdelamere): Promise<Record<string, any>[]> {
    const resultat: any[] = [];

// Recuperer les attributs de la classe cible 
const model: any = this.connection.models[nomdumodele] as any as MongooseModel<Document>;
const instance = new model();
const className: any = this.findclasSService.findClassByClassName(nomdumodele, MongoNamespace);

// Recuperer le contenu de @ForeignKey de la table fille
const metadata = await this.fkService.getAllForeignKeysInAModel(className);

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
      const id = await this.getIdMongoService.getTheIdOfADocumentInTheMongoDatabase(sequelizeModel, mongooseModel, itemdata);
      nouvelObjet[champMetadata.local] = id;
      const model:Model=sequelizeModel.sequelize.model(champMetadata.tableMere);
      
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
