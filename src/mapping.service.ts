import { Injectable } from '@nestjs/common';
import { Model, Sequelize } from 'sequelize';
import { Model as MongooseModel } from 'mongoose';

@Injectable()
export class MappingService {
  mapSequelizeToMongoose<T extends Model>(
    sequelizeModel: T,
    mongooseModel: MongooseModel<any>
  ): (sequelizeData: any) => any {
    const sequelizeAttributes = Object.keys(
      (sequelizeModel as any).rawAttributes
    ); // Cast to any and access rawAttributes

    return (sequelizeData: any): any => {
      const mongooseData: any = {};

      for (const attribute of sequelizeAttributes) {
        mongooseData[attribute] = sequelizeData[attribute] === '0000-00-00' ? null : sequelizeData[attribute];
        // If you want to explicitly set it to null, you can do:
        // mongooseData[attribute] = sequelizeData[attribute] === '0000-00-00' ? null : sequelizeData[attribute];
      }

      return mongooseData;
    };
  }
   transformMongooseData(mongooseData) {
    // Créez un tableau pour les données Sequelize
  const sequelizeDataArray = [];

  // Parcourez toutes les clés de l'objet Mongoose
  for (const key in mongooseData) {
    // Excluez le champ '_id' de Mongoose
    if (key !== '_id') {
      // Créez un objet pour chaque champ de Mongoose
      const sequelizeData = {};
      sequelizeData[key] = mongooseData[key];
      sequelizeDataArray.push(sequelizeData);
    }
  }

  return sequelizeDataArray;
  }
  // The mapMongooseToSequelize function remains unchanged
  mapMongooseToSequelize<T extends Model>(
    sequelizeModel: T,
    mongooseModel: MongooseModel<any>
  ): (mongooseData: any) => any {
    const sequelizeAttributes = Object.keys(
      (sequelizeModel as any).rawAttributes
    ); // Cast to any and access rawAttributes

    return (mongooseData: any): any => {
      const sequelizeData: any = {};

      for (const attribute of sequelizeAttributes) {
        sequelizeData[attribute] = mongooseData[attribute];
      }

      return sequelizeData;
    };
  }
}
