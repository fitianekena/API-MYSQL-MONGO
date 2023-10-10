import { Injectable } from "@nestjs/common";
import { Sequelize, Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document, Connection } from 'mongoose';
import { SyncroService } from "src/syncro.service";
import { InjectConnection } from "@nestjs/mongoose";

@Injectable()
export class ServicesSyncro<N extends MongooseModel<any>, M extends  SequelizeModel,P extends Connection> {
    
    constructor(
        private readonly syncroService: SyncroService,
        public readonly sequelizeModel: M,
        public readonly mongooseModel: N,
        public readonly mongooseconnection:P,
    ) {
        
    }

    async synchronizeToMongoose() {
        
        return await this.syncroService.synchronizeToMongoose(this.sequelizeModel as any ,this.mongooseModel);
    }

    async synchronizeToSequelize() {
        
        return await this.syncroService.synchronizeToSequelize(this.sequelizeModel as any, this.mongooseModel);
    }

    async updateMongo() {
        
        
        
        return await this.syncroService.update(this.sequelizeModel as any, this.mongooseModel, 'sequelize');
    }

    async updateSql() {
        
        
        
        return await this.syncroService.update(this.sequelizeModel as any, this.mongooseModel, 'mongoose');
    }

    async synchronizeModelSqlToMongoose(primaryKey) {
        
        
        
        return await this.syncroService.synchronizeModelsSqlToMongoose(this.sequelizeModel as any, this.mongooseModel, primaryKey);
    }

    async synchronizeModelsMongooseToSql(primaryKey) {
        
        
        
        return await this.syncroService.synchronizeModelsMongooseToSql(this.sequelizeModel as any, this.mongooseModel, primaryKey);
    }

    async updatedeleteSql() {
        
        
        
        return await this.syncroService.updatedelete(this.sequelizeModel as any, this.mongooseModel, 'sequelize');
    }

    async updatedeleteMongo() {
        
        
        
        return await this.syncroService.updatedelete(this.sequelizeModel as any, this.mongooseModel, 'mongoose');
    }
    async migrateTableFilleNormalFunction(){
        return  await this.syncroService.migrateTableFilleFunction(this.sequelizeModel as any,this.mongooseModel,this.mongooseconnection);
    }
    async updateTableFilleNormalFunction(){
        return  await this.syncroService.updateTableFilleFunction(this.sequelizeModel as any,this.mongooseModel,this.mongooseconnection);
    }
    async migrateTableFilleToGlobalFunction(){
        return  await this.syncroService.migrateTableFilleToGlobalFunction(this.sequelizeModel as any,this.mongooseModel);
    }
    async updateTableFilleToGlobalFunction(){
        return  await this.syncroService.updateTableFilleToGlobalFunction(this.sequelizeModel as any,this.mongooseModel);
    }
    async migrateToGlobal(){
        return  await this.syncroService.migrateToDbGlobal(this.sequelizeModel as any);
    }
    async migrateToGlobalMere(){
        return  await this.syncroService.migrateToDbGlobalMere(this.sequelizeModel as any);
    }
}
