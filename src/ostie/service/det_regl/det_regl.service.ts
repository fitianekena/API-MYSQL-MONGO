import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { DetRegl as DetReglMongo} from 'src/ostie/schema/mongodb/detregl.schema';
import { DetRegl as DetReglSql} from 'src/ostie/schema/mysql/det_regl.schema';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';


@Injectable()
export class DetReglService extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection>{
    constructor(
        @InjectModel(DetReglMongo.name,'ostie') private readonly mongooseDetRegl: Model<DetReglMongo>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('DetReglSql') private readonly mysqlDetRegl: typeof DetReglSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlDetRegl as any,mongooseDetRegl as any,connexion);
      }
  

}
