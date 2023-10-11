import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AdAffilie } from './ad-affilie.schema';
import { ForeignKey } from 'src/decorators/champ-mere/foreign-key.decorator';
import { Adherent } from './adherent.schema';
import { Centre } from './centre.schema';
import { Service } from './service.schema';
import { Personnel } from './personnel.schema';


@Schema()
export class Ordonnance extends Document {
  @Prop({ type: Number })
  ordonnance_idIndex: number;

  @Prop({ type: String })
  ordonnance_id: string;

  @Prop({ type: String, default: null })
  num: string | null;

  @Prop({ type: String, default: null })
  ordonnance_numTmp: string | null;

  @Prop({ type: Date, default: null })
  date: Date | null;

  @ForeignKey(AdAffilie.name,'affilie','aff_id','ordonnance_affId')
  @Prop({ type: 'ObjectId', ref: 'AdAffilie' }) 
  affilie: string;
  @Prop({ type: Number })
  ordonnance_affIdLast: number;

  @Prop({ type: Number })
  ordonnance_ages: number;

  @Prop({ type: Number })
  traceAgeId: number;

  @Prop({ type: String })
  sexe: string;

  @ForeignKey(Adherent.name,'adherent','code_adherent','ordonnance_adhIdIndex')
  @Prop({ type: 'ObjectId', ref: 'Adherent' }) 
  adherent: number;
  @ForeignKey(Centre.name,'centre','centre_id','ordonnance_centreId')
  @Prop({ type: 'ObjectId', ref: 'Centre' }) 
  centre: number;
  @ForeignKey(Service.name,'service','code','ordonnance_serviceId')
  @Prop({ type: 'ObjectId', ref: 'Service' }) 
  service: number;
  @Prop({ type: Number })
  ordonnance_affType: number;
  @ForeignKey(Personnel.name,'ordonnance_persnlMedecinId','id','ordonnance_persnlMedecinId')
  @Prop({ type: 'ObjectId', ref: 'Personnel' }) 
  ordonnance_persnlMedecinId: number;
  @Prop({ type: String })
  ordonnance_persnlMedecinObs: string;

  @Prop({ type: String })
  ordonnance_persnlMedecinAlerg: string;

  @Prop({ type: String, default: null })
  ordonnance_persnlMedecinAvis: string | null;

  // @ForeignKey(Personnel.name,'ordonnance_persnlSpecialisteId','matricule','ordonnance_persnlSpecialisteId')
  // @Prop({ type: 'ObjectId', ref: 'Personnel' }) 
  // ordonnance_persnlSpecialisteId: number;
  @Prop({ type: Number, default: null })
  ordonnance_persnlSpecialisteId: number | null;

  @Prop({ type: String, default: null })
  ordonnance_reposDuree: string | null;

  @Prop({ type: String })
  reposValid: string;

  @Prop({ type: String })
  ordonnance_reposAMaternel: string;

  @Prop({ type: String })
  ordonnance_reposAT: string;

  @Prop({ type: String })
  referer: string;

  @Prop({ type: String })
  arevoir: string;

  @Prop({ type: Number, default: null })
  affTemperature: number | null;

  @Prop({ type: Number, default: null })
  affPoids: number | null;

  @Prop({ type: String, default: null })
  ordonnance_affTADroite: string | null;

  @Prop({ type: String, default: null })
  ordonnance_affTAGauche: string | null;

  @Prop({ type: Number, default: null })
  ordonnance_type: number | null;

  @Prop({ type: Number, default: null })
  accidentTravail: number | null;

  @Prop({ type: Number })
  soinAFaire: number;

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
  maladieCode: string;

  @Prop({ type: Number })
  ordonnance_compartimentId: number;

  @Prop({ type: Number })
  ordonnance_pharmacieId: number;

  @Prop({ type: Number })
  ordonnance_maladieCodeSimCle: number;

  @Prop({ type: Number })
  porte: number;

  @Prop({ type: Number })
  ordonnance_arevoirEtat: number;

  @Prop({ type: Number })
  ordonnance_impEtat: number;

  @Prop({ type: Number })
  validerPharmacie: number;

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

  @Prop({ type: Date })
  aff_naissDate: Date;

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
