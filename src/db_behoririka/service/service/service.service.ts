import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Service as ServiceSql } from 'src/db_behoririka/schema/mysql/service.schema'; 
import { Service as ServiceMongo } from 'src/db_behoririka/schema/mongodb/service.schema';
import { SyncroService } from 'src/syncro.service';
@Injectable()
export class ServiceService {
    constructor(
       
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @InjectModel(ServiceMongo.name,'db_behoririka') private readonly mongooseService: Model<ServiceMongo>,
        @Inject('ServiceSql') private readonly mysqlService: typeof ServiceSql,
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_behoririka') private readonly connexion: Connection,
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
      async updateServiceInMongoById(id:string){
        return await this.syncservicebase.synchronizeModelsSqlToMongoose(
           
            this.mysqlService as any,
            this.mongooseService,
            id,
        );
      }
      async updateServiceInMySqlById(id:string){
        return await this.syncservicebase.synchronizeModelsMongooseToSql(
           
            this.mysqlService as any,
            this.mongooseService,
            id,
        );
      }
      async updateDelete(priority: "sequelize"|"mongoose"){
        return await this.syncservicebase.updatedelete(this.mysqlService as any,this.mongooseService,priority);
      }
      
      

}
