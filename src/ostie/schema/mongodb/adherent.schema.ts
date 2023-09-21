import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'adherent' }) // Nom de la collection dans la base de données
export class Adherent extends Document {
  @Prop({  maxlength: 6 })
  CODE_ADH: string;

  @Prop({  maxlength: 60 })
  RAISON_SOC: string;

  @Prop({  maxlength: 3 })
  CODE_CEN: string;

  @Prop({  maxlength: 30 })
  TEL: string;

  @Prop({  })
  DATE_ADH: Date;

  @Prop({  maxlength: 15 })
  STATUT: string;

  @Prop({  })
  EFFECTIF: number;

  @Prop({  maxlength: 4 })
  CODE_ACT: string;

  @Prop({  })
  DATE_ACT: Date;

  @Prop({  maxlength: 4 })
  CODE_ACT2: string;

  @Prop({  })
  DATE_CREAT: Date;

  @Prop({  })
  DATE_ETAT: Date;

  @Prop({  maxlength: 20 })
  MOTIF_ETAT: string;

  @Prop({  maxlength: 30 })
  NOCNAPS: string;

  @Prop({  maxlength: 60 })
  ADRESSE: string;

  @Prop({  })
  EFFEC_M: number;

  @Prop({  })
  EFFEC_F: number;

  @Prop({  })
  EFFEC_MF: number;

  @Prop({  maxlength: 20 })
  SIGLE: string;

  @Prop({  maxlength: 8 })
  BP: string;

  @Prop({  maxlength: 15 })
  FAX: string;

  @Prop({  maxlength: 15 })
  NIF: string;

  @Prop({  maxlength: 40 })
  RESPONSABL: string;

  @Prop({  maxlength: 6 })
  TYPE_ADH: string;

  @Prop({  maxlength: 6 })
  CODE_GROUP: string;

  @Prop({  })
  MASSE_SAL: number;

  @Prop({  })
  DIA: number;

  @Prop({  maxlength: 20 })
  STATIST: string;

  @Prop({  maxlength: 30 })
  LIEU_DE_TR: string;

  @Prop({  maxlength: 30 })
  ADR_ACTIV: string;

  @Prop({  maxlength: 20 })
  NATIONALIT: string;

  @Prop({  })
  VERSEMENT: number;

  @Prop({  })
  DEBIT: number;

  @Prop({  })
  CREDIT: number;

  @Prop({  maxlength: 15 })
  TITRE: string;

  @Prop({  maxlength: 20 })
  VILLE: string;

  @Prop({  })
  CODE_POST: number;

  @Prop({  maxlength: 80 })
  EMAIL: string;

  @Prop({  })
  EFFECTIF_ANTECEDENT: number;
}

export const AdherentSchema = SchemaFactory.createForClass(Adherent);
