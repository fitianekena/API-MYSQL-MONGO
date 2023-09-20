
import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Centre as MongoDBCentre} from 'src/db_ampasamadinika/schema/mongodb/centre.schema';
import { Centre as MySQLCentre} from 'src/db_ampasamadinika/schema/mysql/centre.schema';
import { Personnel as PersonnelMongo, PersonnelSchema} from 'src/db_ampasamadinika/schema/mongodb/personnel.schema';
import { Personnel as PersonnelSql} from 'src/db_ampasamadinika/schema/mysql/personnel.schema';
import { Fonction as FonctionMongo, FonctionSchema} from 'src/db_ampasamadinika/schema/mongodb/fonction.schema';
import { Fonction as FonctionSql} from 'src/db_ampasamadinika/schema/mysql/fonction.schema';
import { Visiteaffilie as VisiteaffilieSql } from 'src/db_ampasamadinika/schema/mysql/visiteaffilie.schema'; 
import { Visiteaffilie as VisiteaffilieMongo } from 'src/db_ampasamadinika/schema/mongodb/visiteaffilie.schema';
import { Service as ServiceSql } from 'src/db_ampasamadinika/schema/mysql/service.schema'; 
import { Service as ServiceMongo } from 'src/db_ampasamadinika/schema/mongodb/service.schema';

import { SyncroService } from 'src/syncro.service';

@Injectable()
export class SyncDbAmpasamadinikaService {
    constructor(
        @InjectModel(MongoDBCentre.name,'db_ampasamadinika') private readonly mongooseCentre: Model<MongoDBCentre>,
        @InjectModel(PersonnelMongo.name,'db_ampasamadinika') private readonly mongoosePersonnel: Model<PersonnelMongo>,
        @InjectModel(FonctionMongo.name,'db_ampasamadinika') private readonly mongooseFonction: Model<FonctionMongo>,
        @InjectModel(VisiteaffilieMongo.name,'db_ampasamadinika') private readonly mongooseVisiteaffilie: Model<VisiteaffilieMongo>,
        @InjectModel(ServiceMongo.name,'db_ampasamadinika') private readonly mongooseService: Model<ServiceMongo>,
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('CentreSql') private readonly mysqlCentre: typeof MySQLCentre,
        @Inject('PersonnelSql') private readonly mysqlPersonnel: typeof PersonnelSql,
        @Inject('FonctionSql') private readonly mysqlFonction: typeof FonctionSql,
        @Inject('VisiteaffilieSql') private readonly mysqlVisiteaffilie: typeof VisiteaffilieSql,
        @Inject('ServiceSql') private readonly mysqlService: typeof ServiceSql,
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_ampasamadinika') private readonly connexion: Connection,
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


      async syncToMongooseFonction() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlFonction as any,
            this.mongooseFonction
        );
      }
    
      async syncToSequelizeFonction() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlFonction as any,
            this.mongooseFonction
        );
      }
      async updateFonctioninMongodbFonction(){
        return await this.syncservicebase.update(
            this.mysqlFonction as any,
            this.mongooseFonction,
            'sequelize'
        );
      }
      async updateFonctioninSequelizeFonction(){
        return await this.syncservicebase.update(
            this.mysqlFonction as any,
            this.mongooseFonction,
            'mongoose'
        );
      }

      // visiteqffilie
      async syncToMongooseVisiteaffilie() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlVisiteaffilie as any,
            this.mongooseVisiteaffilie
        );
      }
    
      async syncToSequelizeVisiteaffilie() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlVisiteaffilie as any,
            this.mongooseVisiteaffilie
        );
      }
      async updateVisiteaffilieinMongodbVisiteaffilie(){
        return await this.syncservicebase.update(
            this.mysqlVisiteaffilie as any,
            this.mongooseVisiteaffilie,
            'sequelize'
        );
      }
      async updateVisiteaffilieinSequelizeVisiteaffilie(){
        return await this.syncservicebase.update(
            this.mysqlVisiteaffilie as any,
            this.mongooseVisiteaffilie,
            'mongoose'
        );
      }

      // Service
      async syncToMongooseService() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlService as any,
            this.mongooseService
        );
      }
    
      async syncToSequelizeService() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlService as any,
            this.mongooseService
        );
      }
      async updateServiceinMongodbService(){
        return await this.syncservicebase.update(
            this.mysqlService as any,
            this.mongooseService,
            'sequelize'
        );
      }
      async updateServiceinSequelizeService(){
        return await this.syncservicebase.update(
            this.mysqlService as any,
            this.mongooseService,
            'mongoose'
        );
      }
}
