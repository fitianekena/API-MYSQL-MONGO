import { Model, Column, Table, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ChampMere } from 'src/decorators/champ-mere/champ-mere.decorator';
import { Centre as CentreMongodb } from '../mongodb/centre.schema';
@Table({ tableName: 'fonction', timestamps: false })
export class Fonction extends Model {
  @PrimaryKey
  @Column({ type: DataType.BIGINT.UNSIGNED })
  fonction_id: number;

  @Column({ type: DataType.STRING(160), allowNull: true })
  fonction_nom: string | null;
  @ChampMere(CentreMongodb as any,'centre-code',String,'centre_code')
  @Column({ type: DataType.STRING(255), allowNull: true })
  fonction_description: string | null;

  
}


