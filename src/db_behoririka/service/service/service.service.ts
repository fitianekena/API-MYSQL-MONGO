import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Service as ServiceSql } from 'src/db_behoririka/schema/mysql/service.schema'; 
import { Service as ServiceMongo } from 'src/db_behoririka/schema/mongodb/service.schema';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
@Injectable()
export class ServiceService extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection>{
    constructor(
       
        
        @InjectModel(ServiceMongo.name,'db_behoririka') private readonly mongooseService: Model<ServiceMongo>,
        @Inject('ServiceSql') private readonly mysqlService: typeof ServiceSql,
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_behoririka') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlService as any,mongooseService as any,connexion);
      }
      

}
