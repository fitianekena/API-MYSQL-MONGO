import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Centre as MongoDBCentre} from 'src/db_ampasamadinika/schema/mongodb/centre.schema';
import { Centre as MySQLCentre} from 'src/db_ampasamadinika/schema/mysql/centre.schema';
import { SyncroService } from 'src/syncro.service';
@Injectable()
export class CentreService {
    constructor(
        @InjectModel(MongoDBCentre.name,'db_ampasamadinika') private readonly mongooseCentre: Model<MongoDBCentre>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('CentreSql') private readonly mysqlCentre: typeof MySQLCentre,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_ampasamadinika') private readonly connexion: Connection,
      ) {}
    async syncToMongooseCentre() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlCentre as any,
            this.mongooseCentre
        );
      }
    
      async syncToSequelizeCentre() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlCentre as any,
            this.mongooseCentre
        );
      }
      async updateCentreinMongodbCentre(){
        return await this.syncservicebase.update(
            this.mysqlCentre as any,
            this.mongooseCentre,
            'sequelize'
        );
      }
      async updateCentreinSequelizeCentre(){
        return await this.syncservicebase.update(
            this.mysqlCentre as any,
            this.mongooseCentre,
            'mongoose'
        );
      }

}
