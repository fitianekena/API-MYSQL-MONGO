import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'reglemt' }) // Nom de la collection dans la base de données
export class Reglemt extends Document {
  @Prop({ required: true })
  NO_RP: number;

  @Prop({ required: true })
  DATE_PAIE: Date;

  @Prop({ required: true, maxlength: 15 })
  BANQUE: string;

  @Prop({ required: true, maxlength: 30 })
  CHEQUE: string;

  @Prop({ required: true, maxlength: 6 })
  CODE_ADH: string;

  @Prop({ required: true, maxlength: 1 })
  MODEPAIM: string;

  @Prop({ required: true })
  MONTANT: number;

  @Prop({ required: true, maxlength: 10 })
  POSTE: string;

  @Prop({ required: true })
  NOECR: number;

  @Prop({ required: true, maxlength: 32 })
  LIBELLE: string;

  @Prop({ required: true })
  DATE_ECH: Date;

  @Prop({ required: true })
  DATE_REF: Date;

  @Prop({ required: true })
  DATE_CREATION: Date;

  @Prop({ required: true })
  ANNUL: number;

  @Prop({ required: true })
  NOCENTRE: number;

  @Prop({ required: true })
  NOPOSTE: number;

  @Prop({ required: true })
  RANG: number;

  @Prop({ required: true })
  MOIS: number;

  @Prop({ required: true })
  ANNEE: number;

  @Prop({ required: true, maxlength: 10 })
  abcdef: string;
}

export const ReglemtSchema = SchemaFactory.createForClass(Reglemt);
