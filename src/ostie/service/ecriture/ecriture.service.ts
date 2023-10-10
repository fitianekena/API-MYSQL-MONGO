import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Ecriture as EcritureMongo} from 'src/ostie/schema/mongodb/ecriture.schema';
import { Ecriture as EcritureSql} from 'src/ostie/schema/mysql/ecriture.schema';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';

@Injectable()
export class EcritureService extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection>{
    constructor(
        @InjectModel(EcritureMongo.name,'ostie') private readonly mongooseEcriture: Model<EcritureMongo>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('EcritureSql') private readonly mysqlEcriture: typeof EcritureSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlEcriture as any,mongooseEcriture as any,connexion);
      }
   
}
