import { Controller,Param,Post } from '@nestjs/common';
import { CentreService } from 'src/db_behoririka/service/centre/centre.service';
import { SyncroService } from 'src/syncro.service';
import { ServicesSyncro } from './servicesSyncro.service';
import { Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document } from 'mongoose';


export class ServicesSyncroController<P extends ServicesSyncro<any,any>> {
    constructor(
        private readonly servicesSyncro:P,
    ){
        
    }
    @Post('/sql-to-mongo')
  async syncCentreSQLtoMongo(): Promise<string> {
    return this.servicesSyncro.synchronizeToMongoose();
  }
  @Post('/mongo-to-sql')
  async syncCentreMongotoSQL(): Promise<string> {
    return this.servicesSyncro.synchronizeToSequelize();
  }
  @Post('update/sql-to-mongo')
  async updatesyncCentreMongotoSQL(): Promise<any> {
    return this.servicesSyncro.updateMongo();
  }
  @Post('update/mongo-to-sql')
  async updatesyncCentreSQLtoMongo(): Promise<any> {
    return this.servicesSyncro.updateSql();
  }
  @Post('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<any> {
    return this.servicesSyncro.synchronizeModelSqlToMongoose(id);
  }
  @Post('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<any> {
    return this.servicesSyncro.synchronizeModelsMongooseToSql(id);
  }
  @Post('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<any> {
    return this.servicesSyncro.updatedeleteSql;
  }
  @Post('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<any> {
    return this.servicesSyncro.updatedeleteMongo;
  }

  
}
