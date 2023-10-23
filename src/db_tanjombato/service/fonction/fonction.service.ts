import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Fonction as FonctionMongo, FonctionSchema} from 'src/db_tanjombato/schema/mongodb/fonction.schema';
import { Fonction as FonctionSql} from 'src/db_tanjombato/schema/mysql/fonction.schema';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
@Injectable()
export class FonctionService extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection> {
    constructor(
       
        
        @InjectModel(FonctionMongo.name,'db_tanjombato') private readonly mongooseFonction: Model<FonctionMongo>,
        @Inject('FonctionSql') private readonly mysqlFonction: typeof FonctionSql,
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_tanjombato') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlFonction as any,mongooseFonction as any,connexion);
      }
      

}
