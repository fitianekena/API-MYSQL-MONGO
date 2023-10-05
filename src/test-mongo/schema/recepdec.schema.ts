import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'recepdec' }) // Nom de la collection dans la base de données
export class Recepdec extends Document {
  @Prop({  })
  NO_RD: number;

  @Prop({  maxlength: 6 })
  CODE_ADH: string;

  @Prop({  })
  DATE_RD: Date;

  @Prop({  maxlength: 5 })
  TYPE_DECL: string;

  @Prop({  maxlength: 32 })
  LIBELLE: string;

  @Prop({  })
  ANNEE: number;

  @Prop({  })
  TRIMESTRE: number;

  @Prop({  })
  EFFECTIF: number;

  @Prop({  })
  MASSE_SAL: number;

  @Prop({  })
  PART_PATR: number;

  @Prop({  })
  PART_TRAV: number;

  @Prop({  })
  PENALITE: number;

  @Prop({  })
  DECLAREE: number;

  @Prop({  })
  TOTAL_PAYE: number;

  @Prop({  maxlength: 15 })
  ACCORD: string;

  @Prop({  })
  DATE_ACCOR: Date;

  @Prop({  })
  NOMBRE_PAY: number;

  @Prop({  maxlength: 10 })
  POSTE: string;

  @Prop({  })
  PEN_APPLIQ: number;

  @Prop({  })
  NOECR: number;

  @Prop({  })
  LIGNEECR: number;

  @Prop({  })
  LIGNE: number;

  @Prop({  })
  TOTSALDEC: number;

  @Prop({  })
  TOTCOTTRAV: number;

  @Prop({  })
  TOTCOTPATR: number;

  @Prop({  })
  TOTSALCALC: number;

  @Prop({  })
  MOIS: number;

  @Prop({  })
  TRIMANNEE: number;

  @Prop({  })
  VALID: number;

  @Prop({  })
  COMPTAB: number;

  @Prop({  })
  COTCALC: number;

  @Prop({  })
  DATE_CTRL: Date;

  @Prop({  maxlength: 35 })
  REF_NOTE: string;

  @Prop({  })
  DATE_CREATION: Date;
}

export const RecepdecSchema = SchemaFactory.createForClass(Recepdec);
