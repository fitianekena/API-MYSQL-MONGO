
import { Injectable } from '@nestjs/common';
import mongoose, { Model as MongooseModel } from 'mongoose';

import { MappingService } from '../mapping.service';
import { UtilService } from '../util.service';


@Injectable()
export class SynchronizeModelsSqlToMongoose {
    constructor(
        private readonly mappingService: MappingService,
        private readonly utilitaire: UtilService) { }
    async synchronizeModelsSqlToMongoose(
        sourceModel: any,
        targetModel: any,
        primaryKey: string
    ): Promise<any> {
        const primaryKeyField = Object.keys((sourceModel as any).rawAttributes).find(
            (key) => (sourceModel as any).rawAttributes[key].primaryKey
        );
        const filter = {};
        filter[primaryKeyField] = primaryKey;

        const result = await sourceModel.findOne({
            where: filter,
        });


        const documents = await targetModel.find(filter).exec();
        const ObjectId = documents[0]._id;

        const updatedRecord = await targetModel.findOneAndUpdate(
            { _id: new mongoose.Types.ObjectId(ObjectId) }, 
            await this.mappingService.mapSequelizeToMongoose(sourceModel, targetModel)(result), 
            { new: true } 
        );
        return "Voici l'element mis a jour  " + updatedRecord;


    }
}
