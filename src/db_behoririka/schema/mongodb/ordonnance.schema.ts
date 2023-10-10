import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Ordonnance extends Document {
  @Prop({ type: Number })
  ordonnance_idIndex: number;

  @Prop({ type: String })
  ordonnance_id: string;

  @Prop({ type: String, default: null })
  ordonnance_num: string | null;

  @Prop({ type: String, default: null })
  ordonnance_numTmp: string | null;

  @Prop({ type: String, default: null })
  ordonnance_date: String | null;

  @Prop({ type: Number, default: null })
  ordonnance_affId: number | null;

  @Prop({ type: Number })
  ordonnance_affIdLast: number;

  @Prop({ type: Number })
  ordonnance_ages: number;

  @Prop({ type: Number })
  ordonnance_traceAgeId: number;

  @Prop({ type: String })
  ordonnance_sexe: string;

  @Prop({ type: Number })
  ordonnance_adhIdIndex: number;

  @Prop({ type: String })
  ordonnance_adhId: string;

  @Prop({ type: String })
  ordonnance_adhNum: string;

  @Prop({ type: Number })
  ordonnance_affType: number;

  @Prop({ type: Number, default: null })
  ordonnance_centreId: number | null;

  @Prop({ type: Number, default: null })
  ordonnance_serviceId: number | null;

  @Prop({ type: Number, default: null })
  ordonnance_persnlMedecinId: number | null;

  @Prop({ type: String })
  ordonnance_persnlMedecinObs: string;

  @Prop({ type: String })
  ordonnance_persnlMedecinAlerg: string;

  @Prop({ type: String, default: null })
  ordonnance_persnlMedecinAvis: string | null;

  @Prop({ type: Number, default: null })
  ordonnance_persnlSpecialisteId: number | null;

  @Prop({ type: String, default: null })
  ordonnance_reposDuree: string | null;

  @Prop({ type: String })
  ordonnance_reposValide: string;

  @Prop({ type: String })
  ordonnance_reposAMaternel: string;

  @Prop({ type: String })
  ordonnance_reposAT: string;

  @Prop({ type: String })
  ordonnance_referer: string;

  @Prop({ type: String })
  ordonnance_arevoir: string;

  @Prop({ type: Number, default: null })
  ordonnance_affTemperature: number | null;

  @Prop({ type: Number, default: null })
  ordonnance_affPoids: number | null;

  @Prop({ type: String, default: null })
  ordonnance_affTADroite: string | null;

  @Prop({ type: String, default: null })
  ordonnance_affTAGauche: string | null;

  @Prop({ type: Number, default: null })
  ordonnance_type: number | null;

  @Prop({ type: Number, default: null })
  ordonnance_accidentTravail: number | null;

  @Prop({ type: Number })
  ordonnance_soinAFaire: number;

  @Prop({ type: String })
  ordonnance_hospital: string;

  @Prop({ type: String })
  ordonnance_servicespecialiste: string;

  @Prop({ type: String })
  ordonnance_consultExt: string;

  @Prop({ type: Number })
  ordonnance_vu: number;

  @Prop({ type: String, default: null })
  ordonnance_maladieId: string | null;

  @Prop({ type: String })
  ordonnance_maladieCode: string;

  @Prop({ type: Number })
  ordonnance_compartimentId: number;

  @Prop({ type: Number })
  ordonnance_pharmacieId: number;

  @Prop({ type: Number })
  ordonnance_maladieCodeSimCle: number;

  @Prop({ type: Number })
  ordonnance_porte: number;

  @Prop({ type: Number })
  ordonnance_arevoirEtat: number;

  @Prop({ type: Number })
  ordonnance_impEtat: number;

  @Prop({ type: Number })
  ordonnance_validerPharmacie: number;

  @Prop({ type: Number })
  ordonnance_ajouter: number;

  @Prop({ type: String })
  ordonnance_heureMedcin: string;

  @Prop({ type: String })
  ordonnance_heureDdm: string;

  @Prop({ type: String })
  ordonnance_motifOpation: string;

  @Prop({ type: String })
  affEmbauche_matricule: string;

  @Prop({ type: String })
  affType_label: string;

  @Prop({ type: Number })
  affType_id: number;

  @Prop({ type: String })
  situation_label: string;

  @Prop({ type: Number })
  situation_id: number;

  @Prop({ type: String })
  aff_nom: string;

  @Prop({ type: String })
  aff_prenom: string;

  @Prop({ type: String })
  aff_naissString: String;

  @Prop({ type: String })
  iAge: string;

  @Prop({ type: String })
  adh_num: string;

  @Prop({ type: String })
  adh_raisonSociale: string;

  @Prop({ type: String })
  aff_trav: string;

  @Prop({ type: String })
  aff_sexe: string;

  @Prop({ type: String })
  ordonnance_persNom: string;

  @Prop({ type: String })
  ordonnance_persMat: string;

  @Prop({ type: String })
  ordonnance_ipAdress: string;

  @Prop({ type: Number })
  ordonnance_facture: number;

  @Prop({ type: String })
  ordonnance_situationSPO2: string;

  @Prop({ type: String })
  ordonnance_freqCardiaque: string;
}

export const OrdonnanceSchema = SchemaFactory.createForClass(Ordonnance);
