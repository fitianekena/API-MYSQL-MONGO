import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Adherent } from './adherent.schema';
import { Centre } from './centre.schema';
import { ForeignKey } from 'src/decorators/champ-mere/foreign-key.decorator';
import { ChampFille } from 'src/decorators/champ-mere/champ-fille.decorator';
import { Affilie } from 'src/db_ostie/schema/mysql/affilie.schema';

@Schema({ collection: 'bo_affilies' })
export class BoAffilie extends Document {


    @ForeignKey(Adherent.name, 'adherent', 'code_adherent', 'affHist_adhId')
    @Prop({ type: 'ObjectId', ref: 'Adherent' })
    adherent: string;

    @Prop()
    adresse: string;

    @ForeignKey(Centre.name, 'centre', 'id', 'aff_centreId')
    @Prop({ type: 'ObjectId', ref: 'Centre' })
    centre: string;
    @Prop()
    aff_id: string;

    @Prop()
    cin_date_delivrance: Date;

    @Prop()
    cin_lieu_delivrance: string;

    @Prop()
    cin_num: string;

    @Prop({ default: "0"})
    cnaps_num: string;

    @Prop()
    createdAt: string;

    @Prop()
    date_de_naissance: Date;

    @Prop()
    date_embauche: Date;

    @Prop()
    date_debauche: Date;
    @Prop()
    email: string;

    @Prop()
    fonction: string;

    @Prop()
    history: string[];

    @Prop()
    lieu_de_naissance: string;

    @Prop()
    matricule: string;
    
    @ChampFille(Affilie.name,'aff_nom','String','nom','aff_id')
    @Prop()
    nom: string;
   
    @Prop()
    nombre_enfant_charge: number;

    @Prop()
    photo: string | null;
    @ChampFille(Affilie.name,'aff_prenom','String','prenom','aff_id')
    @Prop()
    prenom: string;

    @Prop()
    salaire_brut: number;

    @ChampFille(Affilie.name,'aff_salaire_brut_initial','String','salaire_brut_initial','aff_id')
    @Prop()
    salaire_brut_initial: number;

    @Prop()
    sexe: string;

    @Prop()
    situation_matrimoniale: string;

    @Prop({type:Number, default: 1})
    statut: number;

    @Prop()
    updatedAt: string;
}

export const BoAffilieSchema = SchemaFactory.createForClass(BoAffilie);
