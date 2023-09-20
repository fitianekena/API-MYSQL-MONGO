// sync.service.ts
import { Injectable } from '@nestjs/common';
import mongoose, { Model as MongooseModel } from 'mongoose';
import { Model as SequelizeModel } from 'sequelize';
import { MappingService } from '../mapping.service';
import { UtilService } from '../util.service';
import sequelize from 'sequelize';

@Injectable()
export class synchronizeToSequelize {
    constructor(
        private readonly mappingService: MappingService,
        private readonly utilitaire: UtilService) { }
        async synchronizeToSequelize(
            sequelizeModel: SequelizeModel,
            mongooseModel: MongooseModel<any>
        ) {
            try {
                const mapMongooseToSequelize = this.mappingService.mapMongooseToSequelize(
                    sequelizeModel,
                    mongooseModel
                );
    
                const mongooseData = await mongooseModel.find();
    
                for (const record of mongooseData) {
                    const mappedData = mapMongooseToSequelize(record);
                    await (sequelizeModel as any).create(mappedData);
                }
    
                return 'Synchronization to Sequelize complete';
            } catch (error) {
                throw new Error('Data synchronization to Sequelize failed: ' + error.message);
            }
        }
}
