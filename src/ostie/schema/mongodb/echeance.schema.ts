import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'echeance' }) // Nom de la collection dans la base de données
export class Echeance extends Document {
  @Prop({ required: true })
  LIGNE: number;

  @Prop({ required: true })
  NO_RD: number;

  @Prop({ required: true })
  DATE_ECH: Date;

  @Prop({ required: true })
  MONT_ECH: number;

  @Prop({ required: true })
  MONT_PAYE: number;

  @Prop({ required: true, maxlength: 1 })
  MODE_PAIE: string;

  @Prop({ required: true, maxlength: 6 })
  CODE_ADH: string;

  @Prop({ required: true })
  RANG: number;

  @Prop({ required: true })
  NBRRAP: number;
}

export const EcheanceSchema = SchemaFactory.createForClass(Echeance);
