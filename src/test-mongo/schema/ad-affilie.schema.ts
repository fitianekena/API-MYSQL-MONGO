import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



@Schema()
export class AdAffilie extends Document{
  @Prop()
  matricule: string;

  @Prop()
  email: string;

  @Prop()
  nom: string;

  @Prop()
  prenom: string;

  @Prop()
  sexe: string;

  @Prop()
  situation_matrimoniale: string;

  @Prop()
  nombre_enfant_charge: number;

  @Prop()
  adresse: string;

  @Prop()
  date_de_naissance: Date;

  @Prop()
  lieu_de_naissance: string;

  @Prop()
  cnaps_num: string;

  @Prop()
  cin_num: string;

  @Prop()
  cin_date_delivrance: Date;

  @Prop()
  cin_lieu_delivrance: string;

  @Prop()
  fonction: string;

  @Prop()
  photo: string | null;

  @Prop()
  date_embauche: Date;

  @Prop()
  motif_debauche: string;

  @Prop()
  statut: number;

  @Prop()
  adherent: string; // Assurez-vous que le type correspond au type ObjectId dans votre modèle

  @Prop()
  centre: string; // Assurez-vous que le type correspond au type ObjectId dans votre modèle

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  date_debauche: Date;
}

export const AdAffilieSchema = SchemaFactory.createForClass(AdAffilie);
