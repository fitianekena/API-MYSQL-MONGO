import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'ecriture' }) // Nom de la collection dans la base de données
export class Ecriture extends Document {
  @Prop({  })
  NOECR: number;

  @Prop({  })
  NO_RD: number;

  @Prop({  })
  NO_RP: number;

  @Prop({  maxlength: 10 })
  CODE_ADH: string;

  @Prop({  maxlength: 12 })
  COMPTE: string;

  @Prop({  maxlength: 12 })
  CONTREPART: string;

  @Prop({  maxlength: 3 })
  TYPEECR: string;

  @Prop({  })
  DATECR: Date;

  @Prop({  })
  DEBIT: number;

  @Prop({  })
  CREDIT: number;

  @Prop({  maxlength: 35 })
  LIBELLE: string;

  @Prop({  })
  ECHEANCE: Date;

  @Prop({  maxlength: 3 })
  LETTRE: string;

  @Prop({  })
  LIGNEECR: number;

  @Prop({  })
  MOIS: number;

  @Prop({  })
  ANNEE: number;

  @Prop({  })
  TRIMESTRE: number;

  @Prop({  maxlength: 6 })
  REF_PIECE: string;
}

export const EcritureSchema = SchemaFactory.createForClass(Ecriture);
