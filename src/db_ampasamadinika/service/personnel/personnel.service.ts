import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Personnel as PersonnelMongo, PersonnelSchema} from 'src/db_ampasamadinika/schema/mongodb/personnel.schema';
import { Personnel as PersonnelSql} from 'src/db_ampasamadinika/schema/mysql/personnel.schema';
import { SyncroService } from 'src/syncro.service';
@Injectable()
export class PersonnelService {
    constructor(
       
        @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
        @Inject('PersonnelSql') private readonly mysqlPersonnel: typeof PersonnelSql,
        @InjectModel(PersonnelMongo.name,'db_ampasamadinika') private readonly mongoosePersonnel: Model<PersonnelMongo>,
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_ampasamadinika') private readonly connexion: Connection,
      ) {}
      async syncToMongoosePersonnel() {
        return await this.syncservicebase.synchronizeToMongoose(
            this.mysqlPersonnel as any,
            this.mongoosePersonnel
        );
      }
    
      async syncToSequelizePersonnel() {
        return await this.syncservicebase.synchronizeToSequelize(
            this.mysqlPersonnel as any,
            this.mongoosePersonnel
        );
      }
      async updatePersonnelinMongodbPersonnel(){
        return await this.syncservicebase.update(
            this.mysqlPersonnel as any,
            this.mongoosePersonnel,
            'sequelize'
        );
      }
      async updatePersonnelinSequelizePersonnel(){
        return await this.syncservicebase.update(
            this.mysqlPersonnel as any,
            this.mongoosePersonnel,
            'mongoose'
        );
      }


}
