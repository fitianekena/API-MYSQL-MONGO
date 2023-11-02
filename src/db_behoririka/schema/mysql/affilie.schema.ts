import { Table, Model, Column, DataType, PrimaryKey } from 'sequelize-typescript';
import { ChampMere } from 'src/decorators/champ-mere/champ-mere.decorator';
import { AdAffilie } from 'src/test-mongo/schema/ad-affilie.schema';
import { BoAffilie } from 'src/test-mongo/schema/bo-affilie.schema';
import { DnsAffilie } from 'src/test-mongo/schema/dns-affilie.schema';


@Table({
  tableName: 'affilie',
  timestamps: false,
  collate: 'utf8_unicode_ci'
})
export class Affilie extends Model<Affilie> {

  @PrimaryKey
  @Column({ type: DataType.BIGINT })
  @ChampMere(DnsAffilie.name,'aff_id','STRING','aff_id')
  @ChampMere(AdAffilie.name,'aff_id','STRING','aff_id')
  @ChampMere(BoAffilie.name,'aff_id','STRING','aff_id')
  aff_id: number;

  @Column({ type: DataType.TEXT, })
  aff_num: string | null;

  @Column({ type: DataType.BIGINT })
  aff_numLast: number;

  @Column({ type: DataType.BIGINT })
  aff_numNews: number;

  @Column({ type: DataType.BIGINT, defaultValue: 0 })
  aff_affTravailleur01Id: number;

  @Column({ type: DataType.BIGINT })
  aff_affTravailleur01IdLast: number;

  @Column({ type: DataType.BIGINT })
  aff_affTravailleur01IdNews: number;

  @Column({ type: DataType.BIGINT, defaultValue: 0 })
  aff_affTravailleur02Id: number;

  @Column({ type: DataType.BIGINT })
  aff_affTravailleur02IdLast: number;

  @Column({ type: DataType.BIGINT })
  aff_affTravailleur02IdNews: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0, comment: "Le centre de rattachement par défaut de l'affilié" })
  aff_centreId: number;

  @ChampMere(AdAffilie.name,'nom','STRING','aff_nom')
  @ChampMere(BoAffilie.name,'nom','STRING','aff_nom')
  @Column({ type: DataType.STRING(160), allowNull: true, })
  aff_nom: string | null;

  @ChampMere(AdAffilie.name,'prenom','STRING','aff_prenom')
  @ChampMere(BoAffilie.name,'prenom','STRING','aff_prenom')
  @Column({ type: DataType.STRING(160), allowNull: true, })
  aff_prenom: string | null;

  @ChampMere(AdAffilie.name,'sexe','STRING','aff_sexe')
  @ChampMere(BoAffilie.name,'sexe','STRING','aff_sexe')
  @Column({ type: DataType.STRING(50), allowNull: true, })
  aff_sexe: string | null;
  
  @ChampMere(BoAffilie.name,'adresse','STRING','aff_adresse')
  @ChampMere(AdAffilie.name,'adresse','STRING','aff_adresse')
  @Column({ type: DataType.STRING(255), allowNull: true, })
  aff_adresse: string | null;

  @ChampMere(BoAffilie.name,'date_de_naissance','DATE','aff_naissDate')
  @ChampMere(AdAffilie.name,'date_de_naissance','DATE','aff_naissDate')
  @Column({ type: DataType.DATE, allowNull: true })
  aff_naissDate: Date | null;

  @ChampMere(BoAffilie.name,'lieu_de_naissance','STRING','aff_naissLieu')
  @ChampMere(AdAffilie.name,'lieu_de_naissance','STRING','aff_naissLieu')
  @Column({ type: DataType.STRING(160), allowNull: true, })
  aff_naissLieu: string | null;

  @ChampMere(BoAffilie.name,'cin_num','STRING','aff_cinNum')
  @ChampMere(AdAffilie.name,'cin_num','STRING','aff_cinNum')
  @Column({ type: DataType.STRING(50), allowNull: true, })
  aff_cinNum: string | null;

 
  @ChampMere(AdAffilie.name,'cin_date_delivrance','DATE','aff_cinDate')
  @ChampMere(AdAffilie.name,'cin_date_delivrance','DATE','aff_cinDate')
  @Column({ type: DataType.DATE })
  aff_cinDate: Date | null;

  @ChampMere(BoAffilie.name,'cin_lieu_delivrance','STRING','aff_cinLieu')
  @ChampMere(AdAffilie.name,'cin_lieu_delivrance','STRING','aff_cinLieu')
  @Column({ type: DataType.STRING(25), allowNull: true, })
  aff_cinLieu: string | null;
  @ChampMere(AdAffilie.name,'cin_lieu_delivrance','STRING','aff_situationFamilialeId')
  @ChampMere(BoAffilie.name,'cin_lieu_delivrance','STRING','aff_situationFamilialeId')
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  aff_situationFamilialeId: number;

  @ChampMere(AdAffilie.name,'nombre_enfant_charge','STRING','aff_nbrEnfant')
  @ChampMere(BoAffilie.name,'nombre_enfant_charge','STRING','aff_nbrEnfant')
  @Column({ type: DataType.INTEGER, allowNull: true, comment: "nombre d'enfants" })
  aff_nbrEnfant: number | null;

  @Column({ type: DataType.STRING(25), allowNull: true, })
  aff_liaison: string | null;

  @Column({ type: DataType.STRING(25), allowNull: true, })
  aff_typeTrav: string | null;

  @Column({ type: DataType.STRING(25), allowNull: true, })
  aff_ville: string | null;

  @Column({ type: DataType.STRING(25), allowNull: true, })
  aff_codePost: string | null;
  
  @Column({ type: DataType.STRING(50), allowNull: true, })
  aff_fonction: string | null;

  @Column({ type: DataType.STRING(50), allowNull: true, })
  aff_classification: string | null;
  @ChampMere(AdAffilie.name,'cnaps_num','STRING','aff_cnapsNum')
  @ChampMere(BoAffilie.name,'cnaps_num','STRING','aff_cnapsNum')
  @Column({ type: DataType.STRING(50), allowNull: true, })
  aff_cnapsNum: string | null;

  @Column({ type: DataType.STRING(160), allowNull: true, comment: "path de la photo de l'affilié" })
  aff_photo: string | null;

  @Column({ type: DataType.INTEGER, allowNull: true })
  CHRONO: number | null;

  @Column({ type: DataType.TINYINT })
  aff_rang: number;

  @Column({ type: DataType.TINYINT,  })
  aff_codeUnique: number;

  @Column({ type: DataType.TINYINT,  })
  aff_doublon: number;

  @ChampMere(AdAffilie.name,'createdAt','DATE','aff_dateCreation')
  @ChampMere(BoAffilie.name,'createdAt','DATE','aff_dateCreation')
  @Column({ type: DataType.DATE,  })
  aff_dateCreation: Date;

  @Column({ type: DataType.BIGINT,  })
  aff_fusion: number;

  @Column({ type: DataType.INTEGER })
  affId_old: number;

  @Column({ type: DataType.STRING(255),  })
  aff_persNom: string;

  @Column({ type: DataType.INTEGER,  })
  aff_persId: number;

  @Column({ type: DataType.STRING(50),  })
  aff_persMat: string;

  @Column({ type: DataType.TINYINT,  })
  aff_persCentreId: number;

  @Column({ type: DataType.TINYINT,  })
  aff_persServiceId: number;

  @Column({ type: DataType.STRING(50),  })
  aff_persIpAdress: string;
  @ChampMere(AdAffilie.name,'date_embauche','DATE','affEmbauche_embauchedate')
  @ChampMere(BoAffilie.name,'date_embauche','DATE','affEmbauche_embauchedate')
  @Column({ type: DataType.DATE, allowNull: true })
  affEmbauche_embauchedate: Date | null;

  @ChampMere(AdAffilie.name,'date_debauche','DATE','affEmbauche_debaucheDate')
  @ChampMere(BoAffilie.name,'date_debauche','DATE','affEmbauche_debaucheDate')
  @Column({ type: DataType.DATE, allowNull: true })
  affEmbauche_debaucheDate: Date | null;


  @ChampMere(BoAffilie.name,'salaire_brut','STRING','affEmbauche_salaireBrut')
  @ChampMere(AdAffilie.name,'salaire_brut','STRING','affEmbauche_salaireBrut')
  @Column({ type: DataType.DECIMAL(10, 2), allowNull: true })
  affEmbauche_salaireBrut: number | null;
  @ChampMere(BoAffilie.name,'fonction','STRING','affEmbauche_fonction')
  @ChampMere(AdAffilie.name,'fonction','STRING','affEmbauche_fonction')
  @Column({ type: DataType.STRING(250), allowNull: true })
  affEmbauche_fonction: string | null;

  @Column({ type: DataType.STRING(250), allowNull: true })
  affEmbauche_classification: string | null;

  @Column({ type: DataType.TINYINT, allowNull: true })
  affEmbauche_ostieplus: number | null;

  @ChampMere(AdAffilie.name,'matricule','STRING','affEmbauche_matricule')
  @ChampMere(BoAffilie.name,'matricule','STRING','affEmbauche_matricule')
  @Column({ type: DataType.STRING(50), allowNull: true })
  affEmbauche_matricule: string | null;

  @Column({ type: DataType.STRING(250), allowNull: true })
  affEmbauche_type: string | null;

  @Column({ type: DataType.DATE, allowNull: true })
  affEmbauche_debaucheDateSaisie: Date | null;

  @Column({ type: DataType.INTEGER, allowNull: true })
  affEmbauche_debauchePersId: number | null;

  @Column({ type: DataType.INTEGER, allowNull: true })
  affHist_adhIdIndex: number | null;

  @Column({ type: DataType.INTEGER, allowNull: true })
  affHist_adhId: number | null;

  @Column({ type: DataType.STRING(11), allowNull: true })
  affHist_adhNum: string | null;

  @Column({ type: DataType.TINYINT, allowNull: true })
  affHist_situationId: number | null;

  @Column({ type: DataType.TINYINT, allowNull: true })
  affHist_affiliationTypeId: number | null;

  @Column({ type: DataType.TEXT, allowNull: true })
  affHist_motif: string | null;

  @Column({ type: DataType.DATE, allowNull: true })
  affHist_date: Date | null;

  @Column({ type: DataType.DATE, allowNull: true })
  affHist_dateSaisie: Date | null;

  @Column({ type: DataType.INTEGER, allowNull: true })
  affHist_persId: number | null;

  @Column({ type: DataType.TINYINT, allowNull: true })
  affHist_certificatScolaire: number | null;

  @Column({ type: DataType.DATE, allowNull: true })
  affHist_certificatScolaireDate: Date | null;

  @Column({ type: DataType.STRING(250), allowNull: true })
  affHist_obsCba: string | null;

  @Column({ type: DataType.DATE, allowNull: true })
  affHist_dateObsCba: Date | null;
  @ChampMere(DnsAffilie.name,'salaire_un','STRING','affEmbauche_salaire1eremois')
  @Column({ type: DataType.DECIMAL(10, 2),  })
  affEmbauche_salaire1eremois: number;

  @ChampMere(DnsAffilie.name,'salaire_deux','STRING','affEmbauche_salaire2ememois')
  @Column({ type: DataType.DECIMAL(10, 2),  })
  affEmbauche_salaire2ememois: number;

  @ChampMere(DnsAffilie.name,'salaire_trois','STRING','affEmbauche_salaire3ememois')
  @Column({ type: DataType.DECIMAL(10, 2),  })
  affEmbauche_salaire3ememois: number;

  @Column({ type: DataType.DECIMAL(10, 2),  })
  affEmbauche_TotauxSalNonPlafones: number;

  @Column({ type: DataType.DECIMAL(10, 2),  })
  affEmbauche_TotauxSalPlafones: number;

  @Column({ type: DataType.DECIMAL(10, 2),  })
  affEmbauche_PartEmployer: number;

  @Column({ type: DataType.DECIMAL(10, 2),  })
  affEmbauche_PartTravailleur: number;
}

