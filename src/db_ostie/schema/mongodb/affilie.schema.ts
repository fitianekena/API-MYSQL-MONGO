import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Affilie extends Document {
  @Prop({ type: Number })
  aff_id: number;

  @Prop({ type: String, default: null })
  aff_num: string;

  @Prop({ type: Number })
  aff_numLast: number;

  @Prop({ type: Number })
  aff_numNews: number;

  @Prop({ type: Number, default: 0 })
  aff_affTravailleur01Id: number;

  @Prop({ type: Number })
  aff_affTravailleur01IdLast: number;

  @Prop({ type: Number })
  aff_affTravailleur01IdNews: number;

  @Prop({ type: Number, default: 0 })
  aff_affTravailleur02Id: number;

  @Prop({ type: Number })
  aff_affTravailleur02IdLast: number;

  @Prop({ type: Number })
  aff_affTravailleur02IdNews: number;

  @Prop({ type: Number, default: 0 })
  aff_centreId: number;

  @Prop({ type: String, default: null })
  aff_nom: string;

  @Prop({ type: String, default: null })
  aff_prenom: string;

  @Prop({ type: String, default: null })
  aff_sexe: string;

  @Prop({ type: String, default: null })
  aff_adresse: string;

  @Prop({ type: Date, default: null })
  aff_naissDate: Date;

  @Prop({ type: String, default: null })
  aff_naissLieu: string;

  @Prop({ type: String, default: null })
  aff_cinNum: string;

  @Prop({ type: Date, default: null })
  aff_cinDate: Date;

  @Prop({ type: String, default: null })
  aff_cinLieu: string;

  @Prop({ type: Number })
  aff_situationFamilialeId: number;

  @Prop({ type: Number, default: null, comment: 'nombre denfants' })
  aff_nbrEnfant: number;

  @Prop({ type: String, default: null })
  aff_liaison: string;

  @Prop({ type: String, default: null })
  aff_typeTrav: string;

  @Prop({ type: String, default: null })
  aff_ville: string;

  @Prop({ type: String, default: null })
  aff_codePost: string;

  @Prop({ type: String, default: null })
  aff_fonction: string;

  @Prop({ type: String, default: null })
  aff_classification: string;

  @Prop({ type: String, default: null })
  aff_cnapsNum: string;

  @Prop({ type: String, default: null, comment: 'path de la photo de laffilie' })
  aff_photo: string;

  @Prop({ type: Number, default: null })
  CHRONO: number;

  @Prop({ type: Number })
  aff_rang: number;

  @Prop({ type: Number })
  aff_codeUnique: boolean;

  @Prop({ type: Boolean })
  aff_doublon: boolean;

  @Prop({ type: Date })
  aff_dateCreation: Date;

  @Prop({ type: Number })
  aff_fusion: number;

  @Prop({ type: Number })
  affId_old: number;

  @Prop({ type: String })
  aff_persNom: string;

  @Prop({ type: Number })
  aff_persId: number;

  @Prop({ type: String })
  aff_persMat: string;

  @Prop({ type: Number })
  aff_persCentreId: number;

  @Prop({ type: Number })
  aff_persServiceId: number;

  @Prop({ type: String })
  aff_persIpAdress: string;

  @Prop({ type: Date, default: null })
  affEmbauche_embauchedate: Date;

  @Prop({ type: Date, default: null })
  affEmbauche_debaucheDate: Date;

  @Prop({ type: Number, default: null })
  affEmbauche_salaireBrut: number;

  @Prop({ type: String, default: null })
  affEmbauche_fonction: string;

  @Prop({ type: String, default: null })
  affEmbauche_classification: string;

  @Prop({ type: Number, default: null })
  affEmbauche_ostieplus: number;

  @Prop({ type: String, default: null })
  affEmbauche_matricule: string;

  @Prop({ type: String, default: null })
  affEmbauche_type: string;

  @Prop({ type: Date, default: null })
  affEmbauche_debaucheDateSaisie: Date;

  @Prop({ type: Number, default: null })
  affEmbauche_debauchePersId: number;

  @Prop({ type: Number, default: null })
  affHist_adhIdIndex: number;

  @Prop({ type: Number, default: null })
  affHist_adhId: number;

  @Prop({ type: String, default: null })
  affHist_adhNum: string;

  @Prop({ type: Number, default: null })
  affHist_situationId: number;

  @Prop({ type: Number, default: null })
  affHist_affiliationTypeId: number;

  @Prop({ type: String, default: null })
  affHist_motif: string;

  @Prop({ type: Date, default: null })
  affHist_date: Date;

  @Prop({ type: Date, default: null })
  affHist_dateSaisie: Date;

  @Prop({ type: Number, default: null })
  affHist_persId: number;

  @Prop({ type: Number, default: null })
  affHist_certificatScolaire: number;

  @Prop({ type: Date, default: null })
  affHist_certificatScolaireDate: Date;

  @Prop({ type: String, default: null })
  affHist_obsCba: string;

  @Prop({ type: Date, default: null })
  affHist_dateObsCba: Date;

  @Prop({ type: Number })
  affEmbauche_salaire1eremois: number;

  @Prop({ type: Number })
  affEmbauche_salaire2ememois: number;

  @Prop({ type: Number })
  affEmbauche_salaire3ememois: number;

  @Prop({ type: Number })
  affEmbauche_TotauxSalNonPlafones: number;

  @Prop({ type: Number })
  affEmbauche_TotauxSalPlafones: number;

  @Prop({ type: Number })
  affEmbauche_PartEmployer: number;

  @Prop({ type: Number })
  affEmbauche_PartTravailleur: number;
}

export const AffilieSchema = SchemaFactory.createForClass(Affilie);

 
