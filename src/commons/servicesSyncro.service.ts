import { Injectable } from "@nestjs/common";
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
import { SyncroService } from "src/syncro.service";

@Injectable()
export class ServicesSyncro<N extends MongooseModel<any>, M extends  SequelizeModel> {
    
    constructor(
        private readonly syncroService: SyncroService,
        public readonly sequelizeModel: M,
        public readonly mongooseModel: N,
    ) {}

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
}
