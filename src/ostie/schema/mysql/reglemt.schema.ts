import { Table, Model, Column, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'reglemt',
  timestamps: false, // Si vous ne souhaitez pas utiliser les timestamps
})
export class Reglemt extends Model {
  @PrimaryKey
  @Column({ type: DataType.DOUBLE, primaryKey: true })
  NO_RP: number;

  @Column({ type: DataType.DATE, primaryKey: true })
  DATE_PAIE: Date;

  @Column({ type: DataType.STRING(15) })
  BANQUE: string;

  @Column({ type: DataType.STRING(30) })
  CHEQUE: string;

  @Column({ type: DataType.STRING(6) })
  CODE_ADH: string;

  @Column({ type: DataType.STRING(1) })
  MODEPAIM: string;

  @Column({ type: DataType.DOUBLE })
  MONTANT: number;

  @Column({ type: DataType.STRING(10) })
  POSTE: string;

  @Column({ type: DataType.DOUBLE })
  NOECR: number;

  @Column({ type: DataType.STRING(32) })
  LIBELLE: string;

  @Column({ type: DataType.DATE })
  DATE_ECH: Date;

  @Column({ type: DataType.DATE })
  DATE_REF: Date;

  @Column({ type: DataType.DATE })
  DATE_CREATION: Date;

  @Column({ type: DataType.INTEGER })
  ANNUL: number;

  @Column({ type: DataType.INTEGER })
  NOCENTRE: number;

  @Column({ type: DataType.INTEGER })
  NOPOSTE: number;

  @Column({ type: DataType.INTEGER })
  RANG: number;

  @Column({ type: DataType.INTEGER })
  MOIS: number;

  @Column({ type: DataType.INTEGER })
  ANNEE: number;

  @Column({ type: DataType.STRING(10) })
  abcdef: string;

}
