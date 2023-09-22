
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
            

            const sequelizeData = await (sequelizeModel as any).findAll();

            for (const record of sequelizeData) {
                const mappedData = this.mappingService.mapSequelizeToMongoose(
                    sequelizeModel,
                    mongooseModel
                )(record);
                const mongooseRecord = new mongooseModel(mappedData);
<<<<<<< HEAD
                // if (mappedData.aff_id===1120010000040527400) {
                //     console.log(mappedData)
                // }
=======
                
>>>>>>> f4d17374f67a4e9df501dfa48a966a16cd411263
                
                await mongooseRecord.save();
                nombre++;
            }

            return 'Synchronization to MongoDB complete' + nombre + ' donnees migrés';
        } catch (error) {
            throw new Error('Data synchronization to MongoDB failed: ' + error.message);
        }
    }
}
