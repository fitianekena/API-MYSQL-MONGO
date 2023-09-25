import { Injectable } from "@nestjs/common";
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
import { SyncroService } from "src/syncro.service";

@Injectable()
export class ServicesSyncro<N extends MongooseModel<any>, M extends  SequelizeModel> {
    
    
    constructor(
        private readonly syncroService: SyncroService,
        private readonly _sequelizeModel: M,
        private readonly _mongooseModel: N,
    ) {}
    public get mongooseModel(): N {
        return this._mongooseModel;
    }
    public get sequelizeModel(): M {
        return this._sequelizeModel;
    }
    async synchronizeToMongoose() {
        const mongooseInstance = new this.mongooseModel();
        return await this.syncroService.synchronizeToMongoose(this.sequelizeModel as any , mongooseInstance);
    }

    async synchronizeToSequelize() {
        const mongooseInstance = new this.mongooseModel();
        return await this.syncroService.synchronizeToSequelize(this.sequelizeModel as any, mongooseInstance);
    }

    async updateMongo() {
        
        
        const mongooseInstance = new this.mongooseModel();
        return await this.syncroService.update(this.sequelizeModel as any, mongooseInstance, 'sequelize');
    }

    async updateSql() {
        
        
        const mongooseInstance = new this.mongooseModel();
        return await this.syncroService.update(this.sequelizeModel as any, mongooseInstance, 'mongoose');
    }

    async synchronizeModelSqlToMongoose(primaryKey) {
        
        
        const mongooseInstance = new this.mongooseModel();
        return await this.syncroService.synchronizeModelsSqlToMongoose(this.sequelizeModel as any, mongooseInstance, primaryKey);
    }

    async synchronizeModelsMongooseToSql(primaryKey) {
        
        
        const mongooseInstance = new this.mongooseModel();
        return await this.syncroService.synchronizeModelsMongooseToSql(this.sequelizeModel as any, mongooseInstance, primaryKey);
    }

    async updatedeleteSql() {
        
        
        const mongooseInstance = new this.mongooseModel();
        return await this.syncroService.updatedelete(this.sequelizeModel as any, mongooseInstance, 'sequelize');
    }

    async updatedeleteMongo() {
        
        
        const mongooseInstance = new this.mongooseModel();
        return await this.syncroService.updatedelete(this.sequelizeModel as any, mongooseInstance, 'mongoose');
    }
}
