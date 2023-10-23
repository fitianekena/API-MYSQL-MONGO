import { Inject, Injectable } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Activite as ActiviteMongo} from 'src/ostie/schema/mongodb/activite.schema';
import { Activite as ActiviteSql} from 'src/ostie/schema/mysql/activite.schema';
import { SyncroService } from 'src/syncro.service';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';

@Injectable()
export class ActiviteService extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection>{
    constructor(
        @InjectModel(ActiviteMongo.name,'ostie') private readonly mongooseActivite: Model<ActiviteMongo>,
        
        @Inject('ActiviteSql') private readonly mysqlActivite: typeof ActiviteSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlActivite as any,mongooseActivite as any,connexion);
      }
}
