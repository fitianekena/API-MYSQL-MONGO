// adherent.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ChampMere } from 'src/decorators/champ-mere/champ-mere.decorator';


@Schema()
export class Centre {
  @Prop({ type: Number })
  id : number;

  
  @Prop({ type: String,  default: null })
  code : string | null;

  @Prop({ type: String, default: null })
  nom	: string | null;

  @Prop({ type: String,  default: null})
  localisation: string | null;

  @Prop({ type: String, default: null })
  tel: string | null;

  @Prop({ type: String, default: null })
  type : string | null;

  @Prop({ type: Number, default: null })
  perslRespId : number | null;

  @Prop({ type: Number, default: null })
  prsnlCBA : number | null;

  @Prop({ type: Number, default: null })
  prsnlPharmacie : number | null;

  @Prop({ type: Date, default: null })
  creationDate : Date | null | '0000-00-00';

  @Prop({ type: Number })
  etat: number;

  @Prop({ type: Number })
  ilaharana: number ;

  @Prop({ type: String })
  database: string ;
}

export const CentreSchema = SchemaFactory.createForClass(Centre);

