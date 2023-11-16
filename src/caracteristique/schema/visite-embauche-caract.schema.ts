import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { Adherent } from 'src/test-mongo/schema/adherent.schema';
import { AdAffilie } from './ad-affilie.schema';

@Schema({
  timestamps: true,
  collection: 'event_caracteristique_value',
})
export default class VisiteEmbaucheCaract {
  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: AdAffilie.name,
  })
  affilies: AdAffilie[];
  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: Adherent.name,
  })
  adherent: Adherent[];
  @Prop({
    type: Date
  })
  date: Date;
}

export const VisiteEmbaucheCaractSchema =
  SchemaFactory.createForClass(VisiteEmbaucheCaract);
