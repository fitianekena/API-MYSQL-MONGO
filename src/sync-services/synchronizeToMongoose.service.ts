// sync.service.ts
import { Injectable } from '@nestjs/common';
import mongoose, { Model as MongooseModel } from 'mongoose';
import { Model as SequelizeModel } from 'sequelize';
import { MappingService } from '../mapping.service';
import { UtilService } from '../util.service';
import sequelize from 'sequelize';

@Injectable()
export class SynchronizeToMongoose {
    constructor(
        private readonly mappingService: MappingService,
        private readonly utilitaire: UtilService) { }
    async synchronizeToMongoose(
        sequelizeModel: SequelizeModel,
        mongooseModel: MongooseModel<any>
    ) {
        let nombre = 0;
        try {
            const mapSequelizeToMongoose = this.mappingService.mapSequelizeToMongoose(
                sequelizeModel,
                mongooseModel
            );

            const sequelizeData = await (sequelizeModel as any).findAll();

            for (const record of sequelizeData) {
                const mappedData = mapSequelizeToMongoose(record);
                const mongooseRecord = new mongooseModel(mappedData);
                await mongooseRecord.save();
                nombre++;
            }

            return 'Synchronization to MongoDB complete' + nombre + ' donnees migrés';
        } catch (error) {
            throw new Error('Data synchronization to MongoDB failed: ' + error.message);
        }
    }
}