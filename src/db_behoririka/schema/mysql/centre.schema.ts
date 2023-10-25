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
  @ChampMere(Centre.name,'id','STRING','centre_id')
  @Column({ type: DataType.INTEGER })
  centre_id   : number;

  @ChampMere(Centre.name,'code','STRING','centre_code')
  @Column({ type: DataType.STRING, allowNull: true })
  centre_code: string | null;
  
  @ChampMere(Centre.name,'nom',String,'centre_nom')
  @Column({ type: DataType.STRING, allowNull: true })
  centre_nom: string | null;

  @ChampMere(Centre.name,'localisation',String,'centre_localisation')
  @Column({ type: DataType.STRING, allowNull: true })
  centre_localisation: string | null;

  @ChampMere(Centre.name,'tel',String,'centre_tel')
  @Column({ type: DataType.STRING, allowNull: true })
  centre_tel: string | null;

  @ChampMere(Centre.name,'type',String,'centre_type')
  @Column({ type: DataType.STRING, allowNull: true })
  centre_type : string | null;
  @ChampMere(Centre.name,'perslRespId',String,'centre_perslRespId')
  @Column({ type: DataType.INTEGER, allowNull: true})
  centre_perslRespId : number | null;
  @ChampMere(Centre.name,'prsnlCBA',String,'centre_prsnlCBA')
  @Column({ type: DataType.NUMBER, allowNull: true })
  centre_prsnlCBA : number | null;
  @ChampMere(Centre.name,'prsnlPharmacie',String,'centre_prsnlPharmacie')
  @Column({ type: DataType.NUMBER, allowNull: true})
  centre_prsnlPharmacie : number | null;
  
  @Column({ type: DataType.DATE, allowNull: true })
  centre_creationDate : Date | null | '0000-00-00';
  @ChampMere(Centre.name,'etat',String,'centre_etatId')
  @Column({ type: DataType.NUMBER })
  centre_etatId : number ;
  @ChampMere(Centre.name,'ilaharana',String,'centre_ilaharana')
  @Column({ type: DataType.NUMBER })
  centre_ilaharana: number;
  @ChampMere(Centre.name,'database',String,'centre_database')
  @Column({ type: DataType.STRING })
  centre_database: string;

  
}
