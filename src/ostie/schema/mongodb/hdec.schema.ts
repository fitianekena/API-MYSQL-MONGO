import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'hdec' }) // Nom de la collection dans la base de données
export class Hdec extends Document {
  @Prop({  })
  NO_RD: number;

  @Prop({  })
  DATE_RD: Date;

  @Prop({  maxlength: 10 })
  CODE_ADH: string;

  @Prop({  maxlength: 35 })
  LIBELLE: string;

  @Prop({  })
  MONTANT: number;

  @Prop({  })
  TOTAL_PAYE: number;

  @Prop({  maxlength: 10 })
  POSTE: string;

  @Prop({  })
  MOIS: number;

  @Prop({  })
  ANNEE: number;

  @Prop({  })
  VALID: number;

  @Prop({  })
  COMPTAB: number;

  @Prop({  })
  RANG: number;

  @Prop({  })
  NBRRAP: number;

  @Prop({  })
  DATE_CREATION: Date;

  @Prop({  })
  OLD_RD: number;

  @Prop({  })
  NOCENTRE: number;

  @Prop({  })
  NOPOSTE: number;

  @Prop({  maxlength: 25 })
  MODEPAIEMENT: string;
}

export const HdecSchema = SchemaFactory.createForClass(Hdec);
