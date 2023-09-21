import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'statut' }) // Nom de la collection dans la base de données
export class Statut extends Document {
  @Prop({  })
  RANG: number;

  @Prop({  maxlength: 6 })
  CODE_ADH: string;

  @Prop({  })
  DATE_STATU: Date;

  @Prop({  maxlength: 1 })
  TYPE_STATU: string;

  @Prop({  maxlength: 20 })
  NOTE_SERV: string;

  @Prop({  })
  DATE_CREAT: Date;

  @Prop({  maxlength: 30 })
  MOTIF: string;

  @Prop({  })
  VALIDAT: number;

  @Prop({  })
  MOIS: number;

  @Prop({  })
  ANNEE: number;

  @Prop({  maxlength: 10 })
  POSTE: string;
}

export const StatutSchema = SchemaFactory.createForClass(Statut);
