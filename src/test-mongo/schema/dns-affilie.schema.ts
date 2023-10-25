import { Injectable } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';
import {AppModule as Namespace} from 'src/app.module';
import { Centre } from 'src/db_behoririka/schema/mongodb/centre.schema';
import { Affilie } from 'src/db_ostie/schema/mysql/affilie.schema';
import { ForeignKey } from 'src/decorators/champ-mere/foreign-key.decorator';
import { BoAffilie } from './bo-affilie.schema';

@Schema({ collection: 'dns_affilies' })
export class DnsAffilie extends Document {
  constructor(){
    super();
  }
  @Prop()
  salaire_un: number;

  @Prop()
  salaire_deux: number;

  @Prop()
  salaire_trois: number;

  @Prop()
  total_salaire_plafonne: number;

  @Prop()
  total_salaire_non_plafonne: number;

  @Prop()
  part_employeur: number;

  @Prop()
  part_travailleur: number;

  @ForeignKey(BoAffilie.name,'affilie','aff_id','aff_id')
  @Prop({ type: 'ObjectId', ref: 'BoAffilie' }) 
  affilie: string;
  @Prop()
  aff_id: string;
}

export const DnsAffilieSchema = SchemaFactory.createForClass( DnsAffilie);
