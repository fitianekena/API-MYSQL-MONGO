
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Service extends Document {
  @Prop({ type: Number })
  service_id : number;

  @Prop({ type: String })
  service_code	: string;

  @Prop({ type: String, default: null })
  service_nom: string | null;

  @Prop({ type: Number })
  service_type: number;

  @Prop({ type: Number })
  service_specialiste: number;

  @Prop({ type: Number })
  service_barcode: number;

}

export const ServiceSchema = SchemaFactory.createForClass(Service);

