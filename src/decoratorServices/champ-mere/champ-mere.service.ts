import { Inject, Injectable } from '@nestjs/common';
import { Model as MongooseModel} from 'mongoose';
import { CHAMP_Mere_METADATA_KEY, ChampMereMetadata } from 'src/decorators/champ-mere/champ-mere.decorator'; // Assurez-vous d'importer ChampMereMetadata depuis le bon emplacement
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Model as SequelizeModel } from 'sequelize';
import { ForeignKeyService } from '../foreign_key/foreign-key.service';
@Injectable()
export class ChampMereService {
  constructor(
    @InjectConnection('test') private readonly connection: Connection,
    private readonly fkService:ForeignKeyService
  ) {}
    
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
  async groupChampMereDataByTableFille(dynamicModel: SequelizeModel,modelMongoose: MongooseModel<any>) {
    const data=await (dynamicModel as any).findAll();
    const metadata: ChampMereMetadata[] = Reflect.getMetadata(CHAMP_Mere_METADATA_KEY, dynamicModel);
    
    if (!metadata || metadata.length === 0) {
      return [];
    }
  
    const groupedMetadata = new Map<typeof SequelizeModel, ChampMereMetadata[]>();
    let tabFille:any[]=[];
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
      result.push({ tablefille:tableFille, metadata: await this.filtrerDonnees(metadataArray) });
    }
    const alldata:{ tablefille: any, data: any[] }[] = [];
    for (let index = 0; index < result.length; index++) {
      alldata.push({tablefille:result[index].tablefille,data:(await this.extraireDonnees(result[index].metadata,data,result[index].tablefille))});
    }
    
    return alldata;
  }
  
  



  async enregistrerInstanceDeModel(nomDuModele: string, data: any): Promise<any> {
    // Vérifiez que le modèle existe dans la base de données
    if (!this.connection.model(nomDuModele)) {
      throw new Error();
    }
    await this.connection.readyState;
    const model:any = this.connection.models[nomDuModele] as any as MongooseModel<Document> ;
    const instance = new model();
    
    console.log(instance);
    return instance;
  }
  filtrerDonnees(donnees): any[] {
    return donnees.map((item) => {
      const { tableFille, ...rest } = item;
      return rest;
    });
  }
   async extraireDonnees(result,data,nomdumodele): Promise<Record<string, any>[]> {
    const resultat:any= [];
    
    const model:any = this.connection.models[nomdumodele] as any as MongooseModel<Document> ;
      const instance = new model();
      console.log( await this.fkService.getAllForeignKeysInAModel(model));
    //Bouler les donnees
    data.forEach((itemdata)=>{
      const nouvelObjet: Record<string, any> = {};

    //Boucler les champs a inserer
    result.forEach((item) => {
      
      const identifiant = item.identifiant;
      const valeur = itemdata[identifiant];
      //Inserer le champ et recuperer la valeur du champ dans le data
      nouvelObjet[item.nomduchamp] = valeur;

    });
      resultat.push(nouvelObjet);
    })
    

    return resultat;
  }

}
