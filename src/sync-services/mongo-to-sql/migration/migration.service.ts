import { Injectable } from '@nestjs/common';
import { ChampFilleService } from 'src/decoratorServices/champ-fille/champ-fille.service';

@Injectable()
export class MigrationService {
    constructor(
        private readonly champfilleservice:ChampFilleService,
    )
    {}
    async getMongooseConnectionAndModelNames(mongooseModel:any) {
        const mongooseConnection = mongooseModel.db;
        const modelNames = mongooseConnection.modelNames();
        console.log(modelNames)
        return modelNames;
      }


}
