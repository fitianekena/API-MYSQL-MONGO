import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Statut as StatutMongo} from 'src/ostie/schema/mongodb/statut.schema';
import { Statut as StatutSql} from 'src/ostie/schema/mysql/statut.schema';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';

@Injectable()
export class StatutService extends ServicesSyncro<MongooseModel<any>,SequelizeModel>{
    constructor(
        @InjectModel(StatutMongo.name,'ostie') private readonly mongooseStatut: Model<StatutMongo>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('StatutSql') private readonly mysqlStatut: typeof StatutSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlStatut as any,mongooseStatut as any);
      }
    

}
