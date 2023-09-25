import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Centre as MongoDBCentre} from 'src/db_behoririka/schema/mongodb/centre.schema';
import { Centre as MySQLCentre} from 'src/db_behoririka/schema/mysql/centre.schema';
import { ServicesSyncro } from 'src/servicesSyncro.service';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
@Injectable()
export class CentreService extends ServicesSyncro<MongooseModel<any>,SequelizeModel>{
    constructor(
        @InjectModel(MongoDBCentre.name,'db_behoririka') private readonly mongooseCentre: Model<MongoDBCentre>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('CentreSql') private readonly mysqlCentre: typeof MySQLCentre,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_behoririka') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlCentre as any,mongooseCentre as any);
      }
    

}
