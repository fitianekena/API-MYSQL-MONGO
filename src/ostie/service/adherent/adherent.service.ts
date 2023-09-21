import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Adherent as AdherentMongo} from 'src/ostie/schema/mongodb/adherent.schema';
import { Adherent as AdherentSql} from 'src/ostie/schema/mysql/adherent.schema';
import { SyncroService } from 'src/syncro.service';
@Injectable()
export class AdherentService {
    constructor(
    @InjectModel(AdherentMongo.name,'db_behoririka') private readonly mongooseAdherent: Model<AdherentMongo>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('AdherentSql') private readonly mysqlAdherent: typeof AdherentSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_behoririka') private readonly connexion: Connection,
      ) {}

      async syncToMongooseAdherent() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlAdherent as any,
            this.mongooseAdherent
        );
      }
    
      async syncToSequelizeAdherent() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlAdherent as any,
            this.mongooseAdherent
        );
      }
      async updateAdherentinMongodbAdherent(){
        return await this.syncservicebase.update(
            this.mysqlAdherent as any,
            this.mongooseAdherent,
            'sequelize'
        );
      }
      async updateAdherentinSequelizeAdherent(){
        return await this.syncservicebase.update(
            this.mysqlAdherent as any,
            this.mongooseAdherent,
            'mongoose'
        );
      }
      async updateAdherentInMongoById(id:string){
        return await this.syncservicebase.synchronizeModelsSqlToMongoose(
           
            this.mysqlAdherent as any,
            this.mongooseAdherent,
            id,
        );
      }
      async updateAdherentInMySqlById(id:string){
        return await this.syncservicebase.synchronizeModelsMongooseToSql(
           
            this.mysqlAdherent as any,
            this.mongooseAdherent,
            id,
        );
      }
      async updateDelete(priority: "sequelize"|"mongoose"){
        return await this.syncservicebase.updatedelete(this.mysqlAdherent as any,this.mongooseAdherent,priority);
      }
}
