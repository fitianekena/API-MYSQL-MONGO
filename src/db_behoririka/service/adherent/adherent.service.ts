import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Adherent as MongoDBAdherent} from 'src/db_behoririka/schema/mongodb/adherent.schema';
import { Adherent as MySQLAdherent} from 'src/db_behoririka/schema/mysql/adherent.schema';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
@Injectable()
export class AdherentService extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection>{
    constructor(
        @InjectModel(MongoDBAdherent.name,'db_behoririka') private readonly mongooseAdherent: Model<MongoDBAdherent>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('AdherentSql') private readonly mysqlAdherent: typeof MySQLAdherent,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_behoririka') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlAdherent as any,mongooseAdherent as any,connexion);
      }
    

}
