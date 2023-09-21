import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'activite' }) // Nom de la collection dans la base de données
export class Activite extends Document {
  @Prop({ required: true, maxlength: 4 })
  CODE: string;

  @Prop({ required: true, maxlength: 30 })
  DESIGNATIO: string;

  @Prop({ required: true, maxlength: 6 })
  CODEGROUP: string;
}

export const ActiviteSchema = SchemaFactory.createForClass(Activite);
