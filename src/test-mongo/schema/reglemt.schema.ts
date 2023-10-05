import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'reglemt' }) // Nom de la collection dans la base de données
export class Reglemt extends Document {
  @Prop({  })
  NO_RP: number;

  @Prop({  })
  DATE_PAIE: Date;

  @Prop({  maxlength: 15 })
  BANQUE: string;

  @Prop({  maxlength: 30 })
  CHEQUE: string;

  @Prop({  maxlength: 6 })
  CODE_ADH: string;

  @Prop({  maxlength: 1 })
  MODEPAIM: string;

  @Prop({  })
  MONTANT: number;

  @Prop({  maxlength: 10 })
  POSTE: string;

  @Prop({  })
  NOECR: number;

  @Prop({  maxlength: 32 })
  LIBELLE: string;

  @Prop({  })
  DATE_ECH: Date;

  @Prop({  })
  DATE_REF: Date;

  @Prop({  })
  DATE_CREATION: Date;

  @Prop({  })
  ANNUL: number;

  @Prop({  })
  NOCENTRE: number;

  @Prop({  })
  NOPOSTE: number;

  @Prop({  })
  RANG: number;

  @Prop({  })
  MOIS: number;

  @Prop({  })
  ANNEE: number;

  @Prop({  maxlength: 10 })
  abcdef: string;
}

export const ReglemtSchema = SchemaFactory.createForClass(Reglemt);
