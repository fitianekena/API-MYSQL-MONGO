import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'ecriture' }) // Nom de la collection dans la base de données
export class Ecriture extends Document {
  @Prop({ required: true })
  NOECR: number;

  @Prop({ required: true })
  NO_RD: number;

  @Prop({ required: true })
  NO_RP: number;

  @Prop({ required: true, maxlength: 10 })
  CODE_ADH: string;

  @Prop({ required: true, maxlength: 12 })
  COMPTE: string;

  @Prop({ required: true, maxlength: 12 })
  CONTREPART: string;

  @Prop({ required: true, maxlength: 3 })
  TYPEECR: string;

  @Prop({ required: true })
  DATECR: Date;

  @Prop({ required: true })
  DEBIT: number;

  @Prop({ required: true })
  CREDIT: number;

  @Prop({ required: true, maxlength: 35 })
  LIBELLE: string;

  @Prop({ required: true })
  ECHEANCE: Date;

  @Prop({ required: true, maxlength: 3 })
  LETTRE: string;

  @Prop({ required: true })
  LIGNEECR: number;

  @Prop({ required: true })
  MOIS: number;

  @Prop({ required: true })
  ANNEE: number;

  @Prop({ required: true })
  TRIMESTRE: number;

  @Prop({ required: true, maxlength: 6 })
  REF_PIECE: string;
}

export const EcritureSchema = SchemaFactory.createForClass(Ecriture);
