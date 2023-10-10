import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Affilie as MongoDBAffilie} from 'src/db_behoririka/schema/mongodb/affilie.schema';
import { Affilie as MySQLAffilie} from 'src/db_behoririka/schema/mysql/affilie.schema';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
@Injectable()
export class AffilieService extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection>{
    constructor(
        @InjectModel(MongoDBAffilie.name,'db_behoririka') private readonly mongooseAffilie: Model<MongoDBAffilie>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('AffilieSql') private readonly mysqlAffilie: typeof MySQLAffilie,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_behoririka') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlAffilie as any,mongooseAffilie as any,connexion);
      }
    

}
