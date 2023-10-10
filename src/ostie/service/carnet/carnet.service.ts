import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { Carnet as CarnetMongo} from 'src/ostie/schema/mongodb/carnet.schema';
import { Carnet as CarnetSql} from 'src/ostie/schema/mysql/carnet.schema';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';

@Injectable()
export class CarnetService  extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection>{
    constructor(
        @InjectModel(CarnetMongo.name,'ostie') private readonly mongooseCarnet: Model<CarnetMongo>,
        
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('CarnetSql') private readonly mysqlCarnet: typeof CarnetSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlCarnet as any,mongooseCarnet as any,connexion);
      }
   

}
