
import { SetMetadata } from '@nestjs/common';
import { Prop } from '@nestjs/mongoose';
import { Document } from 'mongodb';
import mongoose, { Mongoose, Schema } from 'mongoose';
import {Model} from 'mongoose';


// Créez une interface pour spécifier les métadonnées du champ
interface ForeignKeydata {
  local:string,
  foreign:string,
  tableMere:any,

}

// Utilisez une clé de symbole (Symbol) pour stocker les métadonnées personnalisées
export const FOREIGNKEYDATA = Symbol('ForeignKeydata');

// Définissez le decorator ChampMere
function ForeignKey(tableMere:any,local:string,foreign:string) {
  return (target: Document, propertyKey: string) => {
    if (!tableMere) {
      throw new Error(`La table parente  "${tableMere}" n'a pas été trouvée.`);
    }
    // Créez ou récupérez les métadonnées existantes pour la classe cible
    const existingMetadata: ForeignKeydata [] = Reflect.getMetadata(
        FOREIGNKEYDATA,
      target.constructor
    ) || [];
   
    // Ajoutez les nouvelles métadonnées
    existingMetadata.push({ local,foreign,tableMere });
    console.log(existingMetadata);
    console.log(target.constructor);
    // Enregistrez les métadonnées mises à jour pour la classe cible
    Reflect.defineMetadata(FOREIGNKEYDATA, existingMetadata,target.constructor);
    

    
  };
}

// Exportez le decorator ChampMere pour une utilisation dans d'autres modèles
export { ForeignKey,ForeignKeydata };


