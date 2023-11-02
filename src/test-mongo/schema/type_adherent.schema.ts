/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type TypeAdherentDocument = HydratedDocument<TypeAdherent>;

@Schema({
    collection: 'type_adherents',
    timestamps: true
})
export class TypeAdherent {
  

  @Prop({ required: true })
  nom: string;

  @Prop({ required: true })
  typeProspect: number;

  @Prop({ required: true })
  class: string;
}

export const TypeAdherentSchema = SchemaFactory.createForClass(TypeAdherent);
