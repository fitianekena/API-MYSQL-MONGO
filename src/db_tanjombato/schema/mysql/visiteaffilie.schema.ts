import { Model, Column, Table, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({ tableName: 'visiteAffilie', timestamps: false })
export class Visiteaffilie extends Model {
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  vsiteAff_id: number;

  @Column({ type: DataType.INTEGER})
  vsiteAff_adhId: number;

  @Column({ type: DataType.STRING(250) })
  vsiteAff_adhNom: string;

  @Column({ type: DataType.INTEGER })
  vsiteAff_dispansaireId: number;

  @Column({ type: DataType.BIGINT})
  vsiteAff_affId: number;

  @Column({ type: DataType.STRING })
  vsiteAff_affNom: string;

  @Column({ type: DataType.STRING })
  vsiteAff_affPrenom: string;

  @Column({ type: DataType.STRING })
  vsiteAff_mat: string;

  @Column({ type: DataType.STRING })
  vsiteAff_sexe: string;

  @Column({ type: DataType.DATE })
  vsiteAff_dateDerVisite: Date | '0000-00-00' ;

  @Column({ type: DataType.DATE })
  vsiteAff_dateRdv: Date | '0000-00-00' ;

  @Column({ type: DataType.TIME })
  vsiteAff_heureRdv: string | '00:00:00' ;

  @Column({ type: DataType.DATE })
  vsiteAff_modifRdv: Date | '0000-00-00' ;

  @Column({ type: DataType.DATE })
  vsiteAff_dateAccReception	: Date | '0000-00-00';

  @Column({ type: DataType.STRING(250) })
  vsiteAff_typeVisite: string;

  @Column({ type: DataType.STRING })
  vsiteAff_horaireTravail: string;

  @Column({ type: DataType.STRING(250) })
  vsiteAff_handicap: string;
  
  @Column({ type: DataType.STRING(250) })
  vsiteAff_invalidite: string;

  @Column({ type: DataType.STRING(250) })
  vsiteAff_grossesse: string;

  @Column({ type: DataType.STRING(250) })
  vsiteAff_allaitement: string;

  @Column({ type: DataType.STRING(250) })
  vsiteAff_moins18ans: string;

  @Column({ type: DataType.STRING(250) })
  vsiteAff_plus60ans: string;

  @Column({ type: DataType.INTEGER })
  vsiteAff_medId: number;

  @Column({ type: DataType.STRING })
  vsiteAff_medNom: string;

  @Column({ type: DataType.DATE })
  vsiteAff_editConv: Date | '0000-00-00';

  @Column({ type: DataType.STRING })
  vsiteAff_lieuDevisite: string;

  @Column({ type: DataType.STRING })
  vsiteAff_accRecpConv: string;

  @Column({ type: DataType.DATE })
  vsiteAff_dateRelance: Date | '0000-00-00';

  @Column({ type: DataType.STRING })
  vsiteAff_accRecpRelance: string;

  @Column({ type: DataType.STRING })
  vsiteAff_motifNonrealise: string;
  
}


