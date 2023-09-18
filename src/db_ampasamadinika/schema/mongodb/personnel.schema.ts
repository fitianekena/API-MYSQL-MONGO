
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Personnel extends Document {
  @Prop({ type: Number })
  persnl_id : number;

  @Prop({ type: String })
  persnl_centreServiceId : string;

  @Prop({ type: String, default: null })
  persnl_matricule	: string | null;

  @Prop({ type: String })
  persnl_codeOnm: string ;

  @Prop({ type: String, default: null })
  persnl_nom: string | null;

  @Prop({ type: String, default: null })
  persnl_prenom : string | null;

  @Prop({ type: String })
  prsnl_sexe : string;

  @Prop({ type: Number, default: null })
  persnl_fonctionId : number | null;

  @Prop({ type: Number })
  prsnlcp_id : number ;

  @Prop({ type: Date, default: null })
  persnl_tel : string | null;

  @Prop({ type: Number, default: null })
  persnl_email : string | null;

  @Prop({ type: String, default: null })
  persnl_adresse: string | null ;

  @Prop({ type: Date, default: null })
  persnl_embaucheDate: Date | null | '0000-00-00' ;

  @Prop({ type: Number })
  persnl_presence: number;

  @Prop({ type: Date })
  persnl_presenceDate: Date | '0000-00-00';

  @Prop({ type: String, default: null })
  persnl_login: string | null;

  @Prop({ type: String, default: null })
  persnl_password: string | null;

  @Prop({ type: Date })
  persnl_passwordDateDeb: Date | '0000-00-00';

  @Prop({ type: Date })
  persnl_passwordDateFin: Date | '0000-00-00';

  @Prop({ type: String })
  persnl_passwordObs : string;

  @Prop({ type: String })
  persnl_etatId : string;

  @Prop({ type: Number })
  persnl_pharmacieCompId : number;

  @Prop({ type: Number })
  persnl_porte : number;

  @Prop({ type: Number })
  persnl_imptype : number;

  @Prop({ type: Number })
  persnl_ipId : number;

  @Prop({ type: String })
  persnl_ipAdress : string;

  @Prop({ type: Number })
  persnl_centreId : number;

  @Prop({ type: Number })
  persnl_serviceId : number;


}

export const PersonnelSchema = SchemaFactory.createForClass(Personnel);

