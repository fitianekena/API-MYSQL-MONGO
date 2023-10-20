import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Centre } from 'src/db_behoririka/schema/mongodb/centre.schema';
import { ForeignKey } from 'src/decorators/champ-mere/foreign-key.decorator';
import { Adherent } from './adherent.schema';
import { Fonction } from './fonction.schema';
import { ChampFille } from 'src/decorators/champ-mere/champ-fille.decorator';
import { Affilie } from 'src/db_ostie/schema/mysql/affilie.schema';




@Schema({ collection: 'ad-affilie' })
export class AdAffilie extends Document{
  @Prop()
  matricule: string;

  @Prop()
  email: string;
  @ChampFille(Affilie.name,'aff_nom','String','nom')
  @Prop()
  nom: string;

  @Prop()
  prenom: string;

  @Prop()
  sexe: string;

  @Prop()
  situation_matrimoniale: string;

  @Prop()
  nombre_enfant_charge: number;

  @Prop()
  adresse: string;

  @Prop()
  date_de_naissance: String;

  @Prop()
  lieu_de_naissance: string;

  @Prop()
  cnaps_num: string;

  @Prop()
  cin_num: string;

  @Prop()
  cin_date_delivrance: Date;

  @Prop()
  cin_lieu_delivrance: string;

  
  @Prop()
  fonction: string;

  @Prop()
  photo: string | null;

  @Prop()
  date_embauche: Date;

  @Prop()
  motif_debauche: string;

  @Prop()
  statut: number;

  @ForeignKey(Centre.name,'centre','centre_id','aff_centreId')
  @Prop({ type: 'ObjectId', ref: 'Centre' }) 
  centre: string; 

  @ForeignKey(Adherent.name,'adherent','code_adherent','affHist_adhId')
  @Prop({ type: 'ObjectId', ref: 'Adherent' }) 
  adherent: string;
  @Prop()
  aff_id: string;
  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  date_debauche: Date;
}

export const AdAffilieSchema = SchemaFactory.createForClass(AdAffilie);
