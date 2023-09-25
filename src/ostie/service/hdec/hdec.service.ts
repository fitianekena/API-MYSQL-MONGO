import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Hdec as HdecMongo} from 'src/ostie/schema/mongodb/hdec.schema';
import { Hdec as HdecSql} from 'src/ostie/schema/mysql/hdec.schema';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';


@Injectable()
export class HdecService extends ServicesSyncro<MongooseModel<any>,SequelizeModel>{
    constructor(
        @InjectModel(HdecMongo.name,'ostie') private readonly mongooseHdec: Model<HdecMongo>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('HdecSql') private readonly mysqlHdec: typeof HdecSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlHdec as any,mongooseHdec as any);
      }
    
}
