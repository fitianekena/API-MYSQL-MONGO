import { Table, Model, Column, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'det_regl',
  timestamps: false, // Si vous ne souhaitez pas utiliser les timestamps
})
export class DetRegl extends Model {
  @PrimaryKey
  @Column({ type: DataType.DOUBLE })
  LIGNE : number;

  @Column({ type: DataType.DOUBLE })
  NO_RP: number;

  @Column({ type: DataType.DOUBLE })
  NO_RD: number;

  @Column({ type: DataType.STRING })
  CODE_ADH: string;

  @Column({ type: DataType.DOUBLE })
  MONTANT: number;

  @Column({ type: DataType.STRING })
  LIBELLE: string;

  @Column({ type: DataType.DOUBLE })
  LIGNEECR: number;

  @Column({ type: DataType.SMALLINT })
  VALID: number;

  @Column({ type: DataType.SMALLINT })
  COMPTAB: number;

  @Column({ type: DataType.DATE })
  DATE_PAIE: Date | '0000-00-00';

  @Column({ type: DataType.SMALLINT })
  MOIS: number;

  @Column({ type: DataType.INTEGER })
  ANNEE: number;

  @Column({ type: DataType.INTEGER })
  NOECH: number;

  @Column({ type: DataType.DATE })
  DATE_CREATION: Date | '0000-00-00';
  
}
