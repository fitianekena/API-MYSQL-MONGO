import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { Recepdec as RecepdecMongo} from 'src/ostie/schema/mongodb/recepdec.schema';
import { Recepdec as RecepdecSql} from 'src/ostie/schema/mysql/recepdec.schema';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
@Injectable()
export class RecepdecService extends ServicesSyncro<MongooseModel<any>,SequelizeModel>{
    constructor(
        @InjectModel(RecepdecMongo.name,'ostie') private readonly mongooseRecepdec: Model<RecepdecMongo>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('RecepdecSql') private readonly mysqlRecepdec: typeof RecepdecSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlRecepdec as any,mongooseRecepdec as any);
      }
   
}
