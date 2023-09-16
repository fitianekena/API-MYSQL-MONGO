// sync.service.ts
import { Injectable } from '@nestjs/common';
import { Model as MongooseModel } from 'mongoose';
import { Model as SequelizeModel } from 'sequelize';
import { MappingService } from './mapping.service';

@Injectable()
export class SyncroService {
    constructor(private readonly mappingService: MappingService) { }

    async synchronizeToMongoose(
        sequelizeModel: SequelizeModel,
        mongooseModel: MongooseModel<any>
    ) {
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
            }

            return 'Synchronization to MongoDB complete';
        } catch (error) {
            throw new Error('Data synchronization to MongoDB failed: ' + error.message);
        }
    }

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

    async update(
        sequelizeModel: SequelizeModel,
        mongooseModel: MongooseModel<any>,
        priority: 'sequelize' | 'mongoose'
    ) {
        if (priority === 'sequelize') {
            // Migrate missing data from Sequelize to Mongoose
            const sequelizeData = await (sequelizeModel as any).findAll();
            const mongooseData = await mongooseModel.find();

            for (const record of sequelizeData) {
                const mappedData = this.mappingService.mapSequelizeToMongoose(
                    sequelizeModel,
                    mongooseModel
                )(record);

                // Check if the record already exists in Mongoose
                const existingRecord = mongooseData.find((mongooseRecord) => {
                    // Customize the comparison logic based on your requirements
                    return mongooseRecord.someUniqueIdentifier === mappedData.someUniqueIdentifier;
                });

                if (!existingRecord) {
                    const mongooseRecord = new mongooseModel(mappedData);
                    await mongooseRecord.save();
                }
            }
        } else if (priority === 'mongoose') {
            const sequelizeData = await (sequelizeModel as any).findAll();
            const mongooseData = await mongooseModel.find();

            for (const record of mongooseData) {
                const mappedData = this.mappingService.mapMongooseToSequelize(
                    sequelizeModel,
                    mongooseModel
                )(record);

                // Check if the record already exists in Sequelize
                const existingRecord = await (sequelizeModel as any).findOne({
                    where: { someUniqueIdentifier: mappedData.someUniqueIdentifier }, // Customize the identifier and comparison logic
                });

                if (!existingRecord) {
                    // Create a new Sequelize record with the mapped data and save it
                    await (sequelizeModel as any).create(mappedData);
                }
            }
        }
    }
}

