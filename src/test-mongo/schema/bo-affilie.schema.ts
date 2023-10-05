import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Adherent } from './adherent.schema';
import { Centre } from './centre.schema';
import { ForeignKey } from 'src/decorators/champ-mere/foreign-key.decorator';

@Schema({ collection: 'bo-affilie' })
export class BoAffilie extends Document {


    @ForeignKey(Adherent.name, 'adherent', 'code_adherent', 'affHist_adhId')
    @Prop({ type: 'ObjectId', ref: 'Adherent' })
    adherent: string;

    @Prop()
    adresse: string;

    @ForeignKey(Centre.name, 'centre', 'centre_id', 'aff_centreId')
    @Prop({ type: 'ObjectId', ref: 'Centre' })
    centre: string;
    @Prop()
    aff_id: string;

    @Prop()
    cin_date_delivrance: string;

    @Prop()
    cin_lieu_delivrance: string;

    @Prop()
    cin_num: string;

    @Prop()
    cnaps_num: string;

    @Prop()
    createdAt: string;

    @Prop()
    date_de_naissance: string;

    @Prop()
    date_embauche: string;

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

    @Prop()
    nom: string;

    @Prop()
    nombre_enfant_charge: number;

    @Prop()
    photo: string | null;

    @Prop()
    prenom: string;

    @Prop()
    salaire_brut: number;

    @Prop()
    salaire_brut_initial: number;

    @Prop()
    sexe: string;

    @Prop()
    situation_matrimoniale: string;

    @Prop()
    statut: string;

    @Prop()
    updatedAt: string;
}

export const BoAffilieSchema = SchemaFactory.createForClass(BoAffilie);
