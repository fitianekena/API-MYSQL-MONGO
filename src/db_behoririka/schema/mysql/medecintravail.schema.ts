import { Model, Column, Table, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ChampMere } from 'src/decorators/champ-mere/champ-mere.decorator';
import { Centre as CentreMongodb } from '../mongodb/centre.schema';

@Table({ tableName: 'medecintravail', timestamps: false })
export class MedecinTravail extends Model {
  @PrimaryKey
  @ChampMere(MedecinTravail.name, 'visiteEmbch_id', 'INT', 'visiteEmbch_id')
  @Column({ type: DataType.BIGINT })
  visiteEmbch_id: number;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_code', 'STRING', 'visiteEmbch_code')
  @Column({ type: DataType.STRING(50), defaultValue: null })
  visiteEmbch_code: string | null;


  @Column({ type: DataType.BIGINT, defaultValue: null })
  visiteEmbch_affId: bigint | null;

  
  @Column({ type: DataType.BIGINT, allowNull: false })
  visiteEmbch_affIdLast: bigint;


  @Column({ type: DataType.STRING(50), defaultValue: null })
  visiteEmbch_adhId: string | null;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_NomPrenom', 'STRING', 'visiteEmbch_NomPrenom')
  @Column({ type: DataType.STRING(600), allowNull: false })
  visiteEmbch_NomPrenom: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_DateNais', 'DATE', 'visiteEmbch_DateNais')
  @Column({ type: DataType.DATE, allowNull: false })
  visiteEmbch_DateNais: Date;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_Sex', 'STRING', 'visiteEmbch_Sex')
  @Column({ type: DataType.STRING(20), allowNull: false })
  visiteEmbch_Sex: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_Profession', 'STRING', 'visiteEmbch_Profession')
  @Column({ type: DataType.STRING(250), allowNull: false })
  visiteEmbch_Profession: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_Adherent', 'STRING', 'visiteEmbch_Adherent')
  @Column({ type: DataType.STRING(250), allowNull: false })
  visiteEmbch_Adherent: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_Tel', 'STRING', 'visiteEmbch_Tel')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_Tel: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_Adresse', 'STRING', 'visiteEmbch_Adresse')
  @Column({ type: DataType.STRING(250), allowNull: false })
  visiteEmbch_Adresse: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_date', 'DATE', 'visiteEmbch_date')
  @Column({ type: DataType.DATE, defaultValue: null })
  visiteEmbch_date: Date;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_observation', 'TEXT', 'visiteEmbch_observation')
  @Column({ type: DataType.TEXT, defaultValue: null })
  visiteEmbch_observation: string | null;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_persnlMedecinId', 'INT', 'visiteEmbch_persnlMedecinId')
  @Column({ type: DataType.INTEGER, defaultValue: null })
  visiteEmbch_persnlMedecinId: number | null;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_typeId', 'INT', 'visiteEmbch_typeId')
  @Column({ type: DataType.INTEGER, allowNull: false })
  visiteEmbch_typeId: number;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_TypeVisite', 'STRING', 'visiteEmbch_TypeVisite')
  @Column({ type: DataType.STRING(250), allowNull: false })
  visiteEmbch_TypeVisite: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_AllerigieAlimentaire', 'STRING', 'visiteEmbch_AllerigieAlimentaire')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_AllerigieAlimentaire: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_AllerigieMedicament', 'STRING', 'visiteEmbch_AllerigieMedicament')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_AllerigieMedicament: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_AntecedentAutre', 'STRING', 'visiteEmbch_AntecedentAutre')
  @Column({ type: DataType.STRING(250), allowNull: false })
  visiteEmbch_AntecedentAutre: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ProblemeDigestif', 'STRING', 'visiteEmbch_ProblemeDigestif')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ProblemeDigestif: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ProblemeRespiration', 'STRING', 'visiteEmbch_ProblemeRespiration')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ProblemeRespiration: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ProblemeNeurologie', 'STRING', 'visiteEmbch_ProblemeNeurologie')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ProblemeNeurologie: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_HTA', 'STRING', 'visiteEmbch_HTA')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_HTA: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_Diabete', 'STRING', 'visiteEmbch_Diabete')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_Diabete: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_TraumatismeCranie', 'STRING', 'visiteEmbch_TraumatismeCranie')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_TraumatismeCranie: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_TraumatismeOsseux', 'STRING', 'visiteEmbch_TraumatismeOsseux')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_TraumatismeOsseux: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_InterventionAppDigestif', 'STRING', 'visiteEmbch_InterventionAppDigestif')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_InterventionAppDigestif: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_InterventionGynecoObste', 'STRING', 'visiteEmbch_InterventionGynecoObste')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_InterventionGynecoObste: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_Amygdalectomie', 'STRING', 'visiteEmbch_Amygdalectomie')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_Amygdalectomie: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_FID', 'STRING', 'visiteEmbch_FID')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_FID: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ToxiqueTabacs', 'STRING', 'visiteEmbch_ToxiqueTabacs')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ToxiqueTabacs: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ToxiqueAlcool', 'STRING', 'visiteEmbch_ToxiqueAlcool')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ToxiqueAlcool: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ToxiqueCafe', 'STRING', 'visiteEmbch_ToxiqueCafe')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ToxiqueCafe: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ToxiqueTabacsAChiq', 'STRING', 'visiteEmbch_ToxiqueTabacsAChiq')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ToxiqueTabacsAChiq: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ToxiqueTambavy', 'STRING', 'visiteEmbch_ToxiqueTambavy')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ToxiqueTambavy: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ToxiqueAutre', 'STRING', 'visiteEmbch_ToxiqueAutre')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ToxiqueAutre: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_EtatGynecoObsPF1', 'STRING', 'visiteEmbch_EtatGynecoObsPF1')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_EtatGynecoObsPF1: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_EtatGynecoObsPF2', 'STRING', 'visiteEmbch_EtatGynecoObsPF2')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_EtatGynecoObsPF2: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_EtatGynecoObsPF3', 'STRING', 'visiteEmbch_EtatGynecoObsPF3')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_EtatGynecoObsPF3: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_EtatGynecoObsPF4', 'STRING', 'visiteEmbch_EtatGynecoObsPF4')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_EtatGynecoObsPF4: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_EtatGynecoObsPF5', 'STRING', 'visiteEmbch_EtatGynecoObsPF5')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_EtatGynecoObsPF5: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_EtatGynecoObsPF6', 'STRING', 'visiteEmbch_EtatGynecoObsPF6')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_EtatGynecoObsPF6: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_EtatGynecoObsGrossesse', 'STRING', 'visiteEmbch_EtatGynecoObsGrossesse')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_EtatGynecoObsGrossesse: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_EtatGynecoObsAllaitement', 'STRING', 'visiteEmbch_EtatGynecoObsAllaitement')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_EtatGynecoObsAllaitement: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_EtatGynecoObsMenopose', 'STRING', 'visiteEmbch_EtatGynecoObsMenopose')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_EtatGynecoObsMenopose: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_EtatGynecoObsSolitaire', 'STRING', 'visiteEmbch_EtatGynecoObsSolitaire')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_EtatGynecoObsSolitaire: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ParametrePoids', 'STRING', 'visiteEmbch_ParametrePoids')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ParametrePoids: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ParametreTaille', 'STRING', 'visiteEmbch_ParametreTaille')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ParametreTaille: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ParametreIMC', 'STRING', 'visiteEmbch_ParametreIMC')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ParametreIMC: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ParametreResultat', 'STRING', 'visiteEmbch_ParametreResultat')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ParametreResultat: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_VisionSansCorrOD', 'STRING', 'visiteEmbch_VisionSansCorrOD')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_VisionSansCorrOD: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_VisionSansCorrOG', 'STRING', 'visiteEmbch_VisionSansCorrOG')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_VisionSansCorrOG: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_VisionAvecPortLunetteOG', 'STRING', 'visiteEmbch_VisionAvecPortLunetteOG')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_VisionAvecPortLunetteOG: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_VisionAvecPortLunetteOD', 'STRING', 'visiteEmbch_VisionAvecPortLunetteOD')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_VisionAvecPortLunetteOD: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_VisionLoinOG', 'STRING', 'visiteEmbch_VisionLoinOG')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_VisionLoinOG: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_VisionLoinOD', 'STRING', 'visiteEmbch_VisionLoinOD')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_VisionLoinOD: string;
  DataType
  @ChampMere(MedecinTravail.name, 'visiteEmbch_VisionPresOD', 'STRING', 'visiteEmbch_VisionPresOD')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_VisionPresOD: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_VisionPresOG', 'STRING', 'visiteEmbch_VisionPresOG')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_VisionPresOG: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_VisionExamenDaltonis', 'STRING', 'visiteEmbch_VisionExamenDaltonis')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_VisionExamenDaltonis: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_OreilDistanceD', 'STRING', 'visiteEmbch_OreilDistanceD')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_OreilDistanceD: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_OreilDistanceG', 'STRING', 'visiteEmbch_OreilDistanceG')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_OreilDistanceG: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_OreileExamOtoscopeG', 'STRING', 'visiteEmbch_OreileExamOtoscopeG')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_OreileExamOtoscopeG: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_OreileTestDiapasonD', 'STRING', 'visiteEmbch_OreileTestDiapasonD')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_OreileTestDiapasonD: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_denture4', 'STRING', 'visiteEmbch_denture4')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_denture4: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ToraAuscultation', 'STRING', 'visiteEmbch_ToraAuscultation')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ToraAuscultation: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ToraPercussion', 'STRING', 'visiteEmbch_ToraPercussion')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ToraPercussion: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ToraAutre', 'STRING', 'visiteEmbch_ToraAutre')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ToraAutre: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_coeurAuscultation', 'STRING', 'visiteEmbch_coeurAuscultation')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_coeurAuscultation: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_coeurVaricesMI', 'STRING', 'visiteEmbch_coeurVaricesMI')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_coeurVaricesMI: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_coeurVaricesOedemMI', 'STRING', 'visiteEmbch_coeurVaricesOedemMI')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_coeurVaricesOedemMI: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_coeurExRadio', 'STRING', 'visiteEmbch_coeurExRadio')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_coeurExRadio: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_coeurPoulsG', 'STRING', 'visiteEmbch_coeurPoulsG')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_coeurPoulsG: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_coeurPoulsD', 'STRING', 'visiteEmbch_coeurPoulsD')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_coeurPoulsD: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_coeurTAG', 'STRING', 'visiteEmbch_coeurTAG')
  @Column({ type: DataType.STRING(11), allowNull: false })
  visiteEmbch_coeurTAG: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_coeurTAD', 'STRING', 'visiteEmbch_coeurTAD')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_coeurTAD: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_coeurExMedRadio', 'STRING', 'visiteEmbch_coeurExMedRadio')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_coeurExMedRadio: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_coeurAutre', 'STRING', 'visiteEmbch_coeurAutre')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_coeurAutre: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_abdomenFoie', 'STRING', 'visiteEmbch_abdomenFoie')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_abdomenFoie: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_abdomenVesicule', 'STRING', 'visiteEmbch_abdomenVesicule')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_abdomenVesicule: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_abdomenRate', 'STRING', 'visiteEmbch_abdomenRate')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_abdomenRate: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_abdomenRateNum', 'STRING', 'visiteEmbch_abdomenRateNum')
  @Column({ type: DataType.STRING(11), allowNull: false })
  visiteEmbch_abdomenRateNum: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_abdomenIntestin', 'STRING', 'visiteEmbch_abdomenIntestin')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_abdomenIntestin: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_abdomenCoeco', 'STRING', 'visiteEmbch_abdomenCoeco')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_abdomenCoeco: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_abdomenColon', 'STRING', 'visiteEmbch_abdomenColon')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_abdomenColon: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_abdomenHernies', 'STRING', 'visiteEmbch_abdomenHernies')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_abdomenHernies: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_abdomenGastrique', 'STRING', 'visiteEmbch_abdomenGastrique')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_abdomenGastrique: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_abdomenHepathique', 'STRING', 'visiteEmbch_abdomenHepathique')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_abdomenHepathique: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_abdomenAutre', 'STRING', 'visiteEmbch_abdomenAutre')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_abdomenAutre: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_fosseLambaires', 'STRING', 'visiteEmbch_fosseLambaires')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_fosseLambaires: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_genitoUrinaireF', 'STRING', 'visiteEmbch_genitoUrinaireF')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_genitoUrinaireF: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_genitoUrinaireH', 'STRING', 'visiteEmbch_genitoUrinaireH')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_genitoUrinaireH: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_sysNervOsteo', 'STRING', 'visiteEmbch_sysNervOsteo')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_sysNervOsteo: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_sysNervCutane', 'STRING', 'visiteEmbch_sysNervCutane')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_sysNervCutane: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_sysNervPhotoMoteurs', 'STRING', 'visiteEmbch_sysNervPhotoMoteurs')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_sysNervPhotoMoteurs: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_sysNervAutresSignes', 'STRING', 'visiteEmbch_sysNervAutresSignes')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_sysNervAutresSignes: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_PeauPtyriasisVersicolor', 'STRING', 'visiteEmbch_PeauPtyriasisVersicolor')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_PeauPtyriasisVersicolor: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_PeauEczema', 'STRING', 'visiteEmbch_PeauEczema')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_PeauEczema: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_PeauAutre', 'STRING', 'visiteEmbch_PeauAutre')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_PeauAutre: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_LocomoteurMalFormSquelet', 'STRING', 'visiteEmbch_LocomoteurMalFormSquelet')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_LocomoteurMalFormSquelet: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_LocomoteurTroubleMotrice', 'STRING', 'visiteEmbch_LocomoteurTroubleMotrice')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_LocomoteurTroubleMotrice: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_exUrineA', 'STRING', 'visiteEmbch_exUrineA')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_exUrineA: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_exUrineS', 'STRING', 'visiteEmbch_exUrineS')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_exUrineS: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_exUrineEcho', 'STRING', 'visiteEmbch_exUrineEcho')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_exUrineEcho: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_exUrineTestBU', 'STRING', 'visiteEmbch_exUrineTestBU')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_exUrineTestBU: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ExanDemandeRadioCoeurPoumonsFace', 'STRING', 'visiteEmbch_ExanDemandeRadioCoeurPoumonsFace')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ExanDemandeRadioCoeurPoumonsFace: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ExanDemandeRadioCoeurPoumonsProfile', 'STRING', 'visiteEmbch_ExanDemandeRadioCoeurPoumonsProfile')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ExanDemandeRadioCoeurPoumonsProfile: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ExanDemandeEchoPalvienne', 'STRING', 'visiteEmbch_ExanDemandeEchoPalvienne')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ExanDemandeEchoPalvienne: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ExanDemandeEchoAbdominale', 'STRING', 'visiteEmbch_ExanDemandeEchoAbdominale')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ExanDemandeEchoAbdominale: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ExanDemandeNeurologie', 'STRING', 'visiteEmbch_ExanDemandeNeurologie')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ExanDemandeNeurologie: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ExanDemandeOphtalmo', 'STRING', 'visiteEmbch_ExanDemandeOphtalmo')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ExanDemandeOphtalmo: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ExanDemandeCardio', 'STRING', 'visiteEmbch_ExanDemandeCardio')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ExanDemandeCardio: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ExanDemandeBilanSagin', 'STRING', 'visiteEmbch_ExanDemandeBilanSagin')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ExanDemandeBilanSagin: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ExanConsultationExterne', 'STRING', 'visiteEmbch_ExanConsultationExterne')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ExanConsultationExterne: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ExanConsultationInterne', 'STRING', 'visiteEmbch_ExanConsultationInterne')
  @Column({ type: DataType.STRING(250), allowNull: false })
  visiteEmbch_ExanConsultationInterne: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ExanConsultation', 'STRING', 'visiteEmbch_ExanConsultation')
  @Column({ type: DataType.STRING(250), allowNull: false })
  visiteEmbch_ExanConsultation: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ExanDemandeAutre', 'STRING', 'visiteEmbch_ExanDemandeAutre')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ExanDemandeAutre: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ConseilConseil', 'STRING', 'visiteEmbch_ConseilConseil')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ConseilConseil: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ConseilConclusion', 'STRING', 'visiteEmbch_ConseilConclusion')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_ConseilConclusion: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_sousCondition', 'STRING', 'visiteEmbch_sousCondition')
  @Column({ type: DataType.STRING(300), allowNull: false })
  visiteEmbch_sousCondition: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ConseilMedecin', 'STRING', 'visiteEmbch_ConseilMedecin')
  @Column({ type: DataType.STRING(250), allowNull: false })
  visiteEmbch_ConseilMedecin: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_Conseildate', 'DATE', 'visiteEmbch_Conseildate')
  @Column({ type: DataType.DATE, allowNull: false })
  visiteEmbch_Conseildate: Date;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_Revisitedate', 'DATE', 'visiteEmbch_Revisitedate')
  @Column({ type: DataType.DATE, allowNull: false })
  visiteEmbch_Revisitedate: Date;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_precisionMedicamenteux', 'STRING', 'visiteEmbch_precisionMedicamenteux')
  @Column({ type: DataType.STRING(250), allowNull: false })
  visiteEmbch_precisionMedicamenteux: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_precisionAlimentaire', 'STRING', 'visiteEmbch_precisionAlimentaire')
  @Column({ type: DataType.STRING(250), allowNull: false })
  visiteEmbch_precisionAlimentaire: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_Age', 'INT', 'visiteEmbch_Age')
  @Column({ type: DataType.INTEGER, allowNull: false })
  visiteEmbch_Age: number;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_Dispensaire', 'STRING', 'visiteEmbch_Dispensaire')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_Dispensaire: string;

  @ChampMere(MedecinTravail.name, 'Embch_date', 'DATE', 'Embch_date')
  @Column({ type: DataType.DATE, allowNull: false })
  Embch_date: Date;

  @ChampMere(MedecinTravail.name, 'visite_date', 'DATE', 'visite_date')
  @Column({ type: DataType.DATE, allowNull: false })
  visite_date: Date;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_postoccupe', 'STRING', 'visiteEmbch_postoccupe')
  @Column({ type: DataType.STRING(250), allowNull: false })
  visiteEmbch_postoccupe: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_remarquepostoccupe', 'STRING', 'visiteEmbch_remarquepostoccupe')
  @Column({ type: DataType.STRING(255), allowNull: true })
  visiteEmbch_remarquepostoccupe: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_adhsecteuract', 'STRING', 'visiteEmbch_adhsecteuract')
  @Column({ type: DataType.STRING(250), allowNull: false })
  visiteEmbch_adhsecteuract: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ageAncienete', 'INT', 'visiteEmbch_ageAncienete')
  @Column({ type: DataType.INTEGER, allowNull: false })
  visiteEmbch_ageAncienete: number;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_mathisorise', 'TEXT', 'visiteEmbch_mathisorise')
  @Column({ type: DataType.TEXT, allowNull: false })
  visiteEmbch_mathisorise: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_persId', 'INT', 'visiteEmbch_persId')
  @Column({ type: DataType.INTEGER, allowNull: false })
  visiteEmbch_persId: number;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_persMat', 'STRING', 'visiteEmbch_persMat')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_persMat: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_persNom', 'STRING', 'visiteEmbch_persNom')
  @Column({ type: DataType.STRING(250), allowNull: false })
  visiteEmbch_persNom: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_persServiceId', 'TINYINT', 'visiteEmbch_persServiceId')
  @Column({ type: DataType.TINYINT, allowNull: false })
  visiteEmbch_persServiceId: number;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_persCentreId', 'INT', 'visiteEmbch_persCentreId')
  @Column({ type: DataType.INTEGER, allowNull: false })
  visiteEmbch_persCentreId: number;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_persIpAdress', 'STRING', 'visiteEmbch_persIpAdress')
  @Column({ type: DataType.STRING(50), allowNull: false })
  visiteEmbch_persIpAdress: string;
  @ChampMere(MedecinTravail.name, 'visiteEmbch_planificationVmo', 'TINYINT', 'visiteEmbch_planificationVmo')
  @Column({ type: DataType.TINYINT, allowNull: false })
  visiteEmbch_planificationVmo: number;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ramarqGeneral', 'STRING', 'visiteEmbch_ramarqGeneral')
  @Column({ type: DataType.STRING(500), allowNull: false })
  visiteEmbch_ramarqGeneral: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ParamAbdominal', 'DECIMAL', 'visiteEmbch_ParamAbdominal')
  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  visiteEmbch_ParamAbdominal: number;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_ParametreResultatAbdominal', 'STRING', 'visiteEmbch_ParametreResultatAbdominal')
  @Column({ type: DataType.STRING(250), allowNull: false })
  visiteEmbch_ParametreResultatAbdominal: string;

  @ChampMere(MedecinTravail.name, 'visiteEmbch_num', 'STRING', 'visiteEmbch_num')
  @Column({ type: DataType.STRING(255), allowNull: false })
  visiteEmbch_num: string;

}


