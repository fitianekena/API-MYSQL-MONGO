import { Controller,Inject,Param,Post,Put, Delete } from '@nestjs/common';
import { VisiteService } from 'src/db_ampasamadinika/service/visite/visite.service';


@Controller('db_ampasamadinika/visiteAffilie')
export class VisiteAffilieController {
    constructor(
      private readonly visiteAffilieservice:VisiteService,
    ){}
    @Post('/sql-to-mongo')
  async syncVisiteAffilieSQLtoMongo(): Promise<string> {
    return this.visiteAffilieservice.syncToMongooseVisiteaffilie();
  }
  @Post('/mongo-to-sql')
  async syncVisiteAffilieMongotoSQL(): Promise<string> {
    return this.visiteAffilieservice.syncToSequelizeVisiteaffilie();
  }
  @Put('update/sql-to-mongo')
  async updatesyncVisiteAffilieMongotoSQL(): Promise<void> {
    return this.visiteAffilieservice.updateVisiteaffilieinMongodbVisiteaffilie();
  }
  @Put('update/mongo-to-sql')
  async updatesyncVisiteAffilieSQLtoMongo(): Promise<void> {
    return this.visiteAffilieservice.updateVisiteaffilieinSequelizeVisiteaffilie();
  }
  @Put('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.visiteAffilieservice.updateVisiteaffilieInMongoById(id);
  }
  @Put('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.visiteAffilieservice.updateVisiteaffilieInMySqlById(id);
  }
  @Delete('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.visiteAffilieservice.updateDelete('sequelize');
  }
  @Delete('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.visiteAffilieservice.updateDelete('mongoose');
  }

  
}
