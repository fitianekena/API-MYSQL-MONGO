import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Centre as MongoDBCentre} from 'src/db_24mklen/schema/mongodb/centre.schema';
import { Centre as MySQLCentre} from 'src/db_24mklen/schema/mysql/centre.schema';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
@Injectable()
export class CentreService extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection>{
    constructor(
        @InjectModel(MongoDBCentre.name,'db_24mklen') private readonly mongooseCentre: Model<MongoDBCentre>,
        
        
        @Inject('CentreSql') private readonly mysqlCentre: typeof MySQLCentre,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_24mklen') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlCentre as any,mongooseCentre as any,connexion);
      }
    

}
