import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'fdr_data' }) // Nom de la collection dans la base de données
export class FdrData extends Document {
  @Prop({  })
  age: number;

  @Prop({  maxlength: 6 })
  sexe: string;

  @Prop({  })
  NO_DEBUT: number;

  @Prop({  })
  NO_FIN: number;

  @Prop({  })
  DATE_LIVR: Date;
}

export const FdrDataSchema = SchemaFactory.createForClass(FdrData);
