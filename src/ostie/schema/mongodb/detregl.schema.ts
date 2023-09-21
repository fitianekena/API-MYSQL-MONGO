import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'det_regl' }) // Nom de la collection dans la base de données
export class DetRegl extends Document {
  @Prop({ required: true })
  LIGNE: number;

  @Prop({ required: true })
  NO_RP: number;

  @Prop({ required: true })
  NO_RD: number;

  @Prop({ required: true, maxlength: 8 })
  CODE_ADH: string;

  @Prop({ required: true })
  MONTANT: number;

  @Prop({ required: true, maxlength: 32 })
  LIBELLE: string;

  @Prop({ required: true })
  LIGNEECR: number;

  @Prop({ required: true })
  VALID: number;

  @Prop({ required: true })
  COMPTAB: number;

  @Prop({ required: true })
  DATE_PAIE: Date;

  @Prop({ required: true })
  MOIS: number;

  @Prop({ required: true })
  ANNEE: number;

  @Prop({ required: true })
  NOECH: number;

  @Prop({ required: true })
  DATE_CREATION: Date;
}

export const DetReglSchema = SchemaFactory.createForClass(DetRegl);
