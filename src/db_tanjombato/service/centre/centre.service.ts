import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Centre as MongoDBCentre} from 'src/db_tanjombato/schema/mongodb/centre.schema';
import { Centre as MySQLCentre} from 'src/db_tanjombato/schema/mysql/centre.schema';
import { SyncroService } from 'src/syncro.service';
@Injectable()
export class CentreService {
    constructor(
        @InjectModel(MongoDBCentre.name,'db_tanjombato') private readonly mongooseCentre: Model<MongoDBCentre>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('CentreSql') private readonly mysqlCentre: typeof MySQLCentre,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_tanjombato') private readonly connexion: Connection,
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
      async updateCentreInMongoById(id:string){
        return await this.syncservicebase.synchronizeModelsSqlToMongoose(
           
            this.mysqlCentre as any,
            this.mongooseCentre,
            id,
        );
      }
      async updateCentreInMySqlById(id:string){
        return await this.syncservicebase.synchronizeModelsMongooseToSql(
           
            this.mysqlCentre as any,
            this.mongooseCentre,
            id,
        );
      }
      async updateDelete(priority: "sequelize"|"mongoose"){
        return await this.syncservicebase.updatedelete(this.mysqlCentre as any,this.mongooseCentre,priority);
      }

}
