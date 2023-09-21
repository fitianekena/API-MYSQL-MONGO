
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Fonction extends Document {
  @Prop({ type: Number })
  fonction_id : number;

  @Prop({ type: String, default: null })
  fonction_nom	: string | null;

  @Prop({ type: String, default: null })
  fonction_description: string | null;

}

export const FonctionSchema = SchemaFactory.createForClass(Fonction);

