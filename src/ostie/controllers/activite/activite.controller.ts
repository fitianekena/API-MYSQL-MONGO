import { Controller, Param, Post, Put, Delete } from '@nestjs/common';
import { ActiviteService } from 'src/ostie/service/activite/activite.service';

@Controller('ostie/activite')
export class ActiviteController {
    constructor(
        private readonly activiteservice:ActiviteService,
    ){}
    @Post('/sql-to-mongo')
  async syncActiviteSQLtoMongo(): Promise<string> {
    return this.activiteservice.syncToMongooseActivite();
  }
  
  @Put('update/sql-to-mongo')
  async updatesyncActiviteSql(): Promise<void> {
    return this.activiteservice.updateActiviteinMongodbActivite();
  }
  @Post('/mongo-to-sql')
  async syncActiviteMongotoSQL(): Promise<string> {
    return this.activiteservice.syncToSequelizeActivite();
  }
  @Put('update/mongo-to-sql')
  async updatesyncActiviteMongotoSQL(): Promise<void> {
    return this.activiteservice.updateActiviteinSequelizeActivite();
  }
  @Put('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.activiteservice.updateActiviteInMongoById(id);
  }
  @Put('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.activiteservice.updateActiviteInMySqlById(id);
  }
  @Delete('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.activiteservice.updateDelete('sequelize');
  }
  @Delete('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.activiteservice.updateDelete('mongoose');
  }
}
