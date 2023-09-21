import { Table, Model, Column, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'adherent',
  timestamps: false, // Si vous ne souhaitez pas utiliser les timestamps
})
export class Adherent extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  CODE_ADH : string;

  @Column({ type: DataType.STRING })
  RAISON_SOC: string;

  @Column({ type: DataType.STRING })
  CODE_CEN: string;

  @Column({ type: DataType.STRING })
  TEL : string;

  @Column({ type: DataType.DATE })
  DATE_ADH: Date | '0000-00-00';

  @Column({ type: DataType.STRING })
  STATUT: string;

  @Column({ type: DataType.INTEGER })
  EFFECTIF : number;

  @Column({ type: DataType.STRING })
  CODE_ACT: string;

  @Column({ type: DataType.DATE })
  DATE_ACT: Date | '0000-00-00';

  @Column({ type: DataType.STRING })
  CODE_ACT2 : string;

  @Column({ type: DataType.DATE })
  DATE_CREAT: Date | '0000-00-00';

  @Column({ type: DataType.DATE })
  DATE_ETAT: Date | '0000-00-00';

  @Column({ type: DataType.STRING })
  MOTIF_ETAT: string;

  @Column({ type: DataType.STRING })
  NOCNAPS : string;

  @Column({ type: DataType.STRING })
  ADRESSE: string;

  @Column({ type: DataType.INTEGER })
  EFFEC_M: number;

  @Column({ type: DataType.INTEGER })
  EFFEC_F : number;

  @Column({ type: DataType.INTEGER })
  EFFEC_MF: number;

  @Column({ type: DataType.STRING })
  SIGLE: string;

  @Column({ type: DataType.STRING })
  BP : string;

  @Column({ type: DataType.STRING })
  FAX: string;

  @Column({ type: DataType.STRING })
  NIF: string;

  @Column({ type: DataType.STRING })
  RESPONSABL : string;

  @Column({ type: DataType.STRING })
  TYPE_ADH: string;

  @Column({ type: DataType.STRING })
  CODE_GROUP: string;

  @Column({ type: DataType.DOUBLE })
  MASSE_SAL : number;

  @Column({ type: DataType.DOUBLE })
  DIA: number;

  @Column({ type: DataType.STRING })
  STATIST: string;

  @Column({ type: DataType.STRING })
  LIEU_DE_TR : string;

  @Column({ type: DataType.STRING })
  ADR_ACTIV: string;

  @Column({ type: DataType.STRING })
  NATIONALIT: string;

  @Column({ type: DataType.DOUBLE })
  VERSEMENT : number;

  @Column({ type: DataType.DOUBLE })
  DEBIT: number;

  @Column({ type: DataType.DOUBLE })
  CREDIT: number;

  @Column({ type: DataType.STRING })
  TITRE : string;

  @Column({ type: DataType.STRING })
  VILLE: string;

  @Column({ type: DataType.SMALLINT })
  CODE_POST: number;

  @Column({ type: DataType.STRING })
  EMAIL : string;

  @Column({ type: DataType.INTEGER })
  EFFECTIF_ANTECEDENT: number;
  
}
