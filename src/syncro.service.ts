// sync.service.ts
import { Injectable } from '@nestjs/common';
import mongoose, { Model as MongooseModel } from 'mongoose';
import { Model as SequelizeModel } from 'sequelize';
import { MappingService } from './mapping.service';
import { UtilService } from './util.service';
import sequelize from 'sequelize';
import { SynchronizeToMongoose } from './sync-services/synchronizeToMongoose.service';
import { synchronizeToSequelize } from './sync-services/synchronizeToSequelize.service';
import { Update } from './sync-services/update.service';
import { SynchronizeModelsSqlToMongoose } from './sync-services/synchronizeModelsSqlToMongoose.service';
import { SynchronizeModelsMongooseToSql } from './sync-services/synchronizeModelsMongooseToSql.service';
import { UpdateDelete } from './sync-services/updatedelete.service';

@Injectable()
export class SyncroService {
    constructor(
        private readonly mappingService: MappingService,
        private readonly utilitaire: UtilService,
        private readonly synchronizeToMongooseService:SynchronizeToMongoose,
        private readonly synchronizeToSequelizeService:synchronizeToSequelize,
        private readonly updateService:Update,
        private readonly synchronizeModelsSqlToMongooseService:SynchronizeModelsSqlToMongoose,
        private readonly synchronizeModelsMongooseToSqlService:SynchronizeModelsMongooseToSql,
        private readonly updateDeleteService:UpdateDelete) { }

    async synchronizeToMongoose(
        sequelizeModel: SequelizeModel,
        mongooseModel: MongooseModel<any>
    ) {
       return this.synchronizeToMongooseService.synchronizeToMongoose(sequelizeModel,mongooseModel);
    }

    async synchronizeToSequelize(
        sequelizeModel: SequelizeModel,
        mongooseModel: MongooseModel<any>
    ) {
       return this.synchronizeToSequelizeService.synchronizeToSequelize(sequelizeModel,mongooseModel);
    }

    async update(
        sequelizeModel: SequelizeModel,
        mongooseModel: MongooseModel<any>,
        priority: 'sequelize' | 'mongoose'
    ) {
        return this.updateService.update(sequelizeModel,mongooseModel,priority);
    }
    async synchronizeModelsSqlToMongoose(
        sourceModel: any,
        targetModel: any,
        primaryKey: string
    ): Promise<any> {
        return this.synchronizeModelsSqlToMongooseService.synchronizeModelsSqlToMongoose(sourceModel,targetModel,primaryKey);

    }
    async synchronizeModelsMongooseToSql(
        sourceModel: any,
        targetModel: any,
        primaryKey: string
    ): Promise<any> {
        return this.synchronizeModelsMongooseToSqlService.synchronizeModelsMongooseToSql(sourceModel,targetModel,primaryKey);


    }
    async updatedelete(
        sequelizeModel: SequelizeModel,
        mongooseModel: MongooseModel<any>,
        priority: 'sequelize' | 'mongoose'
      ) {
        return this.updateDeleteService.updatedelete(sequelizeModel,mongooseModel,priority)
    }
      


}

