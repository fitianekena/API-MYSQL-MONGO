import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Affilie } from 'src/db_ostie/schema/mysql/affilie.schema';
import { ForeignKey } from 'src/decorators/champ-mere/foreign-key.decorator';
import { BoAffilie } from './bo-affilie.schema';
import { AdAffilie } from './ad-affilie.schema';
import { Adherent } from './adherent.schema';

@Schema()
export class MedecinTravail extends Document {
  @Prop({ type: Number })
  visiteEmbch_id: number;

  @Prop({ type: String, default: null })
  visiteEmbch_code: string | null;

  @ForeignKey(AdAffilie.name,'visiteEmbch_affId','aff_id','visiteEmbch_affId')
  @Prop({ type: 'ObjectId', ref: 'AdAffilie' })
  visiteEmbch_affId: string |null  ;

  @ForeignKey(AdAffilie.name,'visiteEmbch_affId','aff_id','visiteEmbch_affId')
  @Prop({ type: 'ObjectId', ref: 'AdAffilie' })
  visiteEmbch_affIdLast: number;

  @ForeignKey(Adherent.name,'visiteEmbch_adhId','code_adherent','visiteEmbch_adhId')
  @Prop({ type: 'ObjectId', ref: 'Adherent' })
  visiteEmbch_adhId: string | null;

  @Prop({ type: String })
  visiteEmbch_NomPrenom: string;

  @Prop({ type: String })
  visiteEmbch_StringNais: String;

  @Prop({ type: String })
  visiteEmbch_Sex: string;

  @Prop({ type: String })
  visiteEmbch_Profession: string;

  @Prop({ type: String })
  visiteEmbch_Adherent: string;

  @Prop({ type: String })
  visiteEmbch_Tel: string;

  @Prop({ type: String })
  visiteEmbch_Adresse: string;

  @Prop({ type: String, default: null })
  visiteEmbch_date: String | null;

  @Prop({ type: String, default: null })
  visiteEmbch_observation: string | null;

  @Prop({ type: Number, default: null })
  visiteEmbch_persnlMedecinId: number | null;

  @Prop({ type: Number })
  visiteEmbch_typeId: number;

  @Prop({ type: String })
  visiteEmbch_TypeVisite: string;

  @Prop({ type: String })
  visiteEmbch_AllerigieAlimentaire: string;

  @Prop({ type: String })
  visiteEmbch_AllerigieMedicament: string;

  @Prop({ type: String })
  visiteEmbch_AntecedentAutre: string;

  @Prop({ type: String })
  visiteEmbch_ProblemeDigestif: string;

  @Prop({ type: String })
  visiteEmbch_ProblemeRespiration: string;

  @Prop({ type: String })
  visiteEmbch_ProblemeNeurologie: string;

  @Prop({ type: String })
  visiteEmbch_HTA: string;

  @Prop({ type: String })
  visiteEmbch_Diabete: string;

  @Prop({ type: String })
  visiteEmbch_TraumatismeCranie: string;

  @Prop({ type: String })
  visiteEmbch_TraumatismeOsseux: string;

  @Prop({ type: String })
  visiteEmbch_InterventionAppDigestif: string;

  @Prop({ type: String })
  visiteEmbch_InterventionGynecoObste: string;

  @Prop({ type: String })
  visiteEmbch_Amygdalectomie: string;

  @Prop({ type: String })
  visiteEmbch_FID: string;

  @Prop({ type: String })
  visiteEmbch_ToxiqueTabacs: string;

  @Prop({ type: String })
  visiteEmbch_ToxiqueAlcool: string;

  @Prop({ type: String })
  visiteEmbch_ToxiqueCafe: string;

  @Prop({ type: String })
  visiteEmbch_ToxiqueTabacsAChiq: string;

  @Prop({ type: String })
  visiteEmbch_ToxiqueTambavy: string;

  @Prop({ type: String })
  visiteEmbch_ToxiqueAutre: string;

  @Prop({ type: String })
  visiteEmbch_EtatGynecoObsPF1: string;

  @Prop({ type: String })
  visiteEmbch_EtatGynecoObsPF2: string;

  @Prop({ type: String })
  visiteEmbch_EtatGynecoObsPF3: string;

  @Prop({ type: String })
  visiteEmbch_EtatGynecoObsPF4: string;

  @Prop({ type: String })
  visiteEmbch_EtatGynecoObsPF5: string;

  @Prop({ type: String })
  visiteEmbch_EtatGynecoObsPF6: string;

  @Prop({ type: String })
  visiteEmbch_EtatGynecoObsGrossesse: string;

  @Prop({ type: String })
  visiteEmbch_EtatGynecoObsAllaitement: string;

  @Prop({ type: String })
  visiteEmbch_EtatGynecoObsMenopose: string;

  @Prop({ type: String })
  visiteEmbch_EtatGynecoObsSolitaire: string;

  @Prop({ type: String })
  visiteEmbch_ParametrePoids: number;

  @Prop({ type: String })
  visiteEmbch_ParametreTaille: string;

  @Prop({ type: String })
  visiteEmbch_ParametreIMC: string;

  @Prop({ type: String })
  visiteEmbch_ParametreResultat: string;

  @Prop({ type: String })
  visiteEmbch_VisionSansCorrOD: string;

  @Prop({ type: String })
  visiteEmbch_VisionSansCorrOG: string;

  @Prop({ type: String })
  visiteEmbch_VisionAvecPortLunetteOG: string;

  @Prop({ type: String })
  visiteEmbch_VisionAvecPortLunetteOD: string;

  @Prop({ type: String })
  visiteEmbch_VisionLoinOG: string;

  @Prop({ type: String })
  visiteEmbch_VisionLoinOD: string;

  @Prop({ type: String })
  visiteEmbch_VisionPresOD: string;

  @Prop({ type: String })
  visiteEmbch_VisionPresOG: string;

  @Prop({ type: String })
  visiteEmbch_VisionExamenDaltonis: string;

  @Prop({ type: String })
  visiteEmbch_OreilDistanceD: string;

  @Prop({ type: String })
  visiteEmbch_OreilDistanceG: string;

  @Prop({ type: String })
  visiteEmbch_OreileExamOtoscopeG: string;

  @Prop({ type: String })
  visiteEmbch_OreileExamOtoscopeD: string;

  @Prop({ type: String })
  visiteEmbch_OreileTestDiapasonG: string;

  @Prop({ type: String })
  visiteEmbch_OreileTestDiapasonD: string;

  @Prop({ type: String })
  visiteEmbch_denture1: string;

  @Prop({ type: String })
  visiteEmbch_denture2: string;

  @Prop({ type: String })
  visiteEmbch_denture3: string;

  @Prop({ type: String })
  visiteEmbch_denture4: string;

  @Prop({ type: String })
  visiteEmbch_ToraAuscultation: string;

  @Prop({ type: String })
  visiteEmbch_ToraPercussion: string;

  @Prop({ type: String })
  visiteEmbch_ToraAutre: string;

  @Prop({ type: String })
  visiteEmbch_coeurAuscultation: string;

  @Prop({ type: String })
  visiteEmbch_coeurVaricesMI: string;

  @Prop({ type: String })
  visiteEmbch_coeurVaricesOedemMI: string;

  @Prop({ type: String })
  visiteEmbch_coeurExRadio: string;

  @Prop({ type: String })
  visiteEmbch_coeurPoulsG: string;

  @Prop({ type: String })
  visiteEmbch_coeurPoulsD: string;

  @Prop({ type: String })
  visiteEmbch_coeurTAG: string;

  @Prop({ type: String })
  visiteEmbch_coeurTAD: string;

  @Prop({ type: String })
  visiteEmbch_coeurExMedRadio: string;

  @Prop({ type: String })
  visiteEmbch_coeurAutre: string;

  @Prop({ type: String })
  visiteEmbch_abdomenFoie: string;

  @Prop({ type: String })
  visiteEmbch_abdomenVesicule: string;

  @Prop({ type: String })
  visiteEmbch_abdomenRate: string;

  @Prop({ type: Number })
  visiteEmbch_abdomenRateNum: number;

  @Prop({ type: String })
  visiteEmbch_abdomenIntestin: string;

  @Prop({ type: String })
  visiteEmbch_abdomenCoeco: string;

  @Prop({ type: String })
  visiteEmbch_abdomenColon: string;

  @Prop({ type: String })
  visiteEmbch_abdomenHernies: string;

  @Prop({ type: String })
  visiteEmbch_abdomenGastrique: string;

  @Prop({ type: String })
  visiteEmbch_abdomenHepathique: string;

  @Prop({ type: String })
  visiteEmbch_abdomenAutre: string;

  @Prop({ type: String })
  visiteEmbch_fosseLambaires: string;

  @Prop({ type: String })
  visiteEmbch_genitoUrinaireF: string;

  @Prop({ type: String })
  visiteEmbch_genitoUrinaireH: string;

  @Prop({ type: String })
  visiteEmbch_sysNervOsteo: string;

  @Prop({ type: String })
  visiteEmbch_sysNervCutane: string;

  @Prop({ type: String })
  visiteEmbch_sysNervPhotoMoteurs: string;

  @Prop({ type: String })
  visiteEmbch_sysNervAutresSignes: string;

  @Prop({ type: String })
  visiteEmbch_PeauPtyriasisVersicolor: string;

  @Prop({ type: String })
  visiteEmbch_PeauEczema: string;

  @Prop({ type: String })
  visiteEmbch_PeauAutre: string;

  @Prop({ type: String })
  visiteEmbch_LocomoteurMalFormSquelet: string;

  @Prop({ type: String })
  visiteEmbch_LocomoteurTroubleMotrice: string;

  @Prop({ type: String })
  visiteEmbch_exUrineA: string;

  @Prop({ type: String })
  visiteEmbch_exUrineS: string;

  @Prop({ type: String })
  visiteEmbch_exUrineEcho: string;

  @Prop({ type: String })
  visiteEmbch_exUrineTestBU: string;

  @Prop({ type: String })
  visiteEmbch_ExanDemandeRadioCoeurPoumonsFace: string;

  @Prop({ type: String })
  visiteEmbch_ExanDemandeRadioCoeurPoumonsProfile: string;

  @Prop({ type: String })
  visiteEmbch_ExanDemandeEchoPalvienne: string;

  @Prop({ type: String })
  visiteEmbch_ExanDemandeEchoAbdominale: string;

  @Prop({ type: String })
  visiteEmbch_ExanDemandeNeurologie: string;

  @Prop({ type: String })
  visiteEmbch_ExanDemandeOphtalmo: string;

  @Prop({ type: String })
  visiteEmbch_ExanDemandeCardio: string;

  @Prop({ type: String })
  visiteEmbch_ExanDemandeBilanSagin: string;

  @Prop({ type: String })
  visiteEmbch_ExanConsultationExterne: string;

  @Prop({ type: String })
  visiteEmbch_ExanConsultationInterne: string;

  @Prop({ type: String })
  visiteEmbch_ExanConsultation: string;

  @Prop({ type: String })
  visiteEmbch_ExanDemandeAutre: string;

  @Prop({ type: String })
  visiteEmbch_ConseilConseil: string;

  @Prop({ type: String })
  visiteEmbch_ConseilConclusion: string;

  @Prop({ type: String })
  visiteEmbch_sousCondition: string;

  @Prop({ type: String })
  visiteEmbch_ConseilMedecin: string;

  @Prop({
  })
  visiteEmbch_Conseildate: Date;
  

  @Prop({ type: String })
  visiteEmbch_Revisitedate: String;

  @Prop({ type: String })
  visiteEmbch_precisionMedicamenteux: string;

  @Prop({ type: String })
  visiteEmbch_precisionAlimentaire: string;

  @Prop({ type: Number })
  visiteEmbch_Age: number;

  @Prop({ type: String })
  visiteEmbch_Dispensaire: string;

  @Prop({ type: String })
  Embch_date: String;

  @Prop({ type: String })
  visite_date: String;

  @Prop({ type: String })
  visiteEmbch_postoccupe: string;

  @Prop({ type: String, default: null })
  visiteEmbch_remarquepostoccupe: string | null;

  @Prop({ type: String })
  visiteEmbch_adhsecteuract: string;

  @Prop({ type: Number })
  visiteEmbch_ageAncienete: number;

  @Prop({ type: String })
  visiteEmbch_mathisorise: string;

  @Prop({ type: Number })
  visiteEmbch_persId: number;

  @Prop({ type: String })
  visiteEmbch_persMat: string;
s
  @Prop({ type: String })
  visiteEmbch_persNom: string;

  @Prop({ type: Number })
  visiteEmbch_persServiceId: number;

  @Prop({ type: Number })
  visiteEmbch_persCentreId: number;

  @Prop({ type: String })
  visiteEmbch_persIpAdress: string;

  @Prop({ type: Number })
  visiteEmbch_planificationVmo: number;

  @Prop({ type: String })
  visiteEmbch_ramarqGeneral: string;

  @Prop({ type: Number })
  visiteEmbch_ParamAbdominal: number;

  @Prop({ type: String })
  visiteEmbch_ParametreResultatAbdominal: string;

  @Prop({ type: String })
  visiteEmbch_num: string;
}

export const MedecinTravailSchema = SchemaFactory.createForClass(MedecinTravail);


