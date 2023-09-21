import { Table, Model, Column, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'hdec',
  timestamps: false, // Si vous ne souhaitez pas utiliser les timestamps
})
export class Hdec extends Model {
  @PrimaryKey
  @Column({ type: DataType.DOUBLE })
  NO_RD : number;

  @Column({ type: DataType.DATE })
  DATE_RD: Date;

  @Column({ type: DataType.STRING })
  CODE_ADH: string;

  @Column({ type: DataType.STRING })
  LIBELLE: string;

  @Column({ type: DataType.DOUBLE })
  MONTANT: number;

  @Column({ type: DataType.DOUBLE })
  TOTAL_PAYE: number;

  @Column({ type: DataType.STRING })
  POSTE: string;

  @Column({ type: DataType.INTEGER})
  MOIS: number;

  @Column({ type: DataType.INTEGER })
  ANNEE: number;

  @Column({ type: DataType.SMALLINT })
  VALID: number;

  @Column({ type: DataType.SMALLINT })
  COMPTAB: number;

  @Column({ type: DataType.INTEGER })
  RANG: number;

  @Column({ type: DataType.INTEGER })
  NBRRAP: number;

  @Column({ type: DataType.DATE })
  DATE_CREATION: Date | '0000-00-00';

  @Column({ type: DataType.DOUBLE })
  OLD_RD: number;

  @Column({ type: DataType.INTEGER })
  NOCENTRE: number;

  @Column({ type: DataType.INTEGER })
  NOPOSTE: number;

  @Column({ type: DataType.STRING })
  MODEPAIEMENT: string;

}
