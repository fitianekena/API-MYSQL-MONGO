import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Reglemt as ReglemtMongo} from 'src/ostie/schema/mongodb/reglemt.schema';
import { Reglemt as ReglemtSql} from 'src/ostie/schema/mysql/reglemt.schema';
import { SyncroService } from 'src/syncro.service';

@Injectable()
export class ReglemtService {
    constructor(
        @InjectModel(ReglemtMongo.name,'ostie') private readonly mongooseReglemt: Model<ReglemtMongo>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('ReglemtSql') private readonly mysqlReglemt: typeof ReglemtSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {}
    async syncToMongooseReglemt() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlReglemt as any,
            this.mongooseReglemt
        );
      }
    
      async syncToSequelizeReglemt() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlReglemt as any,
            this.mongooseReglemt
        );
      }
      async updateReglemtinMongodbReglemt(){
        return await this.syncservicebase.update(
            this.mysqlReglemt as any,
            this.mongooseReglemt,
            'sequelize'
        );
      }
      async updateReglemtinSequelizeReglemt(){
        return await this.syncservicebase.update(
            this.mysqlReglemt as any,
            this.mongooseReglemt,
            'mongoose'
        );
      }
      async updateReglemtInMongoById(id:string){
        return await this.syncservicebase.synchronizeModelsSqlToMongoose(
           
            this.mysqlReglemt as any,
            this.mongooseReglemt,
            id,
        );
      }
      async updateReglemtInMySqlById(id:string){
        return await this.syncservicebase.synchronizeModelsMongooseToSql(
           
            this.mysqlReglemt as any,
            this.mongooseReglemt,
            id,
        );
      }
      async updateDelete(priority: "sequelize"|"mongoose"){
        return await this.syncservicebase.updatedelete(this.mysqlReglemt as any,this.mongooseReglemt,priority);
      }

}
