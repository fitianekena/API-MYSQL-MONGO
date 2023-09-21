import { Inject, Injectable } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Activite as ActiviteMongo} from 'src/ostie/schema/mongodb/activite.schema';
import { Activite as ActiviteSql} from 'src/ostie/schema/mysql/activite.schema';
import { SyncroService } from 'src/syncro.service';

@Injectable()
export class ActiviteService {
    constructor(
        @InjectModel(ActiviteMongo.name,'ostie') private readonly mongooseActivite: Model<ActiviteMongo>,
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('ActiviteSql') private readonly mysqlActivite: typeof ActiviteSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {}

      async syncToMongooseActivite() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlActivite as any,
            this.mongooseActivite
        );
      }
    
      async syncToSequelizeActivite() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlActivite as any,
            this.mongooseActivite
        );
      }
      async updateActiviteinMongodbActivite(){
        return await this.syncservicebase.update(
            this.mysqlActivite as any,
            this.mongooseActivite,
            'sequelize'
        );
      }
      async updateActiviteinSequelizeActivite(){
        return await this.syncservicebase.update(
            this.mysqlActivite as any,
            this.mongooseActivite,
            'mongoose'
        );
      }
      async updateActiviteInMongoById(id:string){
        return await this.syncservicebase.synchronizeModelsSqlToMongoose(
           
            this.mysqlActivite as any,
            this.mongooseActivite,
            id,
        );
      }
      async updateActiviteInMySqlById(id:string){
        return await this.syncservicebase.synchronizeModelsMongooseToSql(
           
            this.mysqlActivite as any,
            this.mongooseActivite,
            id,
        );
      }
      async updateDelete(priority: "sequelize"|"mongoose"){
        return await this.syncservicebase.updatedelete(this.mysqlActivite as any,this.mongooseActivite,priority);
      }
}
