import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Recepdec as RecepdecMongo} from 'src/ostie/schema/mongodb/recepdec.schema';
import { Recepdec as RecepdecSql} from 'src/ostie/schema/mysql/recepdec.schema';
import { SyncroService } from 'src/syncro.service';
@Injectable()
export class RecepdecService {
    constructor(
        @InjectModel(RecepdecMongo.name,'ostie') private readonly mongooseRecepdec: Model<RecepdecMongo>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('RecepdecSql') private readonly mysqlRecepdec: typeof RecepdecSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {}
    async syncToMongooseRecepdec() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlRecepdec as any,
            this.mongooseRecepdec
        );
      }
    
      async syncToSequelizeRecepdec() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlRecepdec as any,
            this.mongooseRecepdec
        );
      }
      async updateRecepdecinMongodbRecepdec(){
        return await this.syncservicebase.update(
            this.mysqlRecepdec as any,
            this.mongooseRecepdec,
            'sequelize'
        );
      }
      async updateRecepdecinSequelizeRecepdec(){
        return await this.syncservicebase.update(
            this.mysqlRecepdec as any,
            this.mongooseRecepdec,
            'mongoose'
        );
      }
      async updateRecepdecInMongoById(id:string){
        return await this.syncservicebase.synchronizeModelsSqlToMongoose(
           
            this.mysqlRecepdec as any,
            this.mongooseRecepdec,
            id,
        );
      }
      async updateRecepdecInMySqlById(id:string){
        return await this.syncservicebase.synchronizeModelsMongooseToSql(
           
            this.mysqlRecepdec as any,
            this.mongooseRecepdec,
            id,
        );
      }
      async updateDelete(priority: "sequelize"|"mongoose"){
        return await this.syncservicebase.updatedelete(this.mysqlRecepdec as any,this.mongooseRecepdec,priority);
      }

}
