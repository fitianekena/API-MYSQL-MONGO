
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Service extends Document {
  

  @Prop({ type: String })
  code	: string;

  @Prop({ type: String, default: null })
  nom: string | null;
  
  @Prop({ type: Number })
  specialiste: number;

  @Prop({ type: Number })
  barcode: number;

}

export const ServiceSchema = SchemaFactory.createForClass(Service);

