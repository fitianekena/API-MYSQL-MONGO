import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({
  tableName: 'vaccinCovid',
  timestamps: false, // Si vous ne souhaitez pas de colonnes de timestamp
})
export class VaccinCovid extends Model<VaccinCovid> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  vaccinCovid_id: number;

  @Column({ type: DataType.BIGINT })
  vaccinCovid_affId: number;

  @Column({ type: DataType.STRING })
  vaccinCovid_nom: string;

  @Column({ type: DataType.DATE })
  vaccinCovid_date: Date;

  @Column({ type: DataType.STRING })
  vaccinCovid_persMat: string;

  @Column({ type: DataType.INTEGER })
  vaccinCovid_persCentreId: number;

  @Column({ type: DataType.STRING })
  vaccinCovid_persIp: string;

  
}
