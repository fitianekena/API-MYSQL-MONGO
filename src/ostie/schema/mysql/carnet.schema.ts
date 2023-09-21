import { Table, Model, Column, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'carnet',
  timestamps: false, // Si vous ne souhaitez pas utiliser les timestamps
})
export class Carnet extends Model {
  @PrimaryKey
  @Column({ type: DataType.DOUBLE })
  LIGNE : number;

  @Column({ type: DataType.STRING })
  CODE_ADH: string;

  @Column({ type: DataType.INTEGER })
  NO_DEBUT: number;

  @Column({ type: DataType.INTEGER })
  NO_FIN: number;

  @Column({ type: DataType.DATE })
  DATE_LIVR: Date;
  
}
