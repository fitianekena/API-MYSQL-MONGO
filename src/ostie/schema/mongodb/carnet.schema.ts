import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'carnet' }) // Nom de la collection dans la base de données
export class Carnet extends Document {
  @Prop({  })
  LIGNE: number;

  @Prop({  maxlength: 6 })
  CODE_ADH: string;

  @Prop({  })
  NO_DEBUT: number;

  @Prop({  })
  NO_FIN: number;

  @Prop({  })
  DATE_LIVR: Date;
}

export const CarnetSchema = SchemaFactory.createForClass(Carnet);
