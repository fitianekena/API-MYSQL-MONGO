import { Injectable } from "@nestjs/common";
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
import { SyncroService } from "src/syncro.service";

@Injectable()
export class ServicesSyncro<N extends MongooseModel<any>, M extends  SequelizeModel> {
    constructor(
        private readonly syncroService: SyncroService,
        private readonly sequelizeModel: M,
        private readonly mongooseModel: N,
    ) {}

    async synchronizeToMongoose() {
        // Instanciez vos modèles Sequelize et Mongoose si ce n'est pas déjà fait
        
        const mongooseInstance = new this.mongooseModel();
        return await this.syncroService.synchronizeToMongoose(this.sequelizeModel as any , mongooseInstance);
    }

    async synchronizeToSequelize() {
        // Instanciez vos modèles Sequelize et Mongoose si ce n'est pas déjà fait
        
        const mongooseInstance = new this.mongooseModel();
        return await this.syncroService.synchronizeToSequelize(this.sequelizeModel as any, mongooseInstance);
    }

    async updateSql() {
        // Instanciez vos modèles Sequelize et Mongoose si ce n'est pas déjà fait
        
        const mongooseInstance = new this.mongooseModel();
        return await this.syncroService.update(this.sequelizeModel as any, mongooseInstance, 'sequelize');
    }

    async updatemongooseModelongo() {
        // Instanciez vos modèles Sequelize et Mongoose si ce n'est pas déjà fait
        
        const mongooseInstance = new this.mongooseModel();
        return await this.syncroService.update(this.sequelizeModel as any, mongooseInstance, 'mongoose');
    }

    async synchronizemongooseModelodelsSqlToMongoose(primaryKey) {
        // Instanciez vos modèles Sequelize et Mongoose si ce n'est pas déjà fait
        
        const mongooseInstance = new this.mongooseModel();
        return await this.syncroService.synchronizeModelsSqlToMongoose(this.sequelizeModel as any, mongooseInstance, primaryKey);
    }

    async synchronizeModelsMongooseToSql(primaryKey) {
        // Instanciez vos modèles Sequelize et Mongoose si ce n'est pas déjà fait
        
        const mongooseInstance = new this.mongooseModel();
        return await this.syncroService.synchronizeModelsMongooseToSql(this.sequelizeModel as any, mongooseInstance, primaryKey);
    }

    async updatedeleteSql() {
        // Instanciez vos modèles Sequelize et Mongoose si ce n'est pas déjà fait
        
        const mongooseInstance = new this.mongooseModel();
        return await this.syncroService.updatedelete(this.sequelizeModel as any, mongooseInstance, 'sequelize');
    }

    async updatedeleteMongo() {
        // Instanciez vos modèles Sequelize et Mongoose si ce n'est pas déjà fait
        
        const mongooseInstance = new this.mongooseModel();
        return await this.syncroService.updatedelete(this.sequelizeModel as any, mongooseInstance, 'mongoose');
    }
}
