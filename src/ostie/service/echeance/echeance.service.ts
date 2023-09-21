import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Echeance as EcheanceMongo} from 'src/ostie/schema/mongodb/echeance.schema';
import { Echeance as EcheanceSql} from 'src/ostie/schema/mysql/echeance.schema';
import { SyncroService } from 'src/syncro.service';

@Injectable()
export class EcheanceService {
    constructor(
        @InjectModel(EcheanceMongo.name,'ostie') private readonly mongooseEcheance: Model<EcheanceMongo>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('EcheanceSql') private readonly mysqlEcheance: typeof EcheanceSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {}
    async syncToMongooseEcheance() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlEcheance as any,
            this.mongooseEcheance
        );
      }
    
      async syncToSequelizeEcheance() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlEcheance as any,
            this.mongooseEcheance
        );
      }
      async updateEcheanceinMongodbEcheance(){
        return await this.syncservicebase.update(
            this.mysqlEcheance as any,
            this.mongooseEcheance,
            'sequelize'
        );
      }
      async updateEcheanceinSequelizeEcheance(){
        return await this.syncservicebase.update(
            this.mysqlEcheance as any,
            this.mongooseEcheance,
            'mongoose'
        );
      }
      async updateEcheanceInMongoById(id:string){
        return await this.syncservicebase.synchronizeModelsSqlToMongoose(
           
            this.mysqlEcheance as any,
            this.mongooseEcheance,
            id,
        );
      }
      async updateEcheanceInMySqlById(id:string){
        return await this.syncservicebase.synchronizeModelsMongooseToSql(
           
            this.mysqlEcheance as any,
            this.mongooseEcheance,
            id,
        );
      }
      async updateDelete(priority: "sequelize"|"mongoose"){
        return await this.syncservicebase.updatedelete(this.mysqlEcheance as any,this.mongooseEcheance,priority);
      }
}
