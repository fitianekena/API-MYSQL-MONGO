import { Controller, Param, Post } from '@nestjs/common';
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
  
  @Post('update/sql-to-mongo')
  async updatesyncStatutSql(): Promise<void> {
    return this.statutservice.updateStatutinMongodbStatut();
  }
  @Post('update/mongo-to-sql')
  async updatesyncStatutMongotoSQL(): Promise<void> {
    return this.statutservice.updateStatutinSequelizeStatut();
  }
  @Post('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.statutservice.updateStatutInMongoById(id);
  }
  @Post('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.statutservice.updateStatutInMySqlById(id);
  }
  @Post('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.statutservice.updateDelete('sequelize');
  }
  @Post('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.statutservice.updateDelete('mongoose');
  }

}
