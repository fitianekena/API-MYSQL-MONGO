import { Injectable } from '@nestjs/common';
import { Model } from 'sequelize';
import { Model as MongooseModel } from 'mongoose';
@Injectable()
export class UtilService {
  

 isSequelizeModel(model: any): model is Model {
  return model instanceof Model;
}

 isMongooseModel(model: any): model is MongooseModel<any> {
  return model.prototype && model.prototype instanceof MongooseModel;
}

}
