import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { Affilie as AffilieMongo, AffilieSchema} from 'src/db_ostie/schema/mongodb/affilie.schema';
import { Affilie as AffilieSql} from 'src/db_ostie/schema/mysql/affilie.schema';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
@Injectable()
export class AffilieService extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection>{
    constructor(
        
        @InjectModel(AffilieMongo.name,'db_ostie') private readonly mongooseAffilie: Model<AffilieMongo>,
        @Inject('AffilieSql') private readonly mysqlAffilie: typeof AffilieSql,
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_ostie') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlAffilie as any,mongooseAffilie as any,connexion)
      }
      
}
