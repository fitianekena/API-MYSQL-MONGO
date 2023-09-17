// adherent.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type AdherentDocument = Adherent & Document;

@Schema()
export class Adherent {
  @Prop({ type: Number })
  adh_idIndex: number;

  @Prop({ type: Number })
  adh_id: number;

  @Prop({ type: Number, default: null })
  adh_centreId: number | null;

  @Prop({ type: String })
  adh_num: string;

  @Prop({ type: String, default: null })
  adh_sigle: string | null;

  @Prop({ type: String, default: null })
  adh_raisonSociale: string | null;

  @Prop({ type: Number, default: null })
  adh_adhTypeId: number | null;

  @Prop({ type: String, default: null })
  adh_adresse: string | null;

  @Prop({ type: String, default: null })
  adh_directeurNom: string | null;

  @Prop({ type: String, default: null })
  adh_employeurFonc: string | null;

  @Prop({ type: String, default: null })
  adh_nationalite: string | null;

  @Prop({ type: String, default: null })
  adh_bp: string | null;

  @Prop({ type: String, default: null })
  adh_tel: string | null;

  @Prop({ type: String, default: null })
  adh_fax: string | null;

  @Prop({ type: String, default: null })
  adh_numStat: string | null;

  @Prop({ type: String, default: null })
  adh_nif: string | null;

  @Prop({ type: String, default: null })
  adh_cnaps: string | null;

  @Prop({ type: Number, default: null })
  adh_activiteTypeId: number | null;

  @Prop({ type: String, default: null })
  adh_activitePpale: string | null;

  @Prop({ type: String, default: null })
  adh_activiteSecdr: string | null;

  @Prop({ type: Date, default: null })
  adh_activiteDateDeb: Date | null | '0000-00-00';

  @Prop({ type: String, default: null })
  adh_travailLieu: string | null;

  @Prop({ type: Number, default: null })
  adh_travailleurNbr: number | null;

  @Prop({ type: Number, default: null })
  adh_hommeNbr: number | null;

  @Prop({ type: Number, default: null })
  adh_femmeNbr: number | null;

  @Prop({ type: Number, default: null })
  adh_familleMbrNbr: number | null;

  @Prop({ type: Date, default: null })
  adh_adhesionDateDeb: Date | null | '0000-00-00';

  @Prop({ type: Number, default: null })
  adh_totalSalaire: number | null;

  @Prop({ type: Number, default: null })
  adh_adhesionDroit: number | null;

  @Prop({ type: Number, default: null })
  adh_cotisAnnuelle: number | null;

  @Prop({ type: Number, default: null })
  adh_centreSoinId: number | null;

  @Prop({ type: Number, default: null })
  adh_centreVisiteId: number | null;

  @Prop({ type: Number })
  adh_persId: number;

  @Prop({ type: String })
  adh_persNom: string;

  @Prop({ type: String })
  adh_persMat: string;

  @Prop({ type: Date })
  adh_dateSaisie: Date;

  @Prop({ type: String })
  adh_email: string;

  @Prop({ type: Number })
  adh_persCentreId: number;

  @Prop({ type: Number })
  adh_persServiceId: number;

  @Prop({ type: String })
  adh_persIpAdress: string;

  @Prop({ type: Number, default: null })
  adhSitHist_situationId: number | null;

  @Prop({ type: Date, default: null })
  adhSitHist_date: Date | null | '0000-00-00';

  @Prop({ type: String, default: null })
  adhSitHist_motif: string | null;

  @Prop({ type: Date, default: null })
  adhSitHist_dateSaisie: Date | null | '0000-00-00';

  @Prop({ type: Number, default: null })
  adhSitHist_persId: number | null;

  @Prop({ type: String })
  adhSitHist_saisieRef: string;

  @Prop({ type: Number })
  adh_affValidation: number;
}

export const AdherentSchema = SchemaFactory.createForClass(Adherent);

