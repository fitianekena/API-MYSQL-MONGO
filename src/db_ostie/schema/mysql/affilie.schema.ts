import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  AllowNull,
  Default,
} from 'sequelize-typescript';

@Table({ tableName: 'affilie', timestamps: false })
export class Affilie extends Model {
  
  @Column({ type: DataType.BIGINT })
  aff_id: number;

  @PrimaryKey
  @Column({ type: DataType.STRING(25) })
  aff_num: string;

  @Column({ type: DataType.BIGINT })
  aff_numLast: number;

  @Column({ type: DataType.BIGINT })
  aff_numNews: number;

  @Default(0)
  @Column({ type: DataType.BIGINT.UNSIGNED })
  aff_affTravailleur01Id: number;

  @Column({ type: DataType.BIGINT })
  aff_affTravailleur01IdLast: number;

  @Column({ type: DataType.BIGINT })
  aff_affTravailleur01IdNews: number;

  @Default(0)
  @Column({ type: DataType.BIGINT.UNSIGNED })
  aff_affTravailleur02Id: number;

  @Column({ type: DataType.BIGINT })
  aff_affTravailleur02IdLast: number;

  @Column({ type: DataType.BIGINT })
  aff_affTravailleur02IdNews: number;

  @Default(0)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "Le centre de rattachement par défaut de l'affilié",
  })
  aff_centreId: number;

  @AllowNull
  @Column({ type: DataType.STRING(160) })
  aff_nom: string;

  @AllowNull
  @Column({ type: DataType.STRING(160) })
  aff_prenom: string;

  @AllowNull
  @Column({ type: DataType.STRING(50) })
  aff_sexe: string;

  @AllowNull
  @Column({ type: DataType.STRING(255) })
  aff_adresse: string;

  @AllowNull
  @Column({ type: DataType.DATE })
  aff_naissDate: Date;

  @AllowNull
  @Column({ type: DataType.STRING(160) })
  aff_naissLieu: string;

  @AllowNull
  @Column({ type: DataType.STRING(50) })
  aff_cinNum: string;

  @AllowNull
  @Column({ type: DataType.DATE })
  aff_cinDate: Date;

  @AllowNull
  @Column({ type: DataType.STRING(25) })
  aff_cinLieu: string;

  @Default(0)
  @Column({ type: DataType.INTEGER })
  aff_situationFamilialeId: number;

  @AllowNull
  @Column({ type: DataType.INTEGER })
  aff_nbrEnfant: number;

  @AllowNull
  @Column({ type: DataType.STRING(25) })
  aff_liaison: string;

  @AllowNull
  @Column({ type: DataType.STRING(25) })
  aff_typeTrav: string;

  @AllowNull
  @Column({ type: DataType.STRING(25) })
  aff_ville: string;

  @AllowNull
  @Column({ type: DataType.STRING(25) })
  aff_codePost: string;

  @AllowNull
  @Column({ type: DataType.STRING(50) })
  aff_fonction: string;

  @AllowNull
  @Column({ type: DataType.STRING(50) })
  aff_classification: string;

  @AllowNull
  @Column({ type: DataType.STRING(50) })
  aff_cnapsNum: string;

  @AllowNull
  @Column({ type: DataType.STRING(160) })
  aff_photo: string;

  @AllowNull
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

  @AllowNull
  @Column({ type: DataType.DATE })
  affEmbauche_embauchedate: Date;

  @AllowNull
  @Column({ type: DataType.DATE })
  affEmbauche_debaucheDate: Date;

  @AllowNull
  @Column({ type: DataType.DECIMAL(10, 2) })
  affEmbauche_salaireBrut: number;

  @AllowNull
  @Column({ type: DataType.STRING(250) })
  affEmbauche_fonction: string;

  @AllowNull
  @Column({ type: DataType.STRING(250) })
  affEmbauche_classification: string;

  @AllowNull
  @Column({ type: DataType.TINYINT })
  affEmbauche_ostieplus: number;

  @AllowNull
  @Column({ type: DataType.STRING(50) })
  affEmbauche_matricule: string;

  @AllowNull
  @Column({ type: DataType.STRING(250) })
  affEmbauche_type: string;

  @AllowNull
  @Column({ type: DataType.DATE })
  affEmbauche_debaucheDateSaisie: Date;

  @AllowNull
  @Column({ type: DataType.INTEGER })
  affEmbauche_debauchePersId: number;

  @AllowNull
  @Column({ type: DataType.INTEGER })
  affHist_adhIdIndex: number;

  @AllowNull
  @Column({ type: DataType.INTEGER })
  affHist_adhId: number;

  @AllowNull
  @Column({ type: DataType.STRING(11) })
  affHist_adhNum: string;

  @AllowNull
  @Column({ type: DataType.TINYINT })
  affHist_situationId: number;

  @AllowNull
  @Column({ type: DataType.TINYINT })
  affHist_affiliationTypeId: number;

  @AllowNull
  @Column({ type: DataType.TEXT })
  affHist_motif: string;
  @AllowNull
  @Column({ type: DataType.DATE })
  affHist_date: Date;

  @AllowNull
  @Column({ type: DataType.DATE })
  affHist_dateSaisie: Date;

  @AllowNull
  @Column({ type: DataType.INTEGER })
  affHist_persId: number;

  @AllowNull
  @Column({ type: DataType.TINYINT })
  affHist_certificatScolaire: number;

  @AllowNull
  @Column({ type: DataType.DATE })
  affHist_certificatScolaireDate: Date |'0000-00-00' ;

  @AllowNull
  @Column({ type: DataType.STRING(250) })
  affHist_obsCba: string;

  @AllowNull
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

