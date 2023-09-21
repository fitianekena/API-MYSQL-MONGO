import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Statut as StatutMongo} from 'src/ostie/schema/mongodb/statut.schema';
import { Statut as StatutSql} from 'src/ostie/schema/mysql/statut.schema';
import { SyncroService } from 'src/syncro.service';

@Injectable()
export class StatutService {
    constructor(
        @InjectModel(StatutMongo.name,'ostie') private readonly mongooseStatut: Model<StatutMongo>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('StatutSql') private readonly mysqlStatut: typeof StatutSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {}
    async syncToMongooseStatut() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlStatut as any,
            this.mongooseStatut
        );
      }
    
      async syncToSequelizeStatut() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlStatut as any,
            this.mongooseStatut
        );
      }
      async updateStatutinMongodbStatut(){
        return await this.syncservicebase.update(
            this.mysqlStatut as any,
            this.mongooseStatut,
            'sequelize'
        );
      }
      async updateStatutinSequelizeStatut(){
        return await this.syncservicebase.update(
            this.mysqlStatut as any,
            this.mongooseStatut,
            'mongoose'
        );
      }
      async updateStatutInMongoById(id:string){
        return await this.syncservicebase.synchronizeModelsSqlToMongoose(
           
            this.mysqlStatut as any,
            this.mongooseStatut,
            id,
        );
      }
      async updateStatutInMySqlById(id:string){
        return await this.syncservicebase.synchronizeModelsMongooseToSql(
           
            this.mysqlStatut as any,
            this.mongooseStatut,
            id,
        );
      }
      async updateDelete(priority: "sequelize"|"mongoose"){
        return await this.syncservicebase.updatedelete(this.mysqlStatut as any,this.mongooseStatut,priority);
      }

}
