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
        if (sequelizeData[attribute] !== '0000-00-00') {
          // Check if the value is "0000-00-00" and skip it
          mongooseData[attribute] = sequelizeData[attribute];
        }
        // If you want to explicitly set it to null, you can do:
        // mongooseData[attribute] = sequelizeData[attribute] === '0000-00-00' ? null : sequelizeData[attribute];
      }

      return mongooseData;
    };
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
