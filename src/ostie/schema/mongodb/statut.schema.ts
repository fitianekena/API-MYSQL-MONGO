import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'statut' }) // Nom de la collection dans la base de données
export class Statut extends Document {
  @Prop({ required: true })
  RANG: number;

  @Prop({ required: true, maxlength: 6 })
  CODE_ADH: string;

  @Prop({ required: true })
  DATE_STATU: Date;

  @Prop({ required: true, maxlength: 1 })
  TYPE_STATU: string;

  @Prop({ required: true, maxlength: 20 })
  NOTE_SERV: string;

  @Prop({ required: true })
  DATE_CREAT: Date;

  @Prop({ required: true, maxlength: 30 })
  MOTIF: string;

  @Prop({ required: true })
  VALIDAT: number;

  @Prop({ required: true })
  MOIS: number;

  @Prop({ required: true })
  ANNEE: number;

  @Prop({ required: true, maxlength: 10 })
  POSTE: string;
}

export const StatutSchema = SchemaFactory.createForClass(Statut);
