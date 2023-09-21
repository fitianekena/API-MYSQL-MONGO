import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Ecriture as EcritureMongo} from 'src/ostie/schema/mongodb/ecriture.schema';
import { Ecriture as EcritureSql} from 'src/ostie/schema/mysql/ecriture.schema';
import { SyncroService } from 'src/syncro.service';

@Injectable()
export class EcritureService {
    constructor(
        @InjectModel(EcritureMongo.name,'ostie') private readonly mongooseEcriture: Model<EcritureMongo>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('EcritureSql') private readonly mysqlEcriture: typeof EcritureSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {}
    async syncToMongooseEcriture() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlEcriture as any,
            this.mongooseEcriture
        );
      }
    
      async syncToSequelizeEcriture() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlEcriture as any,
            this.mongooseEcriture
        );
      }
      async updateEcritureinMongodbEcriture(){
        return await this.syncservicebase.update(
            this.mysqlEcriture as any,
            this.mongooseEcriture,
            'sequelize'
        );
      }
      async updateEcritureinSequelizeEcriture(){
        return await this.syncservicebase.update(
            this.mysqlEcriture as any,
            this.mongooseEcriture,
            'mongoose'
        );
      }
      async updateEcritureInMongoById(id:string){
        return await this.syncservicebase.synchronizeModelsSqlToMongoose(
           
            this.mysqlEcriture as any,
            this.mongooseEcriture,
            id,
        );
      }
      async updateEcritureInMySqlById(id:string){
        return await this.syncservicebase.synchronizeModelsMongooseToSql(
           
            this.mysqlEcriture as any,
            this.mongooseEcriture,
            id,
        );
      }
      async updateDelete(priority: "sequelize"|"mongoose"){
        return await this.syncservicebase.updatedelete(this.mysqlEcriture as any,this.mongooseEcriture,priority);
      }
}
