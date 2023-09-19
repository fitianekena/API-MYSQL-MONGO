
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectModel as InjectModelSql } from '@nestjs/sequelize';
import { Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Adherent as MongoDBAdherent } from 'src/db_ostie/schema/mongodb/adherent.schema';

import { Affilie as AffilieMongo, AffilieSchema } from 'src/db_ostie/schema/mongodb/affilie.schema';
import { SyncroService } from 'src/syncro.service';
import { Adherent as AdherentSql } from 'src/db_ostie/schema/mysql/adherent.schema';
import { Affilie as AffilieSql } from 'src/db_ostie/schema/mysql/affilie.schema';

@Injectable()
export default class SyncDbOstieService {
  constructor(
    @InjectModel(AffilieMongo.name,'db_ostie_mongo') private readonly mongooseAffilie: Model<AffilieMongo>,
    @InjectModel(MongoDBAdherent.name,'db_ostie_mongo') private readonly mongooseAdherent: Model<MongoDBAdherent>,
    @Inject('SEQUELIZE') private readonly sequelize: Sequelize,
    @InjectModelSql(AdherentSql,'db_ostie_sql') private readonly mysqlAdherent: typeof AdherentSql,
    @InjectModelSql(AffilieSql,'db_ostie_sql') private readonly mysqlAffilie: typeof AffilieSql,
    private readonly syncservicebase: SyncroService,
  ) { }

  async syncToMongooseAdherent() {
    return await this.syncservicebase.synchronizeToMongoose(
      this.mysqlAdherent as any,
      this.mongooseAdherent
    );
  }

  async syncToSequelizeAdherent() {
    return await this.syncservicebase.synchronizeToSequelize(
      this.mysqlAdherent as any,
      this.mongooseAdherent
    );
  }
  async updateAdherentinMongodbAdherent() {
    return await this.syncservicebase.update(
      this.mysqlAdherent as any,
      this.mongooseAdherent,
      'sequelize'
    );
  }
  async updateAdherentinSequelizeAdherent() {
    return await this.syncservicebase.update(
      this.mysqlAdherent as any,
      this.mongooseAdherent,
      'mongoose'
    );
  }
  async syncToMongooseAffilie() {
    return await this.syncservicebase.synchronizeToMongoose(
      this.mysqlAffilie as any,
      this.mongooseAffilie,
    );
  }

  async syncToSequelizeAffilie() {
    return await this.syncservicebase.synchronizeToSequelize(
      this.mysqlAffilie as any,
      this.mongooseAffilie,
    );
  }
  async updateAdherentinMongodbAffilie() {
    return await this.syncservicebase.update(
      this.mysqlAffilie as any,
      this.mongooseAffilie,
      'sequelize'
    );
  }
  async updateAdherentinSequelizeAffilie() {
    return await this.syncservicebase.update(
      this.mysqlAffilie as any,
      this.mongooseAffilie,
      'mongoose'
    );
  }
}
