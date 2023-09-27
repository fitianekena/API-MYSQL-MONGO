import { Injectable } from '@nestjs/common';
import { Model } from 'sequelize-typescript';
import { CHAMP_Mere_METADATA_KEY, ChampMereMetadata } from 'src/decorators/champ-mere/champ-mere.decorator'; // Assurez-vous d'importer ChampMereMetadata depuis le bon emplacement

@Injectable()
export class ChampMereService {
    ChampMereMetadata
  // Fonction pour récupérer la table fille associée à un identifiant
  getTableFilleModel(target: Model, identifiant: string): typeof Model | undefined {
    const metadata: ChampMereMetadata[] = Reflect.getMetadata(CHAMP_Mere_METADATA_KEY, target.constructor);
    const champMetadata = metadata.find((item) => item.identifiant === identifiant);
    return champMetadata?.tableFille;
  }

  // Fonction pour récupérer le nom du champ associé à un identifiant
  getNomDuChamp(target: Model, identifiant: string): string | undefined {
    const metadata: ChampMereMetadata[] = Reflect.getMetadata(CHAMP_Mere_METADATA_KEY, target.constructor);
    const champMetadata = metadata.find((item) => item.identifiant === identifiant);
    return champMetadata?.nomduchamp;
  }

  // Fonction pour récupérer le type du champ associé à un identifiant
  getTypeDuChamp(target: Model, identifiant: string): any | undefined {
    const metadata: ChampMereMetadata[] = Reflect.getMetadata(CHAMP_Mere_METADATA_KEY, target.constructor);
    const champMetadata = metadata.find((item) => item.identifiant === identifiant);
    return champMetadata?.type;
  }
  getTablesFilles(model: typeof Model): typeof Model[] {
    const metadata: ChampMereMetadata[] = Reflect.getMetadata(CHAMP_Mere_METADATA_KEY, model.prototype);

    // Filtrer les métadonnées pour obtenir uniquement les tables filles uniques
    const tablesFilles: typeof Model[] = [];
    const seen: Set<typeof Model> = new Set();

    for (const champMetadata of metadata) {
      if (!seen.has(champMetadata.tableFille)) {
        seen.add(champMetadata.tableFille);
        tablesFilles.push(champMetadata.tableFille);
      }
    }

    return tablesFilles;
  }
  getChampMereMetadata(model: typeof Model): ChampMereMetadata[] | undefined {
    return Reflect.getMetadata(CHAMP_Mere_METADATA_KEY, model.prototype);
  }
   groupChampMereDataByTableFille(dynamicModel: Model<any, any>): any {
    const metadata: ChampMereMetadata[] = Reflect.getMetadata(CHAMP_Mere_METADATA_KEY, dynamicModel);
  
    // Vérifiez si les métadonnées existent et ne sont pas vides
    if (!metadata || metadata.length === 0) {
      return [];
    }
  
    // Utilisez un Map pour regrouper les métadonnées par tableFille
    const groupedMetadata = new Map<typeof Model, ChampMereMetadata[]>();
    let tabFille:any[]=[];
    for (const champMetadata of metadata) {
      if (!groupedMetadata.has(champMetadata.tableFille)) {
        groupedMetadata.set(champMetadata.tableFille, []);
      }
  
      groupedMetadata.get(champMetadata.tableFille)?.push(champMetadata);
      tabFille.push(champMetadata.tableFille as any)
    }
  
    // Convertir le Map en un tableau 2D
    const groupedMetadataArray: any[][] = [...groupedMetadata.values()];
  
    // Créer un tableau résultant avec la tableFille, le type et les métadonnées
    const result: { tableFille: typeof Model, metadata: ChampMereMetadata[] }[] = [];
  
    for (const [tableFille, metadataArray] of groupedMetadata) {
      result.push({ tableFille:tableFille, metadata: metadataArray });
    }
  
    return tabFille;
  }
  
  
}
