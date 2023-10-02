import { SetMetadata } from '@nestjs/common';
import mongoose from 'mongoose';
import {Model as ModelMongo} from 'mongoose';
import { Table, Model, Column, Sequelize } from 'sequelize-typescript';

// Créez une interface pour spécifier les métadonnées du champ
interface ChampMereMetadata {
  tableFille:any;
  nomduchamp: string;
  type: any;
  identifiant:string
}

// Utilisez une clé de symbole (Symbol) pour stocker les métadonnées personnalisées
export const CHAMP_Mere_METADATA_KEY = Symbol('ChampMereMetadata');

// Définissez le decorator ChampMere
function ChampMere(tableFille: any | string, nomduchamp: string, type: any, identifiant: string) {
  return (target: Model, propertyKey: string) => {
    // Convertir la chaîne en objet si tableFille est une chaîne
    

    if (!tableFille) {
      throw new Error(`La table fille "${tableFille}" n'a pas été trouvée.`);
    }

    // Créez ou récupérez les métadonnées existantes pour la classe cible
    const existingMetadata: ChampMereMetadata[] = Reflect.getMetadata(
      CHAMP_Mere_METADATA_KEY,
      target.constructor
    ) || [];

    // Ajoutez les nouvelles métadonnées
    existingMetadata.push({ tableFille: tableFille, nomduchamp, type, identifiant });

    // Enregistrez les métadonnées mises à jour pour la classe cible
    Reflect.defineMetadata(CHAMP_Mere_METADATA_KEY, existingMetadata, target.constructor);

    // Utilisez le decorator Column pour définir le type de données dans Sequelize
    Column({ type })(target, propertyKey);
  };
}

// Exportez le decorator ChampMere pour une utilisation dans d'autres modèles
export { ChampMere,ChampMereMetadata };


