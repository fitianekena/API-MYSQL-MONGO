import { Table, Model, Column, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'centre',
  timestamps: false, // Si vous ne souhaitez pas utiliser les timestamps
})
export class Centre extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  CODE : number;

  @Column({ type: DataType.STRING })
  DESIGNAT: string;

  @Column({ type: DataType.STRING })
  MED_CHEF: string;

  @Column({ type: DataType.STRING })
  CBA: string;

  @Column({ type: DataType.STRING })
  PHARMAC: string;

  @Column({ type: DataType.STRING })
  ADRESSE: string;

  @Column({ type: DataType.STRING })
  XTYPE: string;
  
}
