import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Carnet as CarnetMongo} from 'src/ostie/schema/mongodb/carnet.schema';
import { Carnet as CarnetSql} from 'src/ostie/schema/mysql/carnet.schema';
import { SyncroService } from 'src/syncro.service';

@Injectable()
export class CarnetService {
    constructor(
        @InjectModel(CarnetMongo.name,'ostie') private readonly mongooseCarnet: Model<CarnetMongo>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('CarnetSql') private readonly mysqlCarnet: typeof CarnetSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {}
    async syncToMongooseCarnet() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlCarnet as any,
            this.mongooseCarnet
        );
      }
    
      async syncToSequelizeCarnet() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlCarnet as any,
            this.mongooseCarnet
        );
      }
      async updateCarnetinMongodbCarnet(){
        return await this.syncservicebase.update(
            this.mysqlCarnet as any,
            this.mongooseCarnet,
            'sequelize'
        );
      }
      async updateCarnetinSequelizeCarnet(){
        return await this.syncservicebase.update(
            this.mysqlCarnet as any,
            this.mongooseCarnet,
            'mongoose'
        );
      }
      async updateCarnetInMongoById(id:string){
        return await this.syncservicebase.synchronizeModelsSqlToMongoose(
           
            this.mysqlCarnet as any,
            this.mongooseCarnet,
            id,
        );
      }
      async updateCarnetInMySqlById(id:string){
        return await this.syncservicebase.synchronizeModelsMongooseToSql(
           
            this.mysqlCarnet as any,
            this.mongooseCarnet,
            id,
        );
      }
      async updateDelete(priority: "sequelize"|"mongoose"){
        return await this.syncservicebase.updatedelete(this.mysqlCarnet as any,this.mongooseCarnet,priority);
      }

}
