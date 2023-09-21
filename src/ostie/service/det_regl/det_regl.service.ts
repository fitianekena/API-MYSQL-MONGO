import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { DetRegl as DetReglMongo} from 'src/ostie/schema/mongodb/detregl.schema';
import { DetRegl as DetReglSql} from 'src/ostie/schema/mysql/det_regl.schema';
import { SyncroService } from 'src/syncro.service';


@Injectable()
export class DetReglService {
    constructor(
        @InjectModel(DetReglMongo.name,'ostie') private readonly mongooseDetRegl: Model<DetReglMongo>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('DetReglSql') private readonly mysqlDetRegl: typeof DetReglSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {}
    async syncToMongooseDetRegl() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlDetRegl as any,
            this.mongooseDetRegl
        );
      }
    
      async syncToSequelizeDetRegl() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlDetRegl as any,
            this.mongooseDetRegl
        );
      }
      async updateDetReglinMongodbDetRegl(){
        return await this.syncservicebase.update(
            this.mysqlDetRegl as any,
            this.mongooseDetRegl,
            'sequelize'
        );
      }
      async updateDetReglinSequelizeDetRegl(){
        return await this.syncservicebase.update(
            this.mysqlDetRegl as any,
            this.mongooseDetRegl,
            'mongoose'
        );
      }
      async updateDetReglInMongoById(id:string){
        return await this.syncservicebase.synchronizeModelsSqlToMongoose(
           
            this.mysqlDetRegl as any,
            this.mongooseDetRegl,
            id,
        );
      }
      async updateDetReglInMySqlById(id:string){
        return await this.syncservicebase.synchronizeModelsMongooseToSql(
           
            this.mysqlDetRegl as any,
            this.mongooseDetRegl,
            id,
        );
      }
      async updateDelete(priority: "sequelize"|"mongoose"){
        return await this.syncservicebase.updatedelete(this.mysqlDetRegl as any,this.mongooseDetRegl,priority);
      }

}
