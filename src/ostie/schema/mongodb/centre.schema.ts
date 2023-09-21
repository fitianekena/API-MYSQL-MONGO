import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'centre' }) // Nom de la collection dans la base de données
export class Centre extends Document {
  @Prop({ required: true, maxlength: 3 })
  CODE: string;

  @Prop({ required: true, maxlength: 35 })
  DESIGNAT: string;

  @Prop({ required: true, maxlength: 40 })
  MED_CHEF: string;

  @Prop({ required: true, maxlength: 40 })
  CBA: string;

  @Prop({ required: true, maxlength: 40 })
  PHARMAC: string;

  @Prop({ required: true, maxlength: 40 })
  ADRESSE: string;

  @Prop({ required: true, maxlength: 1 })
  XTYPE: string;
}

export const CentreSchema = SchemaFactory.createForClass(Centre);
