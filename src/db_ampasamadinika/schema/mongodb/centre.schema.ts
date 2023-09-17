// adherent.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type CentreDocument = Centre & Document;

@Schema()
export class Centre {
  @Prop({ type: Number })
  centre_id : number;

  @Prop({ type: String,  default: null })
  centre_code : string | null;

  @Prop({ type: String, default: null })
  centre_nom	: string | null;

  @Prop({ type: String,  default: null})
  centre_localisation: string | null;

  @Prop({ type: String, default: null })
  centre_tel: string | null;

  @Prop({ type: String, default: null })
  centre_type : string | null;

  @Prop({ type: Number, default: null })
  centre_perslRespId : number | null;

  @Prop({ type: Number, default: null })
  centre_prsnlCBA : number | null;

  @Prop({ type: Number, default: null })
  centre_prsnlPharmacie : number | null;

  @Prop({ type: Date, default: null })
  centre_creationDate : Date | null | '0000-00-00';

  @Prop({ type: Number })
  centre_etatId : number;

  @Prop({ type: Number })
  centre_ilaharana: number ;

  @Prop({ type: String })
  centre_database: string ;

  
}

export const CentreSchema = SchemaFactory.createForClass(Centre);

