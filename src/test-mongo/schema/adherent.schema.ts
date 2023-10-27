import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ForeignKey } from 'src/decorators/champ-mere/foreign-key.decorator';
import { Centre } from './centre.schema';

@Schema({collection:'adherents'})
export class Adherent extends Document {
  @Prop()
  code_adherent: number;

  @Prop()
  sigle: string;

  @Prop()
  raison_sociale: string;

  @Prop({ type: 'ObjectId',default:new mongoose.Types.ObjectId('6495719ae1bf3013c68e7cbe') })
  type: string; 

  @Prop()
  adresse: string;

  @Prop()
  directeur_nom: string;

  @Prop()
  employeur_fonction: string;

  @Prop()
  convention: string;

  @Prop()
  bp: string;

  @Prop()
  tel: string;

  @Prop()
  fax: string;

  @Prop()
  num_stat: string;

  @Prop()
  nif: string;

  @Prop()
  cnaps: string;

  @Prop()
  reference_cnaps: string; 

  @Prop()
  activite_principale: string;

  @Prop()
  activite_secondaire: string; 

  @Prop()
  activite_date_debut: Date;

  @Prop()
  total_salaire: number;

  @Prop()
  travailleur_lieu: string;

  @Prop()
  travailleur_nombre: number;

  @Prop()
  homme_nombre: number;

  @Prop()
  femme_nombre: number;

  @Prop()
  famille_membre_nombre: number;

  @Prop()
  adhesion_date_debut: Date;

  @Prop()
  adhesion_droit: number;

  @Prop()
  cotisation_annuelle: number;

  @Prop()
  date_saisie: Date;

  @Prop()
  email: string;

  @Prop()
  situation_adherent: string; 
  @Prop()
  situation_personnel: number;

  @Prop()
  situation_saisie_ref: string;

  @Prop()
  validation: number;

  @ForeignKey(Centre.name,'centre','id','adh_centreId')
  @Prop({ type: 'ObjectId', ref: 'Centre' })
  centre: string; 

  @Prop()
  personnels: string[]; 

  @Prop()
  responsable_etp: string; 

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  __v: number;

  @Prop()
  avis_mensuel: string;

  @Prop()
  avis: string[]; // Cela dépend de la définition de votre type
}

export const AdherentSchema = SchemaFactory.createForClass(Adherent);
