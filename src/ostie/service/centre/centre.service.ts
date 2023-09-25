import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { Centre as CentreMongo} from 'src/ostie/schema/mongodb/centre.schema';
import { Centre as CentreSql} from 'src/ostie/schema/mysql/centre.schema';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';

@Injectable()
export class CentreService extends ServicesSyncro<MongooseModel<any>,SequelizeModel>{
    constructor(
        @InjectModel(CentreMongo.name,'ostie') private readonly mongooseCentre: Model<CentreMongo>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('CentreSql') private readonly mysqlCentre: typeof CentreSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlCentre as any,mongooseCentre as any);
      }
    
}
