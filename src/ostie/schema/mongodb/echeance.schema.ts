import { Prop,Schema,SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'echeance' }) // Nom de la collection dans la base de données
export class Echeance extends Document {
  @Prop({  })
  LIGNE: number;

  @Prop({  })
  NO_RD: number;

  @Prop({  })
  DATE_ECH: Date;

  @Prop({  })
  MONT_ECH: number;

  @Prop({  })
  MONT_PAYE: number;

  @Prop({  maxlength: 1 })
  MODE_PAIE: string;

  @Prop({  maxlength: 6 })
  CODE_ADH: string;

  @Prop({  })
  RANG: number;

  @Prop({  })
  NBRRAP: number;
}

export const EcheanceSchema = SchemaFactory.createForClass(Echeance);
