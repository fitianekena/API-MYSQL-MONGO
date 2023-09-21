import { Model, Column, Table, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({ tableName: 'service', timestamps: false })
export class Service extends Model {
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  service_id: number;

  @Column({ type: DataType.STRING(60) })
  service_code: string ;

  @Column({ type: DataType.STRING(160) })
  service_nom: string | null;

  @Column({ type: DataType.INTEGER })
  service_type: number;

  @Column({ type: DataType.INTEGER })
  service_specialiste: number;

  @Column({ type: DataType.INTEGER })
  service_barcode: number;

}


