import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { Reglemt as ReglemtMongo} from 'src/ostie/schema/mongodb/reglemt.schema';
import { Reglemt as ReglemtSql} from 'src/ostie/schema/mysql/reglemt.schema';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';

@Injectable()
export class ReglemtService extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection>{
    constructor(
        @InjectModel(ReglemtMongo.name,'ostie') private readonly mongooseReglemt: Model<ReglemtMongo>,
        
        
        @Inject('ReglemtSql') private readonly mysqlReglemt: typeof ReglemtSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlReglemt as any,mongooseReglemt as any,connexion);
      }
    
}
