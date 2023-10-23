import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { Echeance as EcheanceMongo} from 'src/ostie/schema/mongodb/echeance.schema';
import { Echeance as EcheanceSql} from 'src/ostie/schema/mysql/echeance.schema';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';

@Injectable()
export class EcheanceService extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection>{
    constructor(
        @InjectModel(EcheanceMongo.name,'ostie') private readonly mongooseEcheance: Model<EcheanceMongo>,
        
        
        @Inject('EcheanceSql') private readonly mysqlEcheance: typeof EcheanceSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlEcheance as any,mongooseEcheance as any,connexion);
      }
    
}
