import mongoose, { Connection, Model as MongooseModel, connection } from 'mongoose';
import {  Model as SequelizeModel } from 'sequelize';
import { ChampMereService } from 'src/decoratorServices/champ-mere/champ-mere.service';
import { InsertionParTableFille } from './insertionParTablefille.service';
import { InsertionParTableFilleUpdate } from './insertionParTablefilleUpdate.service';
import { Injectable } from '@nestjs/common';
import { AnyARecord } from 'dns';
@Injectable()
export class MigrateTableFille{
    constructor(
        private readonly champMereService:ChampMereService,
        private readonly insertionParTableFille:InsertionParTableFille,
        private readonly insertionParTableFilleUpdate:InsertionParTableFilleUpdate,
    ){

    }
    async  migrateToGlobalTableFille(dynamicModel: SequelizeModel, modelMongoose: MongooseModel<any>,connection:any){
        const util=await this.champMereService.groupChampMereDataByTableFille(dynamicModel,modelMongoose);
        return await this.insertionParTableFille.insertionParTableFille(dynamicModel,modelMongoose,(util as any ).result,(util as any).data,connection);
    }
    async  updateToGlobalTableFille(dynamicModel: SequelizeModel, modelMongoose: MongooseModel<any>,connection:any){
        const util=await this.champMereService.groupChampMereDataByTableFille(dynamicModel,modelMongoose);
        return await this.insertionParTableFilleUpdate.insertionParTableFilleUpdate(dynamicModel,modelMongoose,(util as any ).result,(util as any).data,connection);
    }
    async  migrateToGlobalTableFilleGlobal(dynamicModel: SequelizeModel, modelMongoose: MongooseModel<any>){
        const util=await this.champMereService.groupChampMereDataByTableFille(dynamicModel,modelMongoose);
        return await this.insertionParTableFille.insertionParTableFilleGlobal(dynamicModel,modelMongoose,(util as any ).result,(util as any).data);
    }
    async  updateToGlobalTableFilleGlobal(dynamicModel: SequelizeModel, modelMongoose: MongooseModel<any>){
        const util=await this.champMereService.groupChampMereDataByTableFille(dynamicModel,modelMongoose);
        return await this.insertionParTableFilleUpdate.insertionParTableFilleUpdateGlobal(dynamicModel,modelMongoose,(util as any ).result,(util as any).data);
    }
}