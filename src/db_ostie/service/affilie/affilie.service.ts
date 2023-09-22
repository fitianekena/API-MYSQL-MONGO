import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Affilie as AffilieMongo, AffilieSchema} from 'src/db_ostie/schema/mongodb/affilie.schema';
import { Affilie as AffilieSql} from 'src/db_ostie/schema/mysql/affilie.schema';
import { SyncroService } from 'src/syncro.service';

@Injectable()
export class AffilieService {
    constructor(
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @InjectModel(AffilieMongo.name,'db_ostie') private readonly mongooseAffilie: Model<AffilieMongo>,
        @Inject('AffilieSql') private readonly mysqlAffilie: typeof AffilieSql,
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_ostie') private readonly connexion: Connection,
      ) {}
      async syncToMongooseAffilie() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlAffilie as any,
            this.mongooseAffilie
        );
      }
    
      async syncToSequelizeAffilie() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlAffilie as any,
            this.mongooseAffilie
        );
      }
      async updateAffilieinMongodbAffilie(){
        return await this.syncservicebase.update(
            this.mysqlAffilie as any,
            this.mongooseAffilie,
            'sequelize'
        );
      }
      async updateAffilieinSequelizeAffilie(){
        return await this.syncservicebase.update(
            this.mysqlAffilie as any,
            this.mongooseAffilie,
            'mongoose'
        );
      }
      async updateAffilieInMongoById(id:string){
        return await this.syncservicebase.synchronizeModelsSqlToMongoose(
           
            this.mysqlAffilie as any,
            this.mongooseAffilie,
            id,
        );
      }
      async updateAffilieInMySqlById(id:string){
        return await this.syncservicebase.synchronizeModelsMongooseToSql(
           
            this.mysqlAffilie as any,
            this.mongooseAffilie,
            id,
        );
      }
      async updateDelete(priority: "sequelize"|"mongoose"){
        return await this.syncservicebase.updatedelete(this.mysqlAffilie as any,this.mongooseAffilie,priority);
      }
      
}
