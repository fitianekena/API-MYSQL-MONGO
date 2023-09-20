// sync.service.ts
import { Injectable } from '@nestjs/common';
import mongoose, { Model as MongooseModel } from 'mongoose';
import { Model as SequelizeModel } from 'sequelize';
import { MappingService } from '../mapping.service';
import { UtilService } from '../util.service';
import sequelize from 'sequelize';


@Injectable()
export class UpdateDelete {
    constructor(
        private readonly mappingService: MappingService,) { }
    async updatedelete(
        sequelizeModel: SequelizeModel,
        mongooseModel: MongooseModel<any>,
        priority: 'sequelize' | 'mongoose'
    ) {
        let supprimee = 0;

        if (priority === 'sequelize') {
            // Migrate missing data from Sequelize to Mongoose
            const sequelizeData = await (sequelizeModel as any).findAll();
            const mongooseData = await mongooseModel.find();
            const primaryKeyField = Object.keys((sequelizeModel as any).rawAttributes).find(
                (key) => (sequelizeModel as any).rawAttributes[key].primaryKey
            );

            for (const mongooseRecord of mongooseData) {
                const primaryKeyValue = mongooseRecord[primaryKeyField];

                const matchingData = sequelizeData.find((sequelizeRecord) => {
                    // Compare les valeurs des champs clés primaires pour faire correspondre les enregistrements
                    return primaryKeyValue === sequelizeRecord.get(primaryKeyField);
                });

                if (!matchingData) {
                    // Supprimer les enregistrements de Mongoose qui n'ont pas de correspondance dans Sequelize
                    await mongooseModel.deleteOne({ [primaryKeyField]: primaryKeyValue });
                    supprimee++;
                }
            }
            console.log(`Nombre d'éléments supprimés de chez Mongoose : ${supprimee}`);
        } else if (priority === 'mongoose') {
            // Réinitialiser le compteur pour la direction de migration inverse
            supprimee = 0;


            const sequelizeData = await (sequelizeModel as any).findAll();
            const mongooseData = await mongooseModel.find();
            const primaryKeyField = Object.keys((sequelizeModel as any).rawAttributes).find(
                (key) => (sequelizeModel as any).rawAttributes[key].primaryKey
            );

            for (const sequelizeRecord of sequelizeData) {
                const primaryKeyValue = sequelizeRecord.get(primaryKeyField);

                const matchingData = await (mongooseModel as any).findOne({
                    [primaryKeyField]: primaryKeyValue,
                });

                if (!matchingData) {
                    await (sequelizeModel as any).destroy({
                        where: { [primaryKeyField]: primaryKeyValue },
                    });
                    supprimee;
                }
            }

            console.log(`Nombre d'éléments supprimés de  chew Sequelize  : ${supprimee}`);
        }
    }
}
