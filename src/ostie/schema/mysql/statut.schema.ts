import { Table, Model, Column, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'statut',
  timestamps: false, // Si vous ne souhaitez pas utiliser les timestamps
})
export class Statut extends Model {
  @PrimaryKey
  @Column({ type: DataType.DOUBLE })
  RANG : number;

  @Column({ type: DataType.STRING })
  CODE_ADH: string;

  @Column({ type: DataType.DATE })
  DATE_STATU: Date | '0000-00-00';

  @Column({ type: DataType.STRING })
  TYPE_STATU: string;

  @Column({ type: DataType.STRING })
  NOTE_SERV: string;

  @Column({ type: DataType.DATE })
  DATE_CREAT: Date | '0000-00-00';

  @Column({ type: DataType.STRING})
  MOTIF: string;

  @Column({ type: DataType.SMALLINT })
  VALIDAT: number;

  @Column({ type: DataType.SMALLINT })
  MOIS: number;

  @Column({ type: DataType.INTEGER })
  ANNEE: number;

  @Column({ type: DataType.STRING })
  POSTE: string;


}
