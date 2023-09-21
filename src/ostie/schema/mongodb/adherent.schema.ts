import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'adherent' }) // Nom de la collection dans la base de données
export class Adherent extends Document {
  @Prop({ required: true, maxlength: 6 })
  CODE_ADH: string;

  @Prop({ required: true, maxlength: 60 })
  RAISON_SOC: string;

  @Prop({ required: true, maxlength: 3 })
  CODE_CEN: string;

  @Prop({ required: true, maxlength: 30 })
  TEL: string;

  @Prop({ required: true })
  DATE_ADH: Date;

  @Prop({ required: true, maxlength: 15 })
  STATUT: string;

  @Prop({ required: true })
  EFFECTIF: number;

  @Prop({ required: true, maxlength: 4 })
  CODE_ACT: string;

  @Prop({ required: true })
  DATE_ACT: Date;

  @Prop({ required: true, maxlength: 4 })
  CODE_ACT2: string;

  @Prop({ required: true })
  DATE_CREAT: Date;

  @Prop({ required: true })
  DATE_ETAT: Date;

  @Prop({ required: true, maxlength: 20 })
  MOTIF_ETAT: string;

  @Prop({ required: true, maxlength: 30 })
  NOCNAPS: string;

  @Prop({ required: true, maxlength: 60 })
  ADRESSE: string;

  @Prop({ required: true })
  EFFEC_M: number;

  @Prop({ required: true })
  EFFEC_F: number;

  @Prop({ required: true })
  EFFEC_MF: number;

  @Prop({ required: true, maxlength: 20 })
  SIGLE: string;

  @Prop({ required: true, maxlength: 8 })
  BP: string;

  @Prop({ required: true, maxlength: 15 })
  FAX: string;

  @Prop({ required: true, maxlength: 15 })
  NIF: string;

  @Prop({ required: true, maxlength: 40 })
  RESPONSABL: string;

  @Prop({ required: true, maxlength: 6 })
  TYPE_ADH: string;

  @Prop({ required: true, maxlength: 6 })
  CODE_GROUP: string;

  @Prop({ required: true })
  MASSE_SAL: number;

  @Prop({ required: true })
  DIA: number;

  @Prop({ required: true, maxlength: 20 })
  STATIST: string;

  @Prop({ required: true, maxlength: 30 })
  LIEU_DE_TR: string;

  @Prop({ required: true, maxlength: 30 })
  ADR_ACTIV: string;

  @Prop({ required: true, maxlength: 20 })
  NATIONALIT: string;

  @Prop({ required: true })
  VERSEMENT: number;

  @Prop({ required: true })
  DEBIT: number;

  @Prop({ required: true })
  CREDIT: number;

  @Prop({ required: true, maxlength: 15 })
  TITRE: string;

  @Prop({ required: true, maxlength: 20 })
  VILLE: string;

  @Prop({ required: true })
  CODE_POST: number;

  @Prop({ required: true, maxlength: 80 })
  EMAIL: string;

  @Prop({ required: true })
  EFFECTIF_ANTECEDENT: number;
}

export const AdherentSchema = SchemaFactory.createForClass(Adherent);
