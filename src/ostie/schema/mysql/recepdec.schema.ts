import { Table, Model, Column, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'recepdec',
  timestamps: false, // Si vous ne souhaitez pas utiliser les timestamps
})
export class Recepdec extends Model {
  @PrimaryKey
  @Column({ type: DataType.DOUBLE, primaryKey: true })
  NO_RD: number;

  @Column({ type: DataType.STRING(6), primaryKey: true })
  CODE_ADH: string;

  @Column({ type: DataType.DATE, primaryKey: true })
  DATE_RD: Date;

  @Column({ type: DataType.STRING(5) })
  TYPE_DECL: string;

  @Column({ type: DataType.STRING(32) })
  LIBELLE: string;

  @Column({ type: DataType.SMALLINT })
  ANNEE: number;

  @Column({ type: DataType.SMALLINT })
  TRIMESTRE: number;

  @Column({ type: DataType.SMALLINT })
  EFFECTIF: number;

  @Column({ type: DataType.DOUBLE })
  MASSE_SAL: number;

  @Column({ type: DataType.DOUBLE })
  PART_PATR: number;

  @Column({ type: DataType.DOUBLE })
  PART_TRAV: number;

  @Column({ type: DataType.DOUBLE })
  PENALITE: number;

  @Column({ type: DataType.DOUBLE })
  DECLAREE: number;

  @Column({ type: DataType.DOUBLE })
  TOTAL_PAYE: number;

  @Column({ type: DataType.STRING(15) })
  ACCORD: string;

  @Column({ type: DataType.DATE })
  DATE_ACCOR: Date;

  @Column({ type: DataType.SMALLINT })
  NOMBRE_PAY: number;

  @Column({ type: DataType.STRING(10) })
  POSTE: string;

  @Column({ type: DataType.SMALLINT })
  PEN_APPLIQ: number;

  @Column({ type: DataType.DOUBLE })
  NOECR: number;

  @Column({ type: DataType.DOUBLE })
  LIGNEECR: number;

  @Column({ type: DataType.INTEGER })
  LIGNE: number;

  @Column({ type: DataType.DOUBLE })
  TOTSALDEC: number;

  @Column({ type: DataType.DOUBLE })
  TOTCOTTRAV: number;

  @Column({ type: DataType.DOUBLE })
  TOTCOTPATR: number;

  @Column({ type: DataType.DOUBLE })
  TOTSALCALC: number;

  @Column({ type: DataType.INTEGER })
  MOIS: number;

  @Column({ type: DataType.INTEGER })
  TRIMANNEE: number;

  @Column({ type: DataType.SMALLINT })
  VALID: number;

  @Column({ type: DataType.SMALLINT })
  COMPTAB: number;

  @Column({ type: DataType.DOUBLE })
  COTCALC: number;

  @Column({ type: DataType.DATE })
  DATE_CTRL: Date;

  @Column({ type: DataType.STRING(35) })
  REF_NOTE: string;

  @Column({ type: DataType.DATE })
  DATE_CREATION: Date;  
}
