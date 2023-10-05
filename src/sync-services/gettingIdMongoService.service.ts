import { Inject, Injectable } from '@nestjs/common';
import { Model, Model as MongooseModel} from 'mongoose';
import { CHAMP_Mere_METADATA_KEY, ChampMereMetadata } from 'src/decorators/champ-mere/champ-mere.decorator'; // Assurez-vous d'importer ChampMereMetadata depuis le bon emplacement
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Model as SequelizeModel } from 'sequelize';
import { IsNull } from 'sequelize-typescript';
@Injectable()
export class GettingIdMongoService {
  constructor(
    
  ) {}
async getTheIdOfADocumentInTheMongoDatabase(sequelizeModel:SequelizeModel,mongooseModel:MongooseModel<any>,data:any){
    const primaryKeyField = Object.keys((sequelizeModel as any).rawAttributes).find(
        (key) => (sequelizeModel as any).rawAttributes[key].primaryKey
    );
    const primaryKeyValue = data.get(primaryKeyField);
    const filter = {};
    filter[primaryKeyField] = primaryKeyValue;
    const documents = await mongooseModel.find(filter).exec();
    
    const objectId = documents[0]._id;
    
    return  objectId;
}
 async getTheIdInTheMongoDatabase(sequelizeModel:SequelizeModel,mongooseModel:MongooseModel<any>,data:any){
  const primaryKeyField = Object.keys((sequelizeModel as any).rawAttributes).find(
      (key) => (sequelizeModel as any).rawAttributes[key].primaryKey
  );
  const primaryKeyValue = data.get(primaryKeyField);
  const filter = {};
  filter[primaryKeyField] = primaryKeyValue;
  const documents = await mongooseModel.find(filter).exec();
  if (documents) {
    return  primaryKeyValue;
  }else{
    return
  }
 
  
 
}
async getTheIdinMongoNotKnowingTheSequelizeModel(connectionmongoose:any,data:any,tableMere:string,local:any,foreign:any,refcollect:any){
  const modelmongoose:Model<any>=connectionmongoose.model(tableMere);
  
  const filter = {};
  filter[foreign] = data[refcollect];
  
  const dataforeign:any=await modelmongoose.find(filter).exec();
   
  if (dataforeign[0]) {
    try {
      return await  dataforeign[0]._id;
    } catch (error) {
      console.log(filter)
    }
    
  }else{
    return undefined;
  }
  
}

}
