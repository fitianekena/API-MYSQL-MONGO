
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Adherent } from './adherent.schema';
import { ForeignKey } from 'src/decorators/champ-mere/foreign-key.decorator';
import { BoAffilie } from './bo-affilie.schema';

@Schema()
export class Visiteaffilie extends Document {
  @Prop({ type: Number })
  vsiteAff_id : number;
                                                                                                                                                                                                                                                                                                                                                                                  
  @ForeignKey(Adherent.name,'adherent','code_adherent','vsiteAff_adhId')
  @Prop({ type: 'ObjectId', ref: 'Adherent' }) 
  adherent: number;

  @Prop({ type: String })
  vsiteAff_adhNom	: string;
  @ForeignKey(BoAffilie.name,'centre','id','vsiteAff_dispansaireId')
  @Prop({ type: Number })
  centre: number ;

  @ForeignKey(BoAffilie.name,'vsiteAff_affId','aff_id','vsiteAff_affId')
  @Prop({ type: 'ObjectId', ref: 'BoAffilie' }) 
  vsiteAff_affId: string;
  

  @Prop({ type: String })
  vsiteAff_affNom : string;

  @Prop({ type: String })
  vsiteAff_affPrenom : string;

  @Prop({ type: String})
  vsiteAff_mat : string;

  @Prop({ type: String })
  vsiteAff_sexe : string ;

  @Prop({ type: Date })
  vsiteAff_dateDerVisite : Date| '0000-00-00';

  @Prop({ type: Date }) 
  vsiteAff_dateRdv : Date | '0000-00-00';

  @Prop({ type: String })
  vsiteAff_heureRdv: string | '00:00:00';

  @Prop({ type: String })
  vsiteAff_modifRdv: String | '0000-00-00' ;

  @Prop({ type: String })
  vsiteAff_dateAccReception:String | '0000-00-00';

  @Prop({ type: String })
  vsiteAff_typeVisite: string;

  @Prop({ type: String })
  vsiteAff_horaireTravail: string;

  @Prop({ type: String })
  vsiteAff_handicap: string;

  @Prop({ type: String })
  vsiteAff_invalidite: string;

  @Prop({ type: String })
  vsiteAff_grossesse: string;

  @Prop({ type: String })
  vsiteAff_allaitement : string;

  @Prop({ type: String })
  vsiteAff_moins18ans : string;

  @Prop({ type: String })
  vsiteAff_plus60ans : string;

  @Prop({ type: Number })
  vsiteAff_medId : number;

  @Prop({ type: String })
  vsiteAff_medNom : string;

  @Prop({ type: String })
  vsiteAff_editConv : String | '0000-00-00';

  @Prop({ type: String })
  vsiteAff_lieuDevisite : string;

  @Prop({ type: String })
  vsiteAff_accRecpConv : string;

  @Prop({ type: String })
  vsiteAff_dateRelance : String | '0000-00-00';

  @Prop({ type: String })
  vsiteAff_accRecpRelance : string;

  @Prop({ type: String })
  vsiteAff_motifNonrealise : string;
}

export const VisiteaffilieSchema = SchemaFactory.createForClass(Visiteaffilie);

