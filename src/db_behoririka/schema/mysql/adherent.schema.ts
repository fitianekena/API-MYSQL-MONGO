import { Table, Model, Column, DataType, PrimaryKey } from 'sequelize-typescript';
import { ChampMere } from 'src/decorators/champ-mere/champ-mere.decorator';

@Table({
  tableName: 'adherent',
  timestamps: false,
  collate: 'utf8_unicode_ci'
})
export class Adherent extends Model<Adherent> {

  @PrimaryKey
  @Column({ type: DataType.BIGINT, field: 'adh_idIndex' })
  adh_idIndex: number;

  @ChampMere(Adherent.name,'code_adherent','STRING','adh_id')
  @Column({ type: DataType.BIGINT, field: 'adh_id' })
  adh_id: number;

  
  @Column({ type: DataType.BIGINT, field: 'adh_centreId', allowNull: true })
  adh_centreId: number | null;

  @Column({ type: DataType.STRING(50), field: 'adh_num' })
  adh_num: string;

  @ChampMere(Adherent.name,'sigle','STRING','adh_sigle')
  @Column({ type: DataType.STRING(50), field: 'adh_sigle', allowNull: true })
  adh_sigle: string | null;

  @ChampMere(Adherent.name,'raison_sociale','STRING','adh_raisonSociale')
  @Column({ type: DataType.STRING(250), field: 'adh_raisonSociale', allowNull: true })
  adh_raisonSociale: string | null;

  @Column({ type: DataType.BIGINT, field: 'adh_adhTypeId', allowNull: true })
  adh_adhTypeId: number | null;

  @ChampMere(Adherent.name,'adresse','STRING','adh_adresse')
  @Column({ type: DataType.STRING(255), field: 'adh_adresse', allowNull: true })
  adh_adresse: string | null;

  @ChampMere(Adherent.name,'directeur_nom','STRING','adh_directeurNom')
  @Column({ type: DataType.STRING(160), field: 'adh_directeurNom', allowNull: true })
  adh_directeurNom: string | null;

  @Column({ type: DataType.STRING(50), field: 'adh_employeurFonc', allowNull: true })
  adh_employeurFonc: string | null;

  @Column({ type: DataType.STRING(50), field: 'adh_nationalite', allowNull: true })
  adh_nationalite: string | null;

  @Column({ type: DataType.STRING(50), field: 'adh_bp', allowNull: true })
  adh_bp: string | null;
  @ChampMere(Adherent.name,'tel','STRING','adh_tel')
  @Column({ type: DataType.STRING(50), field: 'adh_tel', allowNull: true })
  adh_tel: string | null;
  @ChampMere(Adherent.name,'fax','STRING','adh_fax')
  @Column({ type: DataType.STRING(50), field: 'adh_fax', allowNull: true })
  adh_fax: string | null;

  @ChampMere(Adherent.name,'num_stat','STRING','adh_numStat')
  @Column({ type: DataType.STRING(50), field: 'adh_numStat', allowNull: true })
  adh_numStat: string | null;

  @ChampMere(Adherent.name,'nif','STRING','adh_nif')
  @Column({ type: DataType.STRING(50), field: 'adh_nif', allowNull: true })
  adh_nif: string | null;

  @ChampMere(Adherent.name,'cnaps','STRING','adh_cnaps')
  @Column({ type: DataType.STRING(50), field: 'adh_cnaps', allowNull: true })
  adh_cnaps: string | null;

  @Column({ type: DataType.BIGINT, field: 'adh_activiteTypeId', allowNull: true })
  adh_activiteTypeId: number | null;

  @Column({ type: DataType.STRING(50), field: 'adh_activitePpale', allowNull: true })
  adh_activitePpale: string | null;

  @Column({ type: DataType.STRING(50), field: 'adh_activiteSecdr', allowNull: true })
  adh_activiteSecdr: string | null;

  @Column({ type: DataType.DATE, field: 'adh_activiteDateDeb', allowNull: true })
  adh_activiteDateDeb: Date | null;

  @ChampMere(Adherent.name,'travailleur_lieu','STRING','adh_travailLieu')
  @Column({ type: DataType.STRING(160), field: 'adh_travailLieu', allowNull: true })
  adh_travailLieu: string | null;

  @ChampMere(Adherent.name,'travailleur_nombre','STRING','adh_travailleurNbr')
  @Column({ type: DataType.BIGINT, field: 'adh_travailleurNbr', allowNull: true })
  adh_travailleurNbr: number | null;

  @ChampMere(Adherent.name,'homme_nombre','STRING','adh_hommeNbr')
  @Column({ type: DataType.BIGINT, field: 'adh_hommeNbr', allowNull: true })
  adh_hommeNbr: number | null;

  @ChampMere(Adherent.name,'femme_nombre','STRING','adh_femmeNbr')
  @Column({ type: DataType.BIGINT, field: 'adh_femmeNbr', allowNull: true })
  adh_femmeNbr: number | null;

  @ChampMere(Adherent.name,'famille_membre_nombre','STRING','adh_familleMbrNbr')
  @Column({ type: DataType.BIGINT, field: 'adh_familleMbrNbr', allowNull: true })
  adh_familleMbrNbr: number | null;


  @Column({ type: DataType.DATE, field: 'adh_adhesionDateDeb', allowNull: true })
  adh_adhesionDateDeb: Date | null;

  @Column({ type: DataType.DOUBLE, field: 'adh_totalSalaire', allowNull: true })
  adh_totalSalaire: number | null;

  @Column({ type: DataType.DOUBLE, field: 'adh_adhesionDroit', allowNull: true })
  adh_adhesionDroit: number | null;

  @ChampMere(Adherent.name,'cotisation_annuelle','STRING','adh_cotisAnnuelle')
  @Column({ type: DataType.DOUBLE, field: 'adh_cotisAnnuelle', allowNull: true })
  adh_cotisAnnuelle: number | null;

  @Column({ type: DataType.BIGINT, field: 'adh_centreSoinId', allowNull: true })
  adh_centreSoinId: number | null;

  @Column({ type: DataType.BIGINT, field: 'adh_centreVisiteId', allowNull: true })
  adh_centreVisiteId: number | null;

  @Column({ type: DataType.BIGINT, field: 'adh_persId' })
  adh_persId: number;

  @Column({ type: DataType.STRING(250), field: 'adh_persNom' })
  adh_persNom: string;

  @Column({ type: DataType.STRING(50), field: 'adh_persMat' })
  adh_persMat: string;

  @Column({ type: DataType.DATE, field: 'adh_dateSaisie' })
  adh_dateSaisie: Date;

  @ChampMere(Adherent.name,'email','STRING','adh_email')
  @Column({ type: DataType.STRING(255), field: 'adh_email' })
  adh_email: string;

  @Column({ type: DataType.TINYINT, field: 'adh_persCentreId' })
  adh_persCentreId: number;

  @Column({ type: DataType.TINYINT, field: 'adh_persServiceId' })
  adh_persServiceId: number;

  @Column({ type: DataType.STRING(50), field: 'adh_persIpAdress' })
  adh_persIpAdress: string;

  @Column({ type: DataType.TINYINT, field: 'adhSitHist_situationId', allowNull: true })
  adhSitHist_situationId: number | null;

  @Column({ type: DataType.DATE, field: 'adhSitHist_date', allowNull: true })
  adhSitHist_date: Date | null;

  @Column({ type: DataType.TEXT, field: 'adhSitHist_motif', allowNull: true })
  adhSitHist_motif: string | null;

  @Column({ type: DataType.DATE, field: 'adhSitHist_dateSaisie', allowNull: true })
    adhSitHist_dateSaisie: Date | null;

  @Column({ type: DataType.BIGINT, field: 'adhSitHist_persId', allowNull: true })
  adhSitHist_persId: number | null;

  @Column({ type: DataType.TEXT, field: 'adhSitHist_saisieRef' })
  adhSitHist_saisieRef: string;

  @Column({ type: DataType.BIGINT, field: 'adh_affValidation' })
  adh_affValidation: number;
}

