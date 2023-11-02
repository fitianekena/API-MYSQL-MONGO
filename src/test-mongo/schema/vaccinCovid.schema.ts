import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'vaccinCovid' })
export class VaccinCovid extends Document {
  @Prop({ type: Number })
  vaccinCovid_affId: number;

  @Prop({ type: String })
  vaccinCovid_nom: string;

  @Prop({ type: Date })
  vaccinCovid_date: Date;

  @Prop({ type: String })
  vaccinCovid_persMat: string;

  @Prop({ type: Number })
  vaccinCovid_persCentreId: number;

  @Prop({ type: String })
  vaccinCovid_persIp: string;
}

export const VaccinCovidSchema = SchemaFactory.createForClass(VaccinCovid);
