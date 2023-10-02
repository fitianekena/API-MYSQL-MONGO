import { Table, Model, Column, DataType, PrimaryKey } from 'sequelize-typescript';
import { ChampMere } from 'src/decorators/champ-mere/champ-mere.decorator';
import { Centre as CentreMongodb } from '../mongodb/centre.schema';
import { Fonction as FonctionMongodb, FonctionSchema as FonctionMongodbSchema} from '../mongodb/fonction.schema';

import { ForeignKey } from 'src/decorators/champ-mere/foreign-key.decorator';
import { Affilie } from 'src/db_ostie/schema/mysql/affilie.schema';
import { DnsAffilie } from 'src/test-mongo/schema/dns-affilie.schema';
@Table({
  tableName: 'centre',
  timestamps: false, // Si vous ne souhaitez pas utiliser les timestamps
})
export class Centre extends Model {
  
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  centre_id   : number;

  @ChampMere(DnsAffilie.name,'centre-code','STRING','centre_code')
  @Column({ type: DataType.STRING, allowNull: true })
  centre_code: string | null;
  
  @ChampMere(DnsAffilie.name,'centre-localisation',String,'centre_localisation')
  @ChampMere(DnsAffilie.name,'centre-nom',String,'centre_nom')
  @Column({ type: DataType.STRING, allowNull: true })
  centre_nom: string | null;

  @ChampMere(DnsAffilie.name,'centre-localisation',String,'centre_localisation')
  @Column({ type: DataType.STRING, allowNull: true })
  centre_localisation: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  centre_tel: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  centre_type : string | null;

  @Column({ type: DataType.INTEGER, allowNull: true})
  centre_perslRespId : number | null;

  @Column({ type: DataType.NUMBER, allowNull: true })
  centre_prsnlCBA : number | null;

  @Column({ type: DataType.NUMBER, allowNull: true})
  centre_prsnlPharmacie : number | null;

  @Column({ type: DataType.DATE, allowNull: true })
  centre_creationDate : Date | null | '0000-00-00';

  @Column({ type: DataType.NUMBER })
  centre_etatId : number ;

  @Column({ type: DataType.NUMBER })
  centre_ilaharana: number;

  @Column({ type: DataType.STRING })
  centre_database: string;

  
}
