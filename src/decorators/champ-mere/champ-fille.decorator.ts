import { SetMetadata } from '@nestjs/common';
import mongoose from 'mongoose';

import { Table, Model, Column, Sequelize } from 'sequelize-typescript';
import { Document } from 'mongodb';
// Créez une interface pour spécifier les métadonnées du champ
interface ChampFilleMetadata {
  tableMere: any;
  nomduchamp: string;
  type: any;
}

// Utilisez une clé de symbole (Symbol) pour stocker les métadonnées personnalisées
const CHAMP_FILLE_METADATA_KEY = Symbol('ChampFilleMetadata');

// Définissez le decorator ChampFille
function ChampFille(tableMere: any, nomduchamp: string, type: any) {
  return (target: Document, propertyKey: string) => {
    // Créez ou récupérez les métadonnées existantes pour la classe cible
    const existingMetadata: ChampFilleMetadata[] = Reflect.getMetadata(
      CHAMP_FILLE_METADATA_KEY,
      target.constructor
    ) || [];

    // Ajoutez les nouvelles métadonnées
    existingMetadata.push({ tableMere, nomduchamp, type });

    // Enregistrez les métadonnées mises à jour pour la classe cible
    Reflect.defineMetadata(CHAMP_FILLE_METADATA_KEY, existingMetadata, target.constructor);

  };
}

// Exportez le decorator ChampMere pour une utilisation dans d'autres modèles
export { ChampFille,CHAMP_FILLE_METADATA_KEY,ChampFilleMetadata };


