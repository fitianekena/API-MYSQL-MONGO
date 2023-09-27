import { SetMetadata } from '@nestjs/common';
import mongoose from 'mongoose';

import { Table, Model, Column, Sequelize } from 'sequelize-typescript';

// Créez une interface pour spécifier les métadonnées du champ
interface ChampFilleMetadata {
  tableMere: typeof Model;
  nomduchamp: string;
  type: any;
}

// Utilisez une clé de symbole (Symbol) pour stocker les métadonnées personnalisées
const CHAMP_Fille_METADATA_KEY = Symbol('ChampFilleMetadata');

// Définissez le decorator ChampFille
function ChampFille(tableMere: typeof Model, nomduchamp: string, type: any) {
  return (target: Model, propertyKey: string) => {
    // Créez ou récupérez les métadonnées existantes pour la classe cible
    const existingMetadata: ChampFilleMetadata[] = Reflect.getMetadata(
      CHAMP_Fille_METADATA_KEY,
      target.constructor
    ) || [];

    // Ajoutez les nouvelles métadonnées
    existingMetadata.push({ tableMere, nomduchamp, type });

    // Enregistrez les métadonnées mises à jour pour la classe cible
    Reflect.defineMetadata(CHAMP_Fille_METADATA_KEY, existingMetadata, target.constructor);

    // Utilisez le decorator Column pour définir le type de données dans Sequelize
    Column({ type })(target, propertyKey);
  };
}

// Exportez le decorator ChampMere pour une utilisation dans d'autres modèles
export { ChampFille };


