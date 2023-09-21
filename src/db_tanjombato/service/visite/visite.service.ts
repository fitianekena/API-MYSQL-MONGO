import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Visiteaffilie as VisiteaffilieSql } from 'src/db_tanjombato/schema/mysql/visiteaffilie.schema'; 
import { Visiteaffilie as VisiteaffilieMongo } from 'src/db_tanjombato/schema/mongodb/visiteaffilie.schema';
import { SyncroService } from 'src/syncro.service';
@Injectable()
export class VisiteService {
    constructor(
       
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @InjectModel(VisiteaffilieMongo.name,'db_tanjombato') private readonly mongooseVisiteaffilie: Model<VisiteaffilieMongo>,
        @Inject('VisiteaffilieSql') private readonly mysqlVisiteaffilie: typeof VisiteaffilieSql,
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_tanjombato') private readonly connexion: Connection,
      ) {}
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
      async updateVisiteaffilieInMongoById(id:string){
        return await this.syncservicebase.synchronizeModelsSqlToMongoose(
           
            this.mysqlVisiteaffilie as any,
            this.mongooseVisiteaffilie,
            id,
        );
      }
      async updateVisiteaffilieInMySqlById(id:string){
        return await this.syncservicebase.synchronizeModelsMongooseToSql(
           
            this.mysqlVisiteaffilie as any,
            this.mongooseVisiteaffilie,
            id,
        );
      }
      async updateDelete(priority: "sequelize"|"mongoose"){
        return await this.syncservicebase.updatedelete(this.mysqlVisiteaffilie as any,this.mongooseVisiteaffilie,priority);
      }
}
