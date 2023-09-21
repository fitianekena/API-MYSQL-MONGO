import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'recepdec' }) // Nom de la collection dans la base de données
export class Recepdec extends Document {
  @Prop({ required: true })
  NO_RD: number;

  @Prop({ required: true, maxlength: 6 })
  CODE_ADH: string;

  @Prop({ required: true })
  DATE_RD: Date;

  @Prop({ required: true, maxlength: 5 })
  TYPE_DECL: string;

  @Prop({ required: true, maxlength: 32 })
  LIBELLE: string;

  @Prop({ required: true })
  ANNEE: number;

  @Prop({ required: true })
  TRIMESTRE: number;

  @Prop({ required: true })
  EFFECTIF: number;

  @Prop({ required: true })
  MASSE_SAL: number;

  @Prop({ required: true })
  PART_PATR: number;

  @Prop({ required: true })
  PART_TRAV: number;

  @Prop({ required: true })
  PENALITE: number;

  @Prop({ required: true })
  DECLAREE: number;

  @Prop({ required: true })
  TOTAL_PAYE: number;

  @Prop({ required: true, maxlength: 15 })
  ACCORD: string;

  @Prop({ required: true })
  DATE_ACCOR: Date;

  @Prop({ required: true })
  NOMBRE_PAY: number;

  @Prop({ required: true, maxlength: 10 })
  POSTE: string;

  @Prop({ required: true })
  PEN_APPLIQ: number;

  @Prop({ required: true })
  NOECR: number;

  @Prop({ required: true })
  LIGNEECR: number;

  @Prop({ required: true })
  LIGNE: number;

  @Prop({ required: true })
  TOTSALDEC: number;

  @Prop({ required: true })
  TOTCOTTRAV: number;

  @Prop({ required: true })
  TOTCOTPATR: number;

  @Prop({ required: true })
  TOTSALCALC: number;

  @Prop({ required: true })
  MOIS: number;

  @Prop({ required: true })
  TRIMANNEE: number;

  @Prop({ required: true })
  VALID: number;

  @Prop({ required: true })
  COMPTAB: number;

  @Prop({ required: true })
  COTCALC: number;

  @Prop({ required: true })
  DATE_CTRL: Date;

  @Prop({ required: true, maxlength: 35 })
  REF_NOTE: string;

  @Prop({ required: true })
  DATE_CREATION: Date;
}

export const RecepdecSchema = SchemaFactory.createForClass(Recepdec);
