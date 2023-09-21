import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Hdec as HdecMongo} from 'src/ostie/schema/mongodb/hdec.schema';
import { Hdec as HdecSql} from 'src/ostie/schema/mysql/hdec.schema';
import { SyncroService } from 'src/syncro.service';


@Injectable()
export class HdecService {
    constructor(
        @InjectModel(HdecMongo.name,'ostie') private readonly mongooseHdec: Model<HdecMongo>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('HdecSql') private readonly mysqlHdec: typeof HdecSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {}
    async syncToMongooseHdec() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlHdec as any,
            this.mongooseHdec
        );
      }
    
      async syncToSequelizeHdec() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlHdec as any,
            this.mongooseHdec
        );
      }
      async updateHdecinMongodbHdec(){
        return await this.syncservicebase.update(
            this.mysqlHdec as any,
            this.mongooseHdec,
            'sequelize'
        );
      }
      async updateHdecinSequelizeHdec(){
        return await this.syncservicebase.update(
            this.mysqlHdec as any,
            this.mongooseHdec,
            'mongoose'
        );
      }
      async updateHdecInMongoById(id:string){
        return await this.syncservicebase.synchronizeModelsSqlToMongoose(
           
            this.mysqlHdec as any,
            this.mongooseHdec,
            id,
        );
      }
      async updateHdecInMySqlById(id:string){
        return await this.syncservicebase.synchronizeModelsMongooseToSql(
           
            this.mysqlHdec as any,
            this.mongooseHdec,
            id,
        );
      }
      async updateDelete(priority: "sequelize"|"mongoose"){
        return await this.syncservicebase.updatedelete(this.mysqlHdec as any,this.mongooseHdec,priority);
      }
}
