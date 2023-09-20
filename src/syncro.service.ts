// sync.service.ts
import { Injectable } from '@nestjs/common';
import { Model as MongooseModel } from 'mongoose';
import { Model as SequelizeModel } from 'sequelize';
import { MappingService } from './mapping.service';
import { UtilService } from './util.service';

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
    async synchronizeModels(
        sourceModel: any,
        targetModel: any,
        primaryKey: string
    ): Promise<void> {
        if (this.utilitaire.isSequelizeModel(sourceModel)) {
            const primaryKeyField = Object.keys((sourceModel as any).rawAttributes).find(
                (key) => (sourceModel as any).rawAttributes[key].primaryKey
            );
            const query = {};
            query[primaryKeyField] = primaryKey;

            // Utilisez la variable 'query' dans votre appel à find()
            (sourceModel as any).find(query, (err, result) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(result);
            });
        }
        const sourceRecords = await sourceModel.find().exec();

        for (const sourceRecord of sourceRecords) {
            const sourcePrimaryKey = sourceRecord[primaryKey];

            const targetRecord = await targetModel.findOne({
                where: { [primaryKey]: sourcePrimaryKey },
            });

            if (targetRecord) {
                for (const key in sourceRecord.toObject()) {
                    if (sourceRecord[key] !== targetRecord[key]) {
                        targetRecord[key] = sourceRecord[key];
                    }
                }

                // Save the updated target record
                await targetRecord.save();
            }
        }
    }


}

