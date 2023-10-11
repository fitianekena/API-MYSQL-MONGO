
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Fonction } from './fonction.schema';
import { ForeignKey } from 'src/decorators/champ-mere/foreign-key.decorator';
import { Centre } from 'src/db_behoririka/schema/mongodb/centre.schema';
import { Service } from './service.schema';

@Schema()
export class Personnel extends Document {
  @Prop({ type: Number })
  id : number;
  @Prop({ type: String, default: null })
  matricule	: string | null;

  @Prop({ type: String })
  persnl_codeOnm: string ;

  @Prop({ type: String, default: null })
  nom: string | null;

  @Prop({ type: String, default: null })
  prenom : string | null;

  @Prop({ type: String })
  sexe : string;

  
  @ForeignKey(Fonction.name,'persnl_fonctionId','fonction_id','persnl_fonctionId')
  @Prop({ type: 'ObjectId', ref: 'Fonction' }) 
  persnl_fonctionId: string;  
  

  @Prop({ type: Number })
  prsnlcp_id : number ;

  @Prop({ type: String, default: null })
  tel : string | null;

  @Prop({ type: String, default: null })
  email : string | null;

  @Prop({ type: String, default: null })
  adresse: string | null ;

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

  @ForeignKey(Centre.name,'persnl_centreId','centre_id','persnl_centreId')
  @Prop({ type: 'ObjectId', ref: 'Centre' })
  persnl_centreId : number;

  @ForeignKey(Service.name,'persnl_serviceId','code','persnl_serviceId')
  @Prop({ type: 'ObjectId', ref: 'Service' })
  persnl_serviceId : number;


}

export const PersonnelSchema = SchemaFactory.createForClass(Personnel);

