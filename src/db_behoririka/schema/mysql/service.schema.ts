import { Model, Column, Table, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ChampMere } from 'src/decorators/champ-mere/champ-mere.decorator';

@Table({ tableName: 'service', timestamps: false })
export class Service extends Model {
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  service_id: number;

  @ChampMere(Service.name, 'code', 'STRING', 'service_code')
  @Column({ type: DataType.STRING(60) })
  service_code: string ;

  @ChampMere(Service.name, 'nom', 'STRING', 'service_nom')
  @Column({ type: DataType.STRING(160) })
  service_nom: string | null;

  @Column({ type: DataType.INTEGER })
  service_type: number;

  @ChampMere(Service.name, 'specialiste', 'STRING', 'service_specialiste')
  @Column({ type: DataType.INTEGER })
  service_specialiste: number;

  @ChampMere(Service.name, 'barcode', 'STRING', 'service_barcode')
  @Column({ type: DataType.INTEGER })
  service_barcode: number;
  

}


