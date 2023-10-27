import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ForeignKey } from 'src/decorators/champ-mere/foreign-key.decorator';
import { Centre } from './centre.schema';
import { Adherent } from './adherent.schema';
import { Fonction } from './fonction.schema';

@Schema({collection:'ad_users',timestamps:true})
export class AdUsers extends Document {
  @Prop()
  code_adherent: number;

  @Prop()
  codeONM: string;

  @ForeignKey(Adherent.name,'adherentId','code_adherent','adh_id')
  @Prop({ type: 'ObjectId', ref: 'Adherent' }) 
  adherentId: string;

  @Prop({ type: String })
  nom: string; 

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  matricule: string; 
  

  @Prop()
  adresse: string;

  @ForeignKey(Fonction.name,'fonction','fonction_id','adh_employeurFonc')
  @Prop()
  fonction: string;

  @Prop({type:Boolean,default: false})
  disabled: boolean;

  @Prop({type:String,default:'$2b$10$/9ePsYVUGgyIs9SCRU3zy.HHHHZSMhrUON9E/8UDRdZDuaDmChreu'})
  password: string;

  @ForeignKey(Centre.name,'centre','id','adh_centreId')
  @Prop({ type: 'ObjectId', ref: 'Centre' })
  centre: string;

  
  @Prop({ type: 'ObjectId',default:new mongoose.Types.ObjectId('64a2e91c5daec4a9a1bb04fc')})
  roles: string;
  @Prop()
  tel: string;

  
  
}

export const AdUsersSchema = SchemaFactory.createForClass(AdUsers);
