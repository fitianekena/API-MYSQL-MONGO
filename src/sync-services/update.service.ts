
import { Injectable } from '@nestjs/common';
import mongoose, { Model as MongooseModel } from 'mongoose';
import { Model as SequelizeModel } from 'sequelize';
import { MappingService } from '../mapping.service';
import { UtilService } from '../util.service';
import sequelize from 'sequelize';

@Injectable()
export class Update {
    constructor(
        private readonly mappingService: MappingService,
        private readonly utilitaire: UtilService) { }
        async update(
            sequelizeModel: SequelizeModel,
            mongooseModel: MongooseModel<any>,
            priority: 'sequelize' | 'mongoose'
        ) {
            let migratedCount = 0;
    
            if (priority === 'sequelize') {
                
                const sequelizeData = await (sequelizeModel as any).findAll();
                const mongooseData = await mongooseModel.find();
                const primaryKeyField = Object.keys((sequelizeModel as any).rawAttributes).find(
                    (key) => (sequelizeModel as any).rawAttributes[key].primaryKey
                );
                
                for (const record of sequelizeData) {
                    const primaryKeyValue = record.get(primaryKeyField);
    
                    const matchingData = mongooseData.find((mongooseRecord) => {
                        
                        return primaryKeyValue === mongooseRecord[primaryKeyField];
                    });
                    if (!matchingData) {
                        const mappedData = this.mappingService.mapSequelizeToMongoose(
                            sequelizeModel,
                            mongooseModel
                        )(record);
                        const mongooseRecord = new mongooseModel(mappedData);
                        await mongooseRecord.save();
                        migratedCount++;
                    }
                }
    
                console.log(`Nombre d'éléments migrés de Sequelize vers Mongoose : ${migratedCount}`);
            } else if (priority === 'mongoose') {
                
                migratedCount = 0;
    
                const sequelizeData = await (sequelizeModel as any).findAll();
                const mongooseData = await mongooseModel.find();
                const primaryKeyField = Object.keys((sequelizeModel as any).rawAttributes).find(
                    (key) => (sequelizeModel as any).rawAttributes[key].primaryKey
                );
                for (const record of mongooseData) {
                    const primaryKeyValue = record[primaryKeyField];
    
                    const matchingData = await (sequelizeModel as any).findOne({
                        where: { [primaryKeyField]: primaryKeyValue }, 
                    });
    
                    if (!matchingData) {
                        const mappedData = this.mappingService.mapMongooseToSequelize(
                            sequelizeModel,
                            mongooseModel
                        )(record);
                        await (sequelizeModel as any).create(mappedData);
                        migratedCount++;
                    }
                }
    
                console.log(`Nombre d'éléments migrés de Mongoose vers Sequelize : ${migratedCount}`);
            }
        }
}
