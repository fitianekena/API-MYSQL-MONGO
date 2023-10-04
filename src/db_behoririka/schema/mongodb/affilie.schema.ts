import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Affilie extends Document {
  @Prop({ type: Number })
  aff_id: number;

  @Prop({ type: String, default: null })
  aff_num: string | null;

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
  aff_nom: string | null;

  @Prop({ type: String, default: null })
  aff_prenom: string | null;

  @Prop({ type: String, default: null })
  aff_sexe: string | null;

  @Prop({ type: String, default: null })
  aff_adresse: string | null;

  @Prop({ type: String, default: null })
  aff_naissDate: String | null;

  @Prop({ type: String, default: null })
  aff_naissLieu: string | null;

  @Prop({ type: String, default: null })
  aff_cinNum: string | null;

  @Prop({ type: String, default: null })
  aff_cinDate: String | null;

  @Prop({ type: String, default: null })
  aff_cinLieu: string | null;

  @Prop({ type: Number, default: 0 })
  aff_situationFamilialeId: number;

  @Prop({ type: Number, default: null, comment: "nombre d'enfants" })
  aff_nbrEnfant: number | null;

  @Prop({ type: String, default: null })
  aff_liaison: string | null;

  @Prop({ type: String, default: null })
  aff_typeTrav: string | null;

  @Prop({ type: String, default: null })
  aff_ville: string | null;

  @Prop({ type: String, default: null })
  aff_codePost: string | null;

  @Prop({ type: String, default: null })
  aff_fonction: string | null;

  @Prop({ type: String, default: null })
  aff_classification: string | null;

  @Prop({ type: String, default: null })
  aff_cnapsNum: string | null;

  @Prop({ type: String, default: null, comment: "path de la photo de l'affilié" })
  aff_photo: string | null;

  @Prop({ type: Number, default: null })
  CHRONO: number | null;

  @Prop({ type: Number, allowNull: false, unsigned: true, zerofill: true })
  aff_rang: number;

  @Prop({ type: Number, allowNull: false })
  aff_codeUnique: number;

  @Prop({ type: Number, allowNull: false })
  aff_doublon: number;

  @Prop({ type: String, allowNull: false })
  aff_dateCreation: String;

  @Prop({ type: Number, allowNull: false })
  aff_fusion: number;

  @Prop({ type: Number, allowNull: false, unsigned: true, zerofill: true })
  affId_old: number;

  @Prop({ type: String,  })
  aff_persNom: string;

  @Prop({ type: Number,  })
  aff_persId: number;

  @Prop({ type: String,  })
  aff_persMat: string;

  @Prop({ type: Number,  })
  aff_persCentreId: number;

  @Prop({ type: Number,  })
  aff_persServiceId: number;

  @Prop({ type: String,  })
  aff_persIpAdress: string;

  @Prop({ type: String, default: null })
  affEmbauche_embauchedate: String | null;

  @Prop({ type: String, default: null })
  affEmbauche_debaucheDate: String | null;

  @Prop({ type: Number, default: null })
  affEmbauche_salaireBrut: number | null;

  @Prop({ type: String, default: null })
  affEmbauche_fonction: string | null;

  @Prop({ type: String, default: null })
  affEmbauche_classification: string | null;

  @Prop({ type: Number, default: null })
  affEmbauche_ostieplus: number | null;

  @Prop({ type: String, default: null })
  affEmbauche_matricule: string | null;

  @Prop({ type: String, default: null })
  affEmbauche_type: string | null;

  @Prop({ type: String, default: null })
  affEmbauche_debaucheDateSaisie: String | null;

  @Prop({ type: Number, default: null })
  affEmbauche_debauchePersId: number | null;

  @Prop({ type: Number, default: null })
  affHist_adhIdIndex: number | null;

  @Prop({ type: Number, default: null })
  affHist_adhId: number | null;

  @Prop({ type: String, default: null })
  affHist_adhNum: string | null;

  @Prop({ type: Number, default: null })
  affHist_situationId: number | null;

  @Prop({ type: Number, default: null })
  affHist_affiliationTypeId: number | null;

  @Prop({ type: String, default: null })
  affHist_motif: string | null;

  @Prop({ type: String, default: null })
  affHist_date: String | null;

  @Prop({ type: String, default: null })
  affHist_dateSaisie: String | null;

  @Prop({ type: Number, default: null })
  affHist_persId: number | null;

  @Prop({ type: Number, default: null })
  affHist_certificatScolaire: number | null;

  @Prop({ type: String, default: null })
  affHist_certificatScolaireDate: String | null;

  @Prop({ type: String, default: null })
  affHist_obsCba: string | null;

  @Prop({ type: String, default: null })
  affHist_dateObsCba: String | null;

  @Prop({ type: Number,  })
  affEmbauche_salaire1eremois: number;

  @Prop({ type: Number,  })
  affEmbauche_salaire2ememois: number;

  @Prop({ type: Number,  })
  affEmbauche_salaire3ememois: number;

  @Prop({ type: Number,  })
  affEmbauche_TotauxSalNonPlafones: number;

  @Prop({ type: Number,  })
  affEmbauche_TotauxSalPlafones: number;

  @Prop({ type: Number,  })
  affEmbauche_PartEmployer: number;

  @Prop({ type: Number,  })
  affEmbauche_PartTravailleur: number;
}

export const AffilieSchema = SchemaFactory.createForClass(Affilie);
