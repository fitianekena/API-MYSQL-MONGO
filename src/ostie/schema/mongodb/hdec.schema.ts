import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'hdec' }) // Nom de la collection dans la base de données
export class Hdec extends Document {
  @Prop({ required: true })
  NO_RD: number;

  @Prop({ required: true })
  DATE_RD: Date;

  @Prop({ required: true, maxlength: 10 })
  CODE_ADH: string;

  @Prop({ required: true, maxlength: 35 })
  LIBELLE: string;

  @Prop({ required: true })
  MONTANT: number;

  @Prop({ required: true })
  TOTAL_PAYE: number;

  @Prop({ required: true, maxlength: 10 })
  POSTE: string;

  @Prop({ required: true })
  MOIS: number;

  @Prop({ required: true })
  ANNEE: number;

  @Prop({ required: true })
  VALID: number;

  @Prop({ required: true })
  COMPTAB: number;

  @Prop({ required: true })
  RANG: number;

  @Prop({ required: true })
  NBRRAP: number;

  @Prop({ required: true })
  DATE_CREATION: Date;

  @Prop({ required: true })
  OLD_RD: number;

  @Prop({ required: true })
  NOCENTRE: number;

  @Prop({ required: true })
  NOPOSTE: number;

  @Prop({ required: true, maxlength: 25 })
  MODEPAIEMENT: string;
}

export const HdecSchema = SchemaFactory.createForClass(Hdec);
