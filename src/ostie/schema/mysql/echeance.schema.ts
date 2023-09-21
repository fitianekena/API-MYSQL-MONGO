import { Table, Model, Column, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'echeance',
  timestamps: false, // Si vous ne souhaitez pas utiliser les timestamps
})
export class Echeance extends Model {
  @PrimaryKey
  @Column({ type: DataType.DOUBLE })
  LIGNE : number;

  @Column({ type: DataType.DOUBLE })
  NO_RD: number;

  @Column({ type: DataType.DATE })
  DATE_ECH: Date | '0000-00-00';

  @Column({ type: DataType.DOUBLE })
  MONT_ECH: number;

  @Column({ type: DataType.DOUBLE })
  MONT_PAYE: number;

  @Column({ type: DataType.STRING })
  MODE_PAIE: string;

  @Column({ type: DataType.STRING })
  CODE_ADH: string;

  @Column({ type: DataType.INTEGER })
  RANG: number;

  @Column({ type: DataType. INTEGER })
  NBRRAP: number;

  
}
