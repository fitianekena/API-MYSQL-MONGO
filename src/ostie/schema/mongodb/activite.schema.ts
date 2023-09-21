import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'activite' }) // Nom de la collection dans la base de données
export class Activite extends Document {
  @Prop({  maxlength: 4 })
  CODE: string;

  @Prop({  maxlength: 30 })
  DESIGNATIO: string;

  @Prop({  maxlength: 6 })
  CODEGROUP: string;
}

export const ActiviteSchema = SchemaFactory.createForClass(Activite);
