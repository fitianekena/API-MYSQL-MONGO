import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'det_regl' }) // Nom de la collection dans la base de données
export class DetRegl extends Document {
  @Prop({  })
  LIGNE: number;

  @Prop({  })
  NO_RP: number;

  @Prop({  })
  NO_RD: number;

  @Prop({  maxlength: 8 })
  CODE_ADH: string;

  @Prop({  })
  MONTANT: number;

  @Prop({  maxlength: 32 })
  LIBELLE: string;

  @Prop({  })
  LIGNEECR: number;

  @Prop({  })
  VALID: number;

  @Prop({  })
  COMPTAB: number;

  @Prop({  })
  DATE_PAIE: Date;

  @Prop({  })
  MOIS: number;

  @Prop({  })
  ANNEE: number;

  @Prop({  })
  NOECH: number;

  @Prop({  })
  DATE_CREATION: Date;
}

export const DetReglSchema = SchemaFactory.createForClass(DetRegl);
