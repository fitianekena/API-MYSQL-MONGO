
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Visiteaffilie extends Document {
  @Prop({ type: Number })
  vsiteAff_id : number;

  @Prop({ type: Number })
  vsiteAff_adhId : number;

  @Prop({ type: String })
  vsiteAff_adhNom	: string;

  @Prop({ type: Number })
  vsiteAff_dispansaireId: number ;

  @Prop({ type: Number })
  vsiteAff_affId: number;

  @Prop({ type: String })
  vsiteAff_affNom : string;

  @Prop({ type: String })
  vsiteAff_affPrenom : string;

  @Prop({ type: String})
  vsiteAff_mat : string;

  @Prop({ type: String })
  vsiteAff_sexe : string ;

  @Prop({ type: Date })
  vsiteAff_dateDerVisite : Date | '0000-00-00';

  @Prop({ type: Date })
  vsiteAff_dateRdv :Date | '0000-00-00';

  @Prop({ type: String })
  vsiteAff_heureRdv: string | '00:00:00';

  @Prop({ type: Date })
  vsiteAff_modifRdv: Date | '0000-00-00' ;

  @Prop({ type: Date })
  vsiteAff_dateAccReception:Date | '0000-00-00';

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

  @Prop({ type: Date })
  vsiteAff_editConv : Date | '0000-00-00';

  @Prop({ type: String })
  vsiteAff_lieuDevisite : string;

  @Prop({ type: String })
  vsiteAff_accRecpConv : string;

  @Prop({ type: Date })
  vsiteAff_dateRelance : Date | '0000-00-00';

  @Prop({ type: String })
  vsiteAff_accRecpRelance : string;

  @Prop({ type: String })
  vsiteAff_motifNonrealise : string;
}

export const VisiteaffilieSchema = SchemaFactory.createForClass(Visiteaffilie);

