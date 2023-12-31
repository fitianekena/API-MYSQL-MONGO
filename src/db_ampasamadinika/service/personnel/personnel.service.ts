import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { Personnel as PersonnelMongo, PersonnelSchema} from 'src/db_ampasamadinika/schema/mongodb/personnel.schema';
import { Personnel as PersonnelSql} from 'src/db_ampasamadinika/schema/mysql/personnel.schema';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
@Injectable()
export class PersonnelService  extends ServicesSyncro<MongooseModel<any>,SequelizeModel>{
    constructor(
       
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('PersonnelSql') private readonly mysqlPersonnel: typeof PersonnelSql,
        @InjectModel(PersonnelMongo.name,'db_ampasamadinika') private readonly mongoosePersonnel: Model<PersonnelMongo>,
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_ampasamadinika') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlPersonnel as any,mongoosePersonnel as any);
      }
      
}
