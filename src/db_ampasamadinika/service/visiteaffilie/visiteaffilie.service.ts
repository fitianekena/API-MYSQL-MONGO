import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Visiteaffilie as VisiteaffilieSql } from 'src/db_ampasamadinika/schema/mysql/visiteaffilie.schema'; 
import { Visiteaffilie as VisiteaffilieMongo } from 'src/db_ampasamadinika/schema/mongodb/visiteaffilie.schema';
import { SyncroService } from 'src/syncro.service';
@Injectable()
export class VisiteAffilieService {
    constructor(
       
        @InjectModel(VisiteaffilieMongo.name,'db_ampasamadinika') private readonly mongooseVisiteaffilie: Model<VisiteaffilieMongo>,
        @Inject('VisiteaffilieSql') private readonly mysqlVisiteaffilie: typeof VisiteaffilieSql,
        private readonly syncservicebase:SyncroService,
        
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
      
      
      

}
