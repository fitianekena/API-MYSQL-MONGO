import { Table, Model, Column, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'ecriture',
  timestamps: false, // Si vous ne souhaitez pas utiliser les timestamps
})
export class Ecriture extends Model {
  @PrimaryKey
  @Column({ type: DataType.DOUBLE })
  NOECR : number;

  @Column({ type: DataType.DOUBLE })
  NO_RD: number;

  @Column({ type: DataType.DOUBLE })
  NO_RP: number;

  @Column({ type: DataType.STRING })
  CODE_ADH: string;

  @Column({ type: DataType.STRING })
  COMPTE: string;

  @Column({ type: DataType.STRING })
  CONTREPART: string;

  @Column({ type: DataType.STRING })
  TYPEECR: string;

  @Column({ type: DataType.DATE})
  DATECR: Date | '00000-00-00';

  @Column({ type: DataType.DOUBLE })
  DEBIT: number;

  @Column({ type: DataType.DOUBLE })
  CREDIT: number;

  @Column({ type: DataType.STRING })
  LIBELLE: string;

  @Column({ type: DataType.DATE })
  ECHEANCE: Date | '0000-00-00';

  @Column({ type: DataType.STRING })
  LETTRE: string;

  @Column({ type: DataType.DOUBLE })
  LIGNEECR: number;

  @Column({ type: DataType.SMALLINT })
  MOIS: number;

  @Column({ type: DataType.INTEGER })
  ANNEE: number;

  @Column({ type: DataType.SMALLINT })
  TRIMESTRE: number;

  @Column({ type: DataType.STRING })
  REF_PIECE: string;

}
