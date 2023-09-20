import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Service as ServiceSql } from 'src/db_ampasamadinika/schema/mysql/service.schema'; 
import { Service as ServiceMongo } from 'src/db_ampasamadinika/schema/mongodb/service.schema';
import { SyncroService } from 'src/syncro.service';
@Injectable()
export class ServiceService {
    constructor(
       
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @InjectModel(ServiceMongo.name,'db_ampasamadinika') private readonly mongooseService: Model<ServiceMongo>,
        @Inject('ServiceSql') private readonly mysqlService: typeof ServiceSql,
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_ampasamadinika') private readonly connexion: Connection,
      ) {}
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
