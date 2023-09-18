
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Centre as MongoDBCentre} from 'src/db_ampasamadinika/schema/mongodb/centre.schema';
import { Centre as MySQLCentre} from 'src/db_ampasamadinika/schema/mysql/centre.schema';
import { Personnel as PersonnelMongo, PersonnelSchema} from 'src/db_ampasamadinika/schema/mongodb/personnel.schema';
import { Personnel as PersonnelSql} from 'src/db_ampasamadinika/schema/mysql/personnel.schema';


import { SyncroService } from 'src/syncro.service';

@Injectable()
export class SyncDbAmpasamadinikaService {
    constructor(
        @InjectModel(MongoDBCentre.name) private readonly mongooseCentre: Model<MongoDBCentre>,
        @InjectModel(PersonnelMongo.name) private readonly mongoosePersonnel: Model<PersonnelMongo>,
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('CentreSql') private readonly mysqlCentre: typeof MySQLCentre,
        @Inject('PersonnelSql') private readonly mysqlPersonnel: typeof PersonnelSql,
        private readonly syncservicebase:SyncroService,
      ) {}
    
      async syncToMongooseCentre() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlCentre as any,
            this.mongooseCentre
        );
      }
    
      async syncToSequelizeCentre() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlCentre as any,
            this.mongooseCentre
        );
      }
      async updateCentreinMongodbCentre(){
        return await this.syncservicebase.update(
            this.mysqlCentre as any,
            this.mongooseCentre,
            'sequelize'
        );
      }
      async updateCentreinSequelizeCentre(){
        return await this.syncservicebase.update(
            this.mysqlCentre as any,
            this.mongooseCentre,
            'mongoose'
        );
      }

      async syncToMongoosePersonnel() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlPersonnel as any,
            this.mongoosePersonnel
        );
      }
    
      async syncToSequelizePersonnel() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlPersonnel as any,
            this.mongoosePersonnel
        );
      }
      async updatePersonnelinMongodbPersonnel(){
        return await this.syncservicebase.update(
            this.mysqlPersonnel as any,
            this.mongoosePersonnel,
            'sequelize'
        );
      }
      async updatePersonnelinSequelizePersonnel(){
        return await this.syncservicebase.update(
            this.mysqlPersonnel as any,
            this.mongoosePersonnel,
            'mongoose'
        );
      }
}
