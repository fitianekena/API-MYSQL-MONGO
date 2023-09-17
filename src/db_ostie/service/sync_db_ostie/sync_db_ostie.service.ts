
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Adherent as MongoDBAdherent} from 'src/db_ostie/schema/mongodb/adherent.schema';
import { Adherent as MySQLAdherent} from 'src/db_ostie/schema/mysql/adherent.schema';

import { SyncroService } from 'src/syncro.service';


@Injectable()
export default class SyncDbOstieService {
  constructor(
    @InjectModel(MongoDBAdherent.name) private readonly mongooseAdherent: Model<MongoDBAdherent>,
    @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
    @Inject('AdherentSql') private readonly mysqlAdherent: typeof MySQLAdherent,
    private readonly syncservicebase:SyncroService,
  ) {}

  async syncToMongoose() {
    return await this.syncservicebase.synchronizeToMongoose(
        this.mysqlAdherent as any,
        this.mongooseAdherent
    );
  }

  async syncToSequelize() {
    return await this.syncservicebase.synchronizeToSequelize(
        this.mysqlAdherent as any,
        this.mongooseAdherent
    );
  }
  async updateAdherentinMongodb(){
    return await this.syncservicebase.update(
        this.mysqlAdherent as any,
        this.mongooseAdherent,
        'sequelize'
    );
  }
}
