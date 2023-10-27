import {  DataTypes } from 'sequelize';
import { Column, PrimaryKey, Table,Model } from 'sequelize-typescript';
import { ChampMere } from 'src/decorators/champ-mere/champ-mere.decorator';


@Table({
    tableName: 'ordonnance',
    timestamps: false,
    collate: 'utf8_unicode_ci',
  })
export class Ordonnance extends Model {
  @PrimaryKey
  @Column({ type: DataTypes.INTEGER })
  ordonnance_idIndex: number;

  @ChampMere(Ordonnance.name,'ordonnance_id','STRING','ordonnance_id')
  @Column({ type: DataTypes.STRING(50), allowNull: false })
  ordonnance_id: string;

  @ChampMere(Ordonnance.name,'num','STRING','ordonnance_num')
  @Column({ type: DataTypes.STRING(50), defaultValue: null })
  ordonnance_num: string | null;

  @Column({ type: DataTypes.STRING(50), allowNull: false})
  @ChampMere(Ordonnance.name, 'ordonnance_numTmp', 'STRING', 'ordonnance_numTmp')
  ordonnance_numTmp: string;

  @Column({ type: DataTypes.DATE, defaultValue: null })
  @ChampMere(Ordonnance.name, 'date', 'DATE', 'ordonnance_date')
  ordonnance_date: Date | null;

  @Column({ type: DataTypes.BIGINT,defaultValue: null })
  ordonnance_affId: number | null;

  @Column({ type: DataTypes.BIGINT({ length: 20 }), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_affIdLast', 'STRING', 'ordonnance_affIdLast')
  ordonnance_affIdLast: number;

  @Column({ type: DataTypes.FLOAT, allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_ages', 'STRING', 'ordonnance_ages')
  ordonnance_ages: number;

  @Column({ type: DataTypes.INTEGER({ length: 4 }), allowNull: false })
  @ChampMere(Ordonnance.name, 'traceAgeId', 'STRING', 'ordonnance_traceAgeId')
  ordonnance_traceAgeId: number;

  @Column({ type: DataTypes.STRING(10), allowNull: false })
  @ChampMere(Ordonnance.name, 'sexe', 'STRING', 'ordonnance_sexe')
  ordonnance_sexe: string;

  @Column({ type: DataTypes.INTEGER({ length: 11 }), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_adhIdIndex', 'STRING', 'ordonnance_adhIdIndex')
  ordonnance_adhIdIndex: number;

  @Column({ type: DataTypes.STRING(11), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_adhId', 'STRING', 'ordonnance_adhId')
  ordonnance_adhId: string;

  @Column({ type: DataTypes.STRING(11), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_adhNum', 'STRING', 'ordonnance_adhNum')
  ordonnance_adhNum: string;

  @Column({ type: DataTypes.TINYINT({ length: 4 }), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_affType', 'STRING', 'ordonnance_affType')
  ordonnance_affType: number;

  @Column({ type: DataTypes.INTEGER, defaultValue: null })
  ordonnance_centreId: number | null;

  @Column({ type: DataTypes.INTEGER, defaultValue: null })
  @ChampMere(Ordonnance.name, 'ordonnance_serviceId', 'STRING', 'ordonnance_serviceId')
  ordonnance_serviceId: number | null;

  @Column({ type: DataTypes.INTEGER, defaultValue: null })
  @ChampMere(Ordonnance.name, 'ordonnance_persnlMedecinId', 'STRING', 'ordonnance_persnlMedecinId')
  ordonnance_persnlMedecinId: number | null;

  @Column({ type: DataTypes.TEXT, allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_persnlMedecinObs', 'STRING', 'ordonnance_persnlMedecinObs')
  ordonnance_persnlMedecinObs: string;

  @Column({ type: DataTypes.TEXT, allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_persnlMedecinAlerg', 'STRING', 'ordonnance_persnlMedecinAlerg')
  ordonnance_persnlMedecinAlerg: string;

  @Column({ type: DataTypes.TEXT, defaultValue: null })
  @ChampMere(Ordonnance.name, 'ordonnance_persnlMedecinAvis', 'STRING', 'ordonnance_persnlMedecinAvis')
  ordonnance_persnlMedecinAvis: string | null;

  @Column({ type: DataTypes.INTEGER, defaultValue: null })
  @ChampMere(Ordonnance.name, 'ordonnance_persnlSpecialisteId', 'STRING', 'ordonnance_persnlSpecialisteId')
  ordonnance_persnlSpecialisteId: number | null;

  @Column({ type: DataTypes.STRING(50), defaultValue: null })
  @ChampMere(Ordonnance.name, 'ordonnance_reposDuree', 'STRING', 'ordonnance_reposDuree')
  ordonnance_reposDuree: string | null;

  @Column({ type: DataTypes.STRING(50), allowNull: false })
  @ChampMere(Ordonnance.name, 'reposValid', 'STRING', 'ordonnance_reposValide')
  ordonnance_reposValide: string;

  @Column({ type: DataTypes.STRING(50), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_reposAMaternel', 'STRING', 'ordonnance_reposAMaternel')
  ordonnance_reposAMaternel: string;

  @Column({ type: DataTypes.STRING(50), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_reposAT', 'STRING', 'ordonnance_reposAT')
  ordonnance_reposAT: string;

  @Column({ type: DataTypes.STRING(250), allowNull: false })
  @ChampMere(Ordonnance.name, 'referer', 'STRING', 'ordonnance_referer')
  ordonnance_referer: string;

  @Column({ type: DataTypes.STRING(250), allowNull: false })
  @ChampMere(Ordonnance.name, 'arevoir', 'STRING', 'ordonnance_arevoir')
  ordonnance_arevoir: string;

  @Column({ type: DataTypes.FLOAT, defaultValue: null })
  @ChampMere(Ordonnance.name, 'affTemperature', 'STRING', 'ordonnance_affTemperature')
  ordonnance_affTemperature: number | null;

  @Column({ type: DataTypes.FLOAT, defaultValue: null })
  @ChampMere(Ordonnance.name, 'affPoids', 'STRING', 'ordonnance_affPoids')
  ordonnance_affPoids: number | null;

  @Column({ type: DataTypes.STRING(50), defaultValue: null })
  @ChampMere(Ordonnance.name, 'ordonnance_affTADroite', 'STRING', 'ordonnance_affTADroite')
  ordonnance_affTADroite: string | null;

  @Column({ type: DataTypes.STRING(50), defaultValue: null })
  @ChampMere(Ordonnance.name, 'ordonnance_affTAGauche', 'STRING', 'ordonnance_affTAGauche')
  ordonnance_affTAGauche: string | null;

  @Column({ type: DataTypes.TINYINT({ length: 1 }), defaultValue: null })
  @ChampMere(Ordonnance.name, 'ordonnance_type', 'STRING', 'ordonnance_type')
  ordonnance_type: number | null;

  @Column({ type: DataTypes.TINYINT({ length: 1 }), defaultValue: null })
  @ChampMere(Ordonnance.name, 'accidentTravail', 'STRING', 'ordonnance_accidentTravail')
  ordonnance_accidentTravail: number | null;

  @Column({ type: DataTypes.TINYINT({ length: 1 }), allowNull: false, defaultValue: '0' })
  @ChampMere(Ordonnance.name, 'soinAFaire', 'STRING', 'ordonnance_soinAFaire')
  ordonnance_soinAFaire: number;

  @Column({ type: DataTypes.STRING(10), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_hospital', 'STRING', 'ordonnance_hospital')
  ordonnance_hospital: string;

  @Column({ type: DataTypes.STRING(10), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_servicespecialiste', 'STRING', 'ordonnance_servicespecialiste')
  ordonnance_servicespecialiste: string;

  @Column({ type: DataTypes.STRING(10), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_consultExt', 'STRING', 'ordonnance_consultExt')
  ordonnance_consultExt: string;

  @Column({ type: DataTypes.TINYINT({ length: 4 }), allowNull: false, defaultValue: '7', comment: 'prescrit(med), prepare(pcie1), livre(pcie2)' })
  @ChampMere(Ordonnance.name, 'ordonnance_vu', 'STRING', 'ordonnance_vu')
  ordonnance_vu: number;

  @Column({ type: DataTypes.STRING(255), defaultValue: null })
  @ChampMere(Ordonnance.name, 'ordonnance_maladieId', 'STRING', 'ordonnance_maladieId')
  ordonnance_maladieId: string | null;

  @Column({ type: DataTypes.STRING(250), allowNull: false })
  @ChampMere(Ordonnance.name, 'maladieCode', 'STRING', 'ordonnance_maladieCode')
  ordonnance_maladieCode: string;

  @Column({ type: DataTypes.TINYINT({ length: 4 }), allowNull: false, defaultValue: '34' })
  @ChampMere(Ordonnance.name, 'ordonnance_compartimentId', 'STRING', 'ordonnance_compartimentId')
  ordonnance_compartimentId: number;

  @Column({ type: DataTypes.INTEGER({ length: 11 }), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_pharmacieId', 'STRING', 'ordonnance_pharmacieId')
  ordonnance_pharmacieId: number;

  @Column({ type: DataTypes.TINYINT({ length: 4 }), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_maladieCodeSimCle', 'STRING', 'ordonnance_maladieCodeSimCle')
  ordonnance_maladieCodeSimCle: number;

  @Column({ type: DataTypes.TINYINT({ length: 4 }), allowNull: false })
  @ChampMere(Ordonnance.name,'porte','STRING','ordonnance_porte')
  ordonnance_porte: number;

  @Column({ type: DataTypes.INTEGER({ length: 4 }), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_arevoirEtat', 'STRING', 'ordonnance_arevoirEtat')
  ordonnance_arevoirEtat: number;

  @Column({ type: DataTypes.TINYINT({ length: 4 }), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_impEtat', 'STRING', 'ordonnance_impEtat')
  ordonnance_impEtat: number;

  @Column({ type: DataTypes.TINYINT({ length: 1 }), allowNull: false })
  @ChampMere(Ordonnance.name, 'validerPharmacie', 'STRING', 'ordonnance_validerPharmacie')
  ordonnance_validerPharmacie: number;

  @Column({ type: DataTypes.INTEGER({ length: 4 }), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_ajouter', 'STRING', 'ordonnance_ajouter')
  ordonnance_ajouter: number;

  @Column({ type: DataTypes.TIME, allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_heureMedcin', 'STRING', 'ordonnance_heureMedcin')
  ordonnance_heureMedcin: string;

  @Column({ type: DataTypes.TIME, allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_heureDdm', 'STRING', 'ordonnance_heureDdm')
  ordonnance_heureDdm: string;

  @Column({ type: DataTypes.STRING(500), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_motifOpation', 'STRING', 'ordonnance_motifOpation')
  ordonnance_motifOpation: string;

  @Column({ type: DataTypes.STRING(50), allowNull: false })
  @ChampMere(Ordonnance.name, 'affEmbauche_matricule', 'STRING', 'affEmbauche_matricule')
  affEmbauche_matricule: string;

  @Column({ type: DataTypes.STRING(50), allowNull: false })
  @ChampMere(Ordonnance.name, 'affType_label', 'STRING', 'affType_label')
  affType_label: string;

  @Column({ type: DataTypes.INTEGER({ length: 11 }), allowNull: false })
  @ChampMere(Ordonnance.name, 'affType_id', 'STRING', 'affType_id')
  affType_id: number;

  @Column({ type: DataTypes.STRING(50), allowNull: false })
  @ChampMere(Ordonnance.name, 'situation_label', 'STRING', 'situation_label')
  situation_label: string;

  @Column({ type: DataTypes.INTEGER({ length: 11 }), allowNull: false })
  @ChampMere(Ordonnance.name, 'situation_id', 'STRING', 'situation_id')
  situation_id: number;

  @Column({ type: DataTypes.STRING(250), allowNull: false })
  @ChampMere(Ordonnance.name, 'aff_nom', 'STRING', 'aff_nom')
  aff_nom: string;

  @Column({ type: DataTypes.STRING(250), allowNull: false })
  @ChampMere(Ordonnance.name, 'aff_prenom', 'STRING', 'aff_prenom')
  aff_prenom: string;

  @Column({ type: DataTypes.DATE, allowNull: false })
  @ChampMere(Ordonnance.name, 'aff_naissDate', 'STRING', 'aff_naissDate')
  aff_naissDate: Date;

  @Column({ type: DataTypes.STRING(10), allowNull: false })
  @ChampMere(Ordonnance.name, 'iAge', 'STRING', 'iAge')
  iAge: string;

  @Column({ type: DataTypes.STRING(50), allowNull: false })
  @ChampMere(Ordonnance.name, 'adh_num', 'STRING', 'adh_num')
  adh_num: string;

  @Column({ type: DataTypes.STRING(250), allowNull: false })
  @ChampMere(Ordonnance.name, 'adh_raisonSociale', 'STRING', 'adh_raisonSociale')
  adh_raisonSociale: string;

  @Column({ type: DataTypes.STRING(250), allowNull: false })
  @ChampMere(Ordonnance.name, 'aff_trav', 'STRING', 'aff_trav')
  aff_trav: string;

  @Column({ type: DataTypes.STRING(50), allowNull: false })
  @ChampMere(Ordonnance.name, 'aff_sexe', 'STRING', 'aff_sexe')
  aff_sexe: string;

  @Column({ type: DataTypes.STRING(250), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_persNom', 'STRING', 'ordonnance_persNom')
  ordonnance_persNom: string;

  @Column({ type: DataTypes.STRING(50), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_persMat', 'STRING', 'ordonnance_persMat')
  ordonnance_persMat: string;

  @Column({ type: DataTypes.STRING(50), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_ipAdress', 'STRING', 'ordonnance_ipAdress')
  ordonnance_ipAdress: string;

  @Column({ type: DataTypes.INTEGER({ length: 11 }), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_facture', 'STRING', 'ordonnance_facture')
  ordonnance_facture: number;

  @Column({ type: DataTypes.STRING(255), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_situationSPO2', 'STRING', 'ordonnance_situationSPO2')
  ordonnance_situationSPO2: string;

  @Column({ type: DataTypes.STRING(255), allowNull: false })
  @ChampMere(Ordonnance.name, 'ordonnance_freqCardiaque', 'STRING', 'ordonnance_freqCardiaque')
  ordonnance_freqCardiaque: string;
}
