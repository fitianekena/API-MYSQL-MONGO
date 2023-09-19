
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Adherent as MongoDBAdherent} from 'src/db_ostie/schema/mongodb/adherent.schema';
import { Adherent as MySQLAdherent} from 'src/db_ostie/schema/mysql/adherent.schema';
import { Affilie as AffilieMongo, AffilieSchema } from 'src/db_ostie/schema/mongodb/affilie.schema';
import { SyncroService } from 'src/syncro.service';
import { Affilie as AffilieSql} from 'src/db_ostie/schema/mysql/affilie.schema';

@Injectable()
export default class SyncDbOstieService {
  constructor(
    @InjectModel(AffilieMongo.name) private readonly mongooseAffilie: Model<AffilieMongo>,
    @InjectModel(MongoDBAdherent.name) private readonly mongooseAdherent: Model<MongoDBAdherent>,
    @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
    @Inject('AdherentSql') private readonly mysqlAdherent: typeof MySQLAdherent,
    @Inject('AffilieSql') private readonly mysqlAffilie: typeof AffilieSql,
    private readonly syncservicebase:SyncroService,
  ) {}

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
  async updateAdherentinMongodbAdherent(){
    return await this.syncservicebase.update(
        this.mysqlAdherent as any,
        this.mongooseAdherent,
        'sequelize'
    );
  }
  async updateAdherentinSequelizeAdherent(){
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
  async updateAffilieinMongodb(){
    return await this.syncservicebase.update(
      this.mysqlAffilie as any,
      this.mongooseAffilie,
        'sequelize'
    );
  }
  async updateAffilieinSequelize(){
    return await this.syncservicebase.update(
      this.mysqlAffilie as any,
      this.mongooseAffilie,
        'mongoose'
    );
  }
}
