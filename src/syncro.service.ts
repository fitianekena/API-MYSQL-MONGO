// sync.service.ts
import { Injectable } from '@nestjs/common';
import mongoose, { Model as MongooseModel } from 'mongoose';
import { Model as SequelizeModel } from 'sequelize';
import { MappingService } from './mapping.service';
import { UtilService } from './util.service';
import sequelize from 'sequelize';

@Injectable()
export class SyncroService {
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
        let migratedCount = 0;

        if (priority === 'sequelize') {
            // Migrate missing data from Sequelize to Mongoose
            const sequelizeData = await (sequelizeModel as any).findAll();
            const mongooseData = await mongooseModel.find();
            const primaryKeyField = Object.keys((sequelizeModel as any).rawAttributes).find(
                (key) => (sequelizeModel as any).rawAttributes[key].primaryKey
            );
            for (const record of sequelizeData) {
                const primaryKeyValue = record.get(primaryKeyField);

                const matchingData = mongooseData.find((mongooseRecord) => {
                    // Compare les valeurs des champs clés primaires pour faire correspondre les enregistrements
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
            // Réinitialiser le compteur pour la direction de migration inverse
            migratedCount = 0;

            const sequelizeData = await (sequelizeModel as any).findAll();
            const mongooseData = await mongooseModel.find();
            const primaryKeyField = Object.keys((sequelizeModel as any).rawAttributes).find(
                (key) => (sequelizeModel as any).rawAttributes[key].primaryKey
            );
            for (const record of mongooseData) {
                const primaryKeyValue = record[primaryKeyField];

                const matchingData = await (sequelizeModel as any).findOne({
                    where: { [primaryKeyField]: primaryKeyValue }, // Utilisez le champ clé primaire
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
            { _id: new mongoose.Types.ObjectId(ObjectId) }, // Filtrez par l'ID
            await this.mappingService.mapSequelizeToMongoose(sourceModel, targetModel)(result), // Les champs à mettre à jour
            { new: true } // Option pour retourner le nouveau document mis à jour
        );
        return "element mis a jour " + updatedRecord;


    }
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

