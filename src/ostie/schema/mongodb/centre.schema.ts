import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'centre' }) // Nom de la collection dans la base de données
export class Centre extends Document {
  @Prop({  maxlength: 3 })
  CODE: string;

  @Prop({  maxlength: 35 })
  DESIGNAT: string;

  @Prop({  maxlength: 40 })
  MED_CHEF: string;

  @Prop({  maxlength: 40 })
  CBA: string;

  @Prop({  maxlength: 40 })
  PHARMAC: string;

  @Prop({  maxlength: 40 })
  ADRESSE: string;

  @Prop({  maxlength: 1 })
  XTYPE: string;
}

export const CentreSchema = SchemaFactory.createForClass(Centre);
