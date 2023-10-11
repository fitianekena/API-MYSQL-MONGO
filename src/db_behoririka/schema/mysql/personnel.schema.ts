import { Model, Column, Table, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ChampMere } from 'src/decorators/champ-mere/champ-mere.decorator';

@Table({ tableName: 'personnel', timestamps: false })
export class Personnel extends Model {
  @PrimaryKey
  @ChampMere(Personnel.name,'id','STRING','persnl_id')
  @Column({ type: DataType.BIGINT.UNSIGNED })
  persnl_id: number;

  
  @Column({ type: DataType.STRING(25), defaultValue: 0 })
  persnl_centreServiceId: string;

  @ChampMere(Personnel.name,'matricule','STRING','persnl_matricule')
  @Column({ type: DataType.STRING })
  persnl_matricule: string | null;

  @Column({ type: DataType.STRING, defaultValue: "" })
  persnl_codeOnm: string;
  @ChampMere(Personnel.name,'nom','STRING','persnl_nom')
  @Column({ type: DataType.STRING, defaultValue: 0 })
  persnl_nom: string;

  @ChampMere(Personnel.name,'prenom','STRING','persnl_prenom')
  @Column({ type: DataType.STRING })
  persnl_prenom: string;

  @ChampMere(Personnel.name,'sexe','STRING','prsnl_sexe')
  @Column({ type: DataType.STRING })
  prsnl_sexe: string;

  @Column({ type: DataType.INTEGER })
  persnl_fonctionId: number;

  @Column({ type: DataType.INTEGER })
  prsnlcp_id: number;
  @ChampMere(Personnel.name,'tel','STRING','persnl_tel')
  @Column({ type: DataType.STRING(160) })
  persnl_tel: string;

  @ChampMere(Personnel.name,'email','STRING','persnl_email')
  @Column({ type: DataType.STRING(160) })
  persnl_email: string;

  @ChampMere(Personnel.name,'adresse','STRING','persnl_adresse')
  @Column({ type: DataType.STRING(255)})
  persnl_adresse: string;

  @Column({ type: DataType.DATE })
  persnl_embaucheDate: Date;

  @Column({ type: DataType.INTEGER })
  persnl_presence: number;

  @Column({ type: DataType.DATE })
  persnl_presenceDate: Date;

  @Column({ type: DataType.STRING(50) })
  persnl_login: string;

  @Column({ type: DataType.DATE })
  persnl_passwordDateDeb: Date;

  @Column({ type: DataType.DATE })
  persnl_passwordDateFin: Date;

  @Column({ type: DataType.STRING(250) })
  persnl_passwordObs: string;

  @Column({ type: DataType.STRING(55) })
  persnl_etatId: string;

  @Column({ type: DataType.INTEGER, defaultValue: 34 })
  persnl_pharmacieCompId: number;

  @Column({ type: DataType.INTEGER })
  persnl_porte: number;

  @Column({ type: DataType.INTEGER })
  persnl_imptype: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  persnl_ipId: number;

  @Column({ type: DataType.STRING(25) })
  persnl_ipAdress: string;

  @Column({ type: DataType.INTEGER })
  persnl_centreId: number;

  @Column({ type: DataType.INTEGER })
  persnl_serviceId: number;

  
}


