import { Model, Column, Table, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({ tableName: 'affilie', timestamps: false })
export class Affilie extends Model {
  @PrimaryKey
  @Column({ type: DataType.BIGINT.UNSIGNED })
  aff_id: number;

  @Column({ type: DataType.STRING(25) })
  aff_num: string;

  @Column({ type: DataType.BIGINT })
  aff_numLast: number;

  @Column({ type: DataType.BIGINT })
  aff_numNews: number;

  @Column({ type: DataType.BIGINT.UNSIGNED, defaultValue: 0 })
  aff_affTravailleur01Id: number;

  @Column({ type: DataType.BIGINT })
  aff_affTravailleur01IdLast: number;

  @Column({ type: DataType.BIGINT })
  aff_affTravailleur01IdNews: number;

  @Column({ type: DataType.BIGINT.UNSIGNED, defaultValue: 0 })
  aff_affTravailleur02Id: number;

  @Column({ type: DataType.BIGINT })
  aff_affTravailleur02IdLast: number;

  @Column({ type: DataType.BIGINT })
  aff_affTravailleur02IdNews: number;

  @Column({ type: DataType.INTEGER.UNSIGNED, defaultValue: 0, comment: "Le centre de rattachement par défaut de l'affilié" })
  aff_centreId: number;

  @Column({ type: DataType.STRING(160)})
  aff_nom: string;

  @Column({ type: DataType.STRING(160) })
  aff_prenom: string;

  @Column({ type: DataType.STRING(50) })
  aff_sexe: string;

  @Column({ type: DataType.STRING(255) })
  aff_adresse: string;

  @Column({ type: DataType.DATE })
  aff_naissDate: Date;

  @Column({ type: DataType.STRING(160) })
  aff_naissLieu: string;

  @Column({ type: DataType.STRING(50) })
  aff_cinNum: string;

  @Column({ type: DataType.DATE })
  aff_cinDate: Date;

  @Column({ type: DataType.STRING(25) })
  aff_cinLieu: string;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  aff_situationFamilialeId: number;

  @Column({ type: DataType.INTEGER })
  aff_nbrEnfant: number;

  @Column({ type: DataType.STRING(25) })
  aff_liaison: string;

  @Column({ type: DataType.STRING(25) })
  aff_typeTrav: string;

  @Column({ type: DataType.STRING(25) })
  aff_ville: string;

  @Column({ type: DataType.STRING(25) })
  aff_codePost: string;

  @Column({ type: DataType.STRING(50) })
  aff_fonction: string;

  @Column({ type: DataType.STRING(50) })
  aff_classification: string;

  @Column({ type: DataType.STRING(50) })
  aff_cnapsNum: string;

  @Column({ type: DataType.STRING(160), comment: "path de la photo de l'affilié" })
  aff_photo: string;

  @Column({ type: DataType.INTEGER })
  CHRONO: number;

  @Column({ type: DataType.TINYINT.UNSIGNED.ZEROFILL })
  aff_rang: number;

  @Column({ type: DataType.TINYINT })
  aff_codeUnique: number;

  @Column({ type: DataType.TINYINT })
  aff_doublon: number;

  @Column({ type: DataType.DATE })
  aff_dateCreation: Date;

  @Column({ type: DataType.BIGINT })
  aff_fusion: number;

  @Column({ type: DataType.INTEGER.UNSIGNED.ZEROFILL })
  affId_old: number;

  @Column({ type: DataType.STRING(255) })
  aff_persNom: string;

  @Column({ type: DataType.INTEGER })
  aff_persId: number;

  @Column({ type: DataType.STRING(50) })
  aff_persMat: string;

  @Column({ type: DataType.TINYINT })
  aff_persCentreId: number;

  @Column({ type: DataType.TINYINT })
  aff_persServiceId: number;

  @Column({ type: DataType.STRING(50) })
  aff_persIpAdress: string;

  @Column({ type: DataType.DATE })
  affEmbauche_embauchedate: Date;

  @Column({ type: DataType.DATE })
  affEmbauche_debaucheDate: Date;

  @Column({ type: DataType.DECIMAL(10, 2) })
  affEmbauche_salaireBrut: number;

  @Column({ type: DataType.STRING(250) })
  affEmbauche_fonction: string;

  @Column({ type: DataType.STRING(250) })
  affEmbauche_classification: string;

  @Column({ type: DataType.TINYINT })
  affEmbauche_ostieplus: number;

  @Column({ type: DataType.STRING(50) })
  affEmbauche_matricule: string;

  @Column({ type: DataType.STRING(250) })
  affEmbauche_type: string;

  @Column({ type: DataType.DATE })
  affEmbauche_debaucheDateSaisie: Date;

  @Column({ type: DataType.INTEGER })
  affEmbauche_debauchePersId: number;

  @Column({ type: DataType.INTEGER })
  affHist_adhIdIndex: number;

  @Column({ type: DataType.INTEGER })
  affHist_adhId: number;

  @Column({ type: DataType.STRING(11) })
  affHist_adhNum: string;

  @Column({ type: DataType.TINYINT })
  affHist_situationId: number;

  @Column({ type: DataType.TINYINT })
  affHist_affiliationTypeId: number;

  @Column({ type: DataType.TEXT })
  affHist_motif: string;

  @Column({ type: DataType.DATE })
  affHist_date: Date;

  @Column({ type: DataType.DATE })
  affHist_dateSaisie: Date;

  @Column({ type: DataType.INTEGER })
  affHist_persId: number;

  @Column({ type: DataType.TINYINT })
  affHist_certificatScolaire: number;

  @Column({ type: DataType.DATE })
  affHist_certificatScolaireDate: Date;

  @Column({ type: DataType.STRING(250) })
  affHist_obsCba: string;

  @Column({ type: DataType.DATE })
  affHist_dateObsCba: Date;

  @Column({ type: DataType.DECIMAL(10, 2) })
  affEmbauche_salaire1eremois: number;

  @Column({ type: DataType.DECIMAL(10, 2) })
  affEmbauche_salaire2ememois: number;

  @Column({ type: DataType.DECIMAL(10, 2) })
  affEmbauche_salaire3ememois: number;

  @Column({ type: DataType.DECIMAL(10, 2) })
  affEmbauche_TotauxSalNonPlafones: number;

  @Column({ type: DataType.DECIMAL(10, 2) })
  affEmbauche_TotauxSalPlafones: number;

  @Column({ type: DataType.DECIMAL(10, 2) })
  affEmbauche_PartEmployer: number;

  @Column({ type: DataType.DECIMAL(10, 2) })
  affEmbauche_PartTravailleur: number;
}


