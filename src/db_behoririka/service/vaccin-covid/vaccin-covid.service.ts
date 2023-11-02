import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { VaccinCovid as MongoDBVaccinCovid} from 'src/db_behoririka/schema/mongodb/vaccinCovid.schema';
import { VaccinCovid as MySQLVaccinCovid} from 'src/db_behoririka/schema/mysql/vaccinCovid.schema';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
@Injectable()
export class VaccinCovidService extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection>{
    constructor(
        @InjectModel(MongoDBVaccinCovid.name,'db_behoririka') private readonly mongooseVaccinCovid: Model<MongoDBVaccinCovid>,
        
        
        @Inject('VaccinCovidSql') private readonly mysqlVaccinCovid: typeof MySQLVaccinCovid,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_behoririka') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlVaccinCovid as any,mongooseVaccinCovid as any,connexion);
      }
    

}
