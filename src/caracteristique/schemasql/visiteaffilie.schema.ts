import { Model, Column, Table, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ChampMere } from 'src/decorators/champ-mere/champ-mere.decorator';

@Table({ tableName: 'visiteAffilie', timestamps: false })
export class Visiteaffilie extends Model {
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  @ChampMere(Visiteaffilie.name,'vsiteAff_id','STRING','vsiteAff_id')
  vsiteAff_id: number;

  
  @Column({ type: DataType.INTEGER})
  vsiteAff_adhId: number;
  @ChampMere(Visiteaffilie.name,'vsiteAff_adhNom','STRING','vsiteAff_adhNom')
  @Column({ type: DataType.STRING(250) })
  vsiteAff_adhNom: string;

  @ChampMere(Visiteaffilie.name,'vsiteAff_dispansaireId','STRING','vsiteAff_dispansaireId')
  @Column({ type: DataType.INTEGER })
  vsiteAff_dispansaireId: number;

  // @ChampMere(Visiteaffilie.name,'vsiteAff_affId','STRING','vsiteAff_affId')
  @Column({ type: DataType.BIGINT})
  vsiteAff_affId: number;

  @ChampMere(Visiteaffilie.name,'vsiteAff_affNom','STRING','vsiteAff_affNom')
  @Column({ type: DataType.STRING })
  vsiteAff_affNom: string;
  @ChampMere(Visiteaffilie.name,'vsiteAff_affPrenom','STRING','vsiteAff_affPrenom')
  @Column({ type: DataType.STRING })
  vsiteAff_affPrenom: string;

  @ChampMere(Visiteaffilie.name,'vsiteAff_mat','STRING','vsiteAff_mat')
  @Column({ type: DataType.STRING })
  vsiteAff_mat: string;

  @ChampMere(Visiteaffilie.name,'vsiteAff_sexe','STRING','vsiteAff_sexe')
  @Column({ type: DataType.STRING })
  vsiteAff_sexe: string;
  @ChampMere(Visiteaffilie.name,'vsiteAff_dateDerVisite','STRING','vsiteAff_dateDerVisite')
  @Column({ type: DataType.DATE })
  vsiteAff_dateDerVisite: Date | '0000-00-00' ;

  @ChampMere(Visiteaffilie.name,'vsiteAff_dateRdv','STRING','vsiteAff_dateRdv')
  @Column({ type: DataType.DATE })
  vsiteAff_dateRdv: Date | '0000-00-00' ;
  @ChampMere(Visiteaffilie.name,'vsiteAff_heureRdv','STRING','vsiteAff_heureRdv')
  @Column({ type: DataType.TIME })
  vsiteAff_heureRdv: string | '00:00:00' ;
  @ChampMere(Visiteaffilie.name,'vsiteAff_modifRdv','STRING','vsiteAff_modifRdv')
  @Column({ type: DataType.DATE })
  vsiteAff_modifRdv: Date | '0000-00-00' ;

  @ChampMere(Visiteaffilie.name,'vsiteAff_dateAccReception','STRING','vsiteAff_dateAccReception')
  @Column({ type: DataType.DATE })
  vsiteAff_dateAccReception	: Date | '0000-00-00';

  @ChampMere(Visiteaffilie.name,'vsiteAff_typeVisite','STRING','vsiteAff_typeVisite')
  @Column({ type: DataType.STRING(250) })
  vsiteAff_typeVisite: string;
  @ChampMere(Visiteaffilie.name,'vsiteAff_horaireTravail','STRING','vsiteAff_horaireTravail')
  @Column({ type: DataType.STRING })
  vsiteAff_horaireTravail: string;

  @ChampMere(Visiteaffilie.name,'vsiteAff_handicap','STRING','vsiteAff_handicap')
  @Column({ type: DataType.STRING(250) })
  vsiteAff_handicap: string;
  @ChampMere(Visiteaffilie.name,'vsiteAff_invalidite','STRING','vsiteAff_invalidite')
  @Column({ type: DataType.STRING(250) })
  vsiteAff_invalidite: string;
  @ChampMere(Visiteaffilie.name,'vsiteAff_grossesse','STRING','vsiteAff_grossesse')
  @Column({ type: DataType.STRING(250) })
  vsiteAff_grossesse: string;

  @ChampMere(Visiteaffilie.name,'vsiteAff_allaitement','STRING',' vsiteAff_allaitement')
  @Column({ type: DataType.STRING(250) })
  vsiteAff_allaitement: string;

  @ChampMere(Visiteaffilie.name,'vsiteAff_moins18ans','STRING','vsiteAff_moins18ans')
  @Column({ type: DataType.STRING(250) })
  vsiteAff_moins18ans: string;
  @ChampMere(Visiteaffilie.name,'vsiteAff_plus60ans','STRING','vsiteAff_plus60ans')
  @Column({ type: DataType.STRING(250) })
  vsiteAff_plus60ans: string;
  @ChampMere(Visiteaffilie.name,'vsiteAff_medId','STRING','vsiteAff_medId')
  @Column({ type: DataType.INTEGER })
  vsiteAff_medId: number;

  @ChampMere(Visiteaffilie.name,'vsiteAff_medNom','STRING','vsiteAff_medNom')
  @Column({ type: DataType.STRING })
  vsiteAff_medNom: string;

  @ChampMere(Visiteaffilie.name,'vsiteAff_editConv','STRING','vsiteAff_editConv')
  @Column({ type: DataType.DATE })
  vsiteAff_editConv: Date | '0000-00-00';
  @ChampMere(Visiteaffilie.name,'vsiteAff_lieuDevisite','STRING','vsiteAff_lieuDevisite')
  @Column({ type: DataType.STRING })
  vsiteAff_lieuDevisite: string;

  @ChampMere(Visiteaffilie.name,'vsiteAff_accRecpConv','STRING','vsiteAff_accRecpConv')
  @Column({ type: DataType.STRING })
  vsiteAff_accRecpConv: string;
  @ChampMere(Visiteaffilie.name,'vsiteAff_dateRelance','STRING','vsiteAff_dateRelance')
  @Column({ type: DataType.DATE })
  vsiteAff_dateRelance: Date | '0000-00-00';
  @ChampMere(Visiteaffilie.name,'vsiteAff_accRecpRelance','STRING','vsiteAff_accRecpRelance')
  @Column({ type: DataType.STRING })
  vsiteAff_accRecpRelance: string;
  @ChampMere(Visiteaffilie.name,'vsiteAff_motifNonrealise','STRING','vsiteAff_motifNonrealise')
  @Column({ type: DataType.STRING })
  vsiteAff_motifNonrealise: string;
  
}


