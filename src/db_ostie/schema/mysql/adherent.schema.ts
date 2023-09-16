// adherent.model.ts
import { Table, Model, Column, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'adherent',
  timestamps: false, // Si vous ne souhaitez pas utiliser les timestamps
})
export class Adherent extends Model {
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  adh_idIndex: number;

  @Column({ type: DataType.INTEGER })
  adh_id: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  adh_centreId: number | null;

  @Column({ type: DataType.STRING })
  adh_num: string;

  @Column({ type: DataType.STRING, allowNull: true })
  adh_sigle: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  adh_raisonSociale: string | null;

  @Column({ type: DataType.INTEGER, allowNull: true })
  adh_adhTypeId: number | null;

  @Column({ type: DataType.STRING, allowNull: true })
  adh_adresse: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  adh_directeurNom: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  adh_employeurFonc: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  adh_nationalite: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  adh_bp: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  adh_tel: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  adh_fax: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  adh_numStat: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  adh_nif: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  adh_cnaps: string | null;

  @Column({ type: DataType.INTEGER, allowNull: true })
  adh_activiteTypeId: number | null;

  @Column({ type: DataType.STRING, allowNull: true })
  adh_activitePpale: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  adh_activiteSecdr: string | null;

  @Column({ type: DataType.DATE, allowNull: true })
  adh_activiteDateDeb: Date | null | '0000-00-00';

  @Column({ type: DataType.STRING, allowNull: true })
  adh_travailLieu: string | null;

  @Column({ type: DataType.INTEGER, allowNull: true })
  adh_travailleurNbr: number | null;

  @Column({ type: DataType.INTEGER, allowNull: true })
  adh_hommeNbr: number | null;

  @Column({ type: DataType.INTEGER, allowNull: true })
  adh_femmeNbr: number | null;

  @Column({ type: DataType.INTEGER, allowNull: true })
  adh_familleMbrNbr: number | null;

  @Column({ type: DataType.DATE, allowNull: true })
  adh_adhesionDateDeb: Date | null | '0000-00-00';

  @Column({ type: DataType.DOUBLE, allowNull: true })
  adh_totalSalaire: number | null;

  @Column({ type: DataType.DOUBLE, allowNull: true })
  adh_adhesionDroit: number | null;

  @Column({ type: DataType.DOUBLE, allowNull: true })
  adh_cotisAnnuelle: number | null;

  @Column({ type: DataType.INTEGER, allowNull: true })
  adh_centreSoinId: number | null;

  @Column({ type: DataType.INTEGER, allowNull: true })
  adh_centreVisiteId: number | null;

  @Column({ type: DataType.INTEGER })
  adh_persId: number;

  @Column({ type: DataType.STRING })
  adh_persNom: string;

  @Column({ type: DataType.STRING })
  adh_persMat: string;

  @Column({ type: DataType.DATE })
  adh_dateSaisie: Date;

  @Column({ type: DataType.STRING })
  adh_email: string;

  @Column({ type: DataType.TINYINT })
  adh_persCentreId: number;

  @Column({ type: DataType.TINYINT })
  adh_persServiceId: number;

  @Column({ type: DataType.STRING })
  adh_persIpAdress: string;

  @Column({ type: DataType.TINYINT, allowNull: true })
  adhSitHist_situationId: number | null;

  @Column({ type: DataType.DATE, allowNull: true })
  adhSitHist_date: Date | null | '0000-00-00';

  @Column({ type: DataType.TEXT, allowNull: true })
  adhSitHist_motif: string | null;

  @Column({ type: DataType.DATE, allowNull: true })
  adhSitHist_dateSaisie: Date | null | '0000-00-00';

  @Column({ type: DataType.INTEGER, allowNull: true })
  adhSitHist_persId: number | null;

  @Column({ type: DataType.TEXT })
  adhSitHist_saisieRef: string;

  @Column({ type: DataType.INTEGER })
  adh_affValidation: number;
}
