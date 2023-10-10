// sync.service.ts
import { Injectable } from '@nestjs/common';
import mongoose, { Connection, Model as MongooseModel, connection } from 'mongoose';
import {  Model as SequelizeModel } from 'sequelize';
import { MappingService } from './mapping.service';
import { UtilService } from './util.service';
import sequelize from 'sequelize';
import { SynchronizeToMongoose } from './sync-services/synchronizeToMongoose.service';
import { synchronizeToSequelize } from './sync-services/synchronizeToSequelize.service';
import { Update } from './sync-services/update.service';
import { SynchronizeModelsSqlToMongoose } from './sync-services/synchronizeModelsSqlToMongoose.service';
import { SynchronizeModelsMongooseToSql } from './sync-services/synchronizeModelsMongooseToSql.service';
import { UpdateDelete } from './sync-services/updatedelete.service';
import { ChampMereService } from './decoratorServices/champ-mere/champ-mere.service';
import { InjectConnection } from '@nestjs/mongoose';
import { Model } from 'sequelize-typescript';
import { MigrateToDbGlobalService } from './sync-services/migrateToDbGlobalService.service';
import { MigrateTableFille } from './sync-services/migrateTableFille.service';

@Injectable()
export class SyncroService {
    
    constructor(
        private readonly champmereservice: ChampMereService,
        private readonly mappingService: MappingService,
        private readonly utilitaire: UtilService,
        private readonly synchronizeToMongooseService:SynchronizeToMongoose,
        private readonly synchronizeToSequelizeService:synchronizeToSequelize,
        private readonly updateService:Update,
        private readonly synchronizeModelsSqlToMongooseService:SynchronizeModelsSqlToMongoose,
        private readonly synchronizeModelsMongooseToSqlService:SynchronizeModelsMongooseToSql,
        private readonly updateDeleteService:UpdateDelete,
        private readonly synctoGlobalService:MigrateToDbGlobalService,
        private readonly migrateTableFilleToGlobal:MigrateTableFille) { }

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
    async migrateTableFilleToGlobalFunction(sequelizeModel: SequelizeModel, mongooseModel: MongooseModel<any>){
        return await  this.migrateTableFilleToGlobal.migrateToGlobalTableFilleGlobal(sequelizeModel,mongooseModel);
    }
    async updateTableFilleToGlobalFunction(sequelizeModel: SequelizeModel, mongooseModel: MongooseModel<any>){
        return await  this.migrateTableFilleToGlobal.updateToGlobalTableFilleGlobal(sequelizeModel,mongooseModel);
    }
    async migrateTableFilleFunction(sequelizeModel: SequelizeModel, mongooseModel: MongooseModel<any>,connection){
        return await  this.migrateTableFilleToGlobal.migrateToGlobalTableFille(sequelizeModel,mongooseModel,connection);
    }
    async updateTableFilleFunction(sequelizeModel: SequelizeModel, mongooseModel: MongooseModel<any>,connection){
        return await  this.migrateTableFilleToGlobal.updateToGlobalTableFille(sequelizeModel,mongooseModel,connection);
    }
    async migrateToDbGlobal(sequelizeModel:Model){
        
        return this.synctoGlobalService.migrateToDbGlobal(sequelizeModel)
    } 
    async migrateToDbGlobalMere(sequelizeModel:Model){
        
        return this.synctoGlobalService.migrateToDbGlobalMere(sequelizeModel)
    } 


}

