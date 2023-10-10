import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Ordonnance as MongoDBOrdonnance} from 'src/db_behoririka/schema/mongodb/ordonnance.schema';
import { Ordonnance as MySQLOrdonnance} from 'src/db_behoririka/schema/mysql/ordonnance.schema';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
@Injectable()
export class OrdonnanceService extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection>{
    constructor(
        @InjectModel(MongoDBOrdonnance.name,'db_behoririka') private readonly mongooseOrdonnance: Model<MongoDBOrdonnance>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('OrdonnanceSql') private readonly mysqlOrdonnance: typeof MySQLOrdonnance,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_behoririka') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlOrdonnance as any,mongooseOrdonnance as any,connexion);
      }
    

}
