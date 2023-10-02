import { Inject, Injectable } from '@nestjs/common';
import { Model as MongooseModel} from 'mongoose';
import { CHAMP_Mere_METADATA_KEY, ChampMereMetadata } from 'src/decorators/champ-mere/champ-mere.decorator'; // Assurez-vous d'importer ChampMereMetadata depuis le bon emplacement
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Model as SequelizeModel } from 'sequelize';
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
    return objectId;
}

}
