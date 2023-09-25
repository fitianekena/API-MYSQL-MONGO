
import { Injectable } from '@nestjs/common';
import mongoose, { Model as MongooseModel } from 'mongoose';

import { MappingService } from '../mapping.service';
import { UtilService } from '../util.service';


@Injectable()
export class SynchronizeModelsMongooseToSql {
    constructor(
        private readonly mappingService: MappingService,) { }
        async synchronizeModelsMongooseToSql(
            sourceModel: any,
            targetModel: any,
            primaryKey: string
        ): Promise<any> {
            const primaryKeyField = Object.keys((sourceModel as any).rawAttributes).find(
                (key) => (sourceModel as any).rawAttributes[key].primaryKey
            );
            const filter = {};
            filter[primaryKeyField] = primaryKey;
            const documents = await targetModel.find(filter).exec();
            const mappedData = this.mappingService.mapMongooseToSequelize(
                sourceModel,
                targetModel
            )(documents[0]);
            const updatedRecord = await sourceModel.update(mappedData,
                {
                    where: filter, 
                    return:true,
                  }
            );
            return "element mis a jour: " + updatedRecord;
    
    
        }
}
