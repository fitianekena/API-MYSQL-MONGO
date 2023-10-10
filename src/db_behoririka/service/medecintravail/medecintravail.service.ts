import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { MedecinTravail as MongoDBMedecinTravail} from 'src/db_behoririka/schema/mongodb/medecinTravail.schema';
import { MedecinTravail as MySQLMedecinTravail} from 'src/db_behoririka/schema/mysql/medecinTravail.schema';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
@Injectable()
export class MedecinTravailService extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection>{
    constructor(
        @InjectModel(MongoDBMedecinTravail.name,'db_behoririka') private readonly mongooseMedecinTravail: Model<MongoDBMedecinTravail>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('MedecinTravailSql') private readonly mysqlMedecinTravail: typeof MySQLMedecinTravail,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_behoririka') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlMedecinTravail as any,mongooseMedecinTravail as any,connexion);
      }
    

}
