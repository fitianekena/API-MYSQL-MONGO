import { Table, Model, Column, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'activite',
  timestamps: false, // Si vous ne souhaitez pas utiliser les timestamps
})
export class Activite extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  CODE : string;

  @Column({ type: DataType.STRING })
  DESIGNATIO: string;

  @Column({ type: DataType.STRING })
  CODEGROUP: string;
  
}
