import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Visiteaffilie as VisiteaffilieSql } from 'src/db_ampasamadinika/schema/mysql/visiteaffilie.schema'; 
import { Visiteaffilie as VisiteaffilieMongo } from 'src/db_ampasamadinika/schema/mongodb/visiteaffilie.schema';
import { SyncroService } from 'src/syncro.service';
import { ServicesSyncro } from 'src/commons/servicesSyncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';
@Injectable()
export class VisiteService extends ServicesSyncro<MongooseModel<any>,SequelizeModel,Connection>{
    constructor(
       
        
        @InjectModel(VisiteaffilieMongo.name,'db_ampasamadinika') private readonly mongooseVisiteaffilie: Model<VisiteaffilieMongo>,
        @Inject('VisiteaffilieSql') private readonly mysqlVisiteaffilie: typeof VisiteaffilieSql,
        private readonly syncservicebase:SyncroService,
        @InjectConnection('db_ampasamadinika') private readonly connexion: Connection,
      ) {
        super(syncservicebase,mysqlVisiteaffilie as any, mongooseVisiteaffilie as any,connexion)
      }
      
}
