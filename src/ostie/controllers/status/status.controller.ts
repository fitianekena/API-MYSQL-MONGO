import { Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { StatutService } from 'src/ostie/service/statut/statut.service';

@Controller('status')
export class StatusController {
    constructor(
        private readonly statutservice:StatutService,
    ){}
    @Post('/sql-to-mongo')
  async syncStatutSQLtoMongo(): Promise<string> {
    return this.statutservice.syncToMongooseStatut();
  }
  @Post('/mongo-to-sql')
  async syncStatutMongotoSQL(): Promise<string> {
    return this.statutservice.syncToSequelizeStatut();
  }
  
  @Put('update/sql-to-mongo')
  async updatesyncStatutSql(): Promise<void> {
    return this.statutservice.updateStatutinMongodbStatut();
  }
  @Put('update/mongo-to-sql')
  async updatesyncStatutMongotoSQL(): Promise<void> {
    return this.statutservice.updateStatutinSequelizeStatut();
  }
  @Put('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.statutservice.updateStatutInMongoById(id);
  }
  @Put('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.statutservice.updateStatutInMySqlById(id);
  }
  @Delete('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.statutservice.updateDelete('sequelize');
  }
  @Delete('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.statutservice.updateDelete('mongoose');
  }

}
