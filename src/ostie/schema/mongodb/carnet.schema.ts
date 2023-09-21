import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'carnet' }) // Nom de la collection dans la base de données
export class Carnet extends Document {
  @Prop({ required: true })
  LIGNE: number;

  @Prop({ required: true, maxlength: 6 })
  CODE_ADH: string;

  @Prop({ required: true })
  NO_DEBUT: number;

  @Prop({ required: true })
  NO_FIN: number;

  @Prop({ required: true })
  DATE_LIVR: Date;
}

export const CarnetSchema = SchemaFactory.createForClass(Carnet);
