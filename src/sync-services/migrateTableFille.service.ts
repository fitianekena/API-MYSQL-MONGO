import mongoose, { Connection, Model as MongooseModel } from 'mongoose';
import {  Model as SequelizeModel } from 'sequelize';
import { ChampMereService } from 'src/decoratorServices/champ-mere/champ-mere.service';
import { InsertionParTableFille } from './insertionParTablefille.service';
import { InsertionParTableFilleUpdate } from './insertionParTablefilleUpdate.service';
import { Injectable } from '@nestjs/common';
@Injectable()
export class MigrateTableFille{
    constructor(
        private readonly champMereService:ChampMereService,
        private readonly insertionParTableFille:InsertionParTableFille,
        private readonly insertionParTableFilleUpdate:InsertionParTableFilleUpdate,
    ){

    }
    async  migrateToGlobalTableFille(dynamicModel: SequelizeModel, modelMongoose: MongooseModel<any>){
        const util=await this.champMereService.groupChampMereDataByTableFille(dynamicModel,modelMongoose);
        return await this.insertionParTableFille.insertionParTableFille(dynamicModel,modelMongoose,(util as any ).result,(util as any).data);
    }
    async  updateToGlobalTableFille(dynamicModel: SequelizeModel, modelMongoose: MongooseModel<any>){
        const util=await this.champMereService.groupChampMereDataByTableFille(dynamicModel,modelMongoose);
        return await this.insertionParTableFilleUpdate.insertionParTableFilleUpdate(dynamicModel,modelMongoose,(util as any ).result,(util as any).data);
    }
}