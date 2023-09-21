import { Controller, Param, Post } from '@nestjs/common';
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
  
  @Post('update/sql-to-mongo')
  async updatesyncActiviteSql(): Promise<void> {
    return this.activiteservice.updateActiviteinMongodbActivite();
  }
  @Post('update/mongo-to-sql')
  async updatesyncActiviteMongotoSQL(): Promise<void> {
    return this.activiteservice.updateActiviteinSequelizeActivite();
  }
  @Post('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.activiteservice.updateActiviteInMongoById(id);
  }
  @Post('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.activiteservice.updateActiviteInMySqlById(id);
  }
  @Post('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.activiteservice.updateDelete('sequelize');
  }
  @Post('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.activiteservice.updateDelete('mongoose');
  }
}
