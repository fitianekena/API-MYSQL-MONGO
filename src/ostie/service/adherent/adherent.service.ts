import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { Adherent as AdherentMongo} from 'src/ostie/schema/mongodb/adherent.schema';
import { Adherent as AdherentSql} from 'src/ostie/schema/mysql/adherent.schema';
import { SyncroService } from 'src/syncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
@Injectable()
export class AdherentService  extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection>{
    constructor(
    @InjectModel(AdherentMongo.name,'ostie') private readonly mongooseAdherent: Model<AdherentMongo>,
        
        
        @Inject('AdherentSql') private readonly mysqlAdherent: typeof AdherentSql,
        
        private readonly syncservicebase:SyncroService,
        @InjectConnection('ostie') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlAdherent as any,mongooseAdherent as any,connexion);
      }

     
}
