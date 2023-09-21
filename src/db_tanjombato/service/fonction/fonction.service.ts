import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Fonction as FonctionMongo, FonctionSchema} from 'src/db_tanjombato/schema/mongodb/fonction.schema';
import { Fonction as FonctionSql} from 'src/db_tanjombato/schema/mysql/fonction.schema';
import { SyncroService } from 'src/syncro.service';
@Injectable()
export class FonctionService {
    constructor(
       
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @InjectModel(FonctionMongo.name,'db_tanjombato') private readonly mongooseFonction: Model<FonctionMongo>,
        @Inject('FonctionSql') private readonly mysqlFonction: typeof FonctionSql,
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_tanjombato') private readonly connexion: Connection,
      ) {}
      async syncToMongooseFonction() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlFonction as any,
            this.mongooseFonction
        );
      }
    
      async syncToSequelizeFonction() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlFonction as any,
            this.mongooseFonction
        );
      }
      async updateFonctioninMongodbFonction(){
        return await this.syncservicebase.update(
            this.mysqlFonction as any,
            this.mongooseFonction,
            'sequelize'
        );
      }
      async updateFonctioninSequelizeFonction(){
        return await this.syncservicebase.update(
            this.mysqlFonction as any,
            this.mongooseFonction,
            'mongoose'
        );
      }
      async updateFonctionInMongoById(id:string){
        return await this.syncservicebase.synchronizeModelsSqlToMongoose(
           
            this.mysqlFonction as any,
            this.mongooseFonction,
            id,
        );
      }
      async updateFonctionInMySqlById(id:string){
        return await this.syncservicebase.synchronizeModelsMongooseToSql(
           
            this.mysqlFonction as any,
            this.mongooseFonction,
            id,
        );
      }
      async updateDelete(priority: "sequelize"|"mongoose"){
        return await this.syncservicebase.updatedelete(this.mysqlFonction as any,this.mongooseFonction,priority);
      }
      

}
