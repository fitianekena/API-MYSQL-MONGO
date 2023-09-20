import { Controller,Inject,Param,Post } from '@nestjs/common';
import { VisiteService } from 'src/db_tanjombato/service/visite/visite.service';



@Controller('db-tanjombato/visiteAffilie')
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
  @Post('update/sql-to-mongo')
  async updatesyncVisiteAffilieMongotoSQL(): Promise<void> {
    return this.visiteAffilieservice.updateVisiteaffilieinMongodbVisiteaffilie();
  }
  @Post('update/mongo-to-sql')
  async updatesyncVisiteAffilieSQLtoMongo(): Promise<void> {
    return this.visiteAffilieservice.updateVisiteaffilieinSequelizeVisiteaffilie();
  }
  @Post('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.visiteAffilieservice.updateVisiteaffilieInMongoById(id);
  }
  @Post('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.visiteAffilieservice.updateVisiteaffilieInMySqlById(id);
  }
  @Post('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.visiteAffilieservice.updateDelete('sequelize');
  }
  @Post('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.visiteAffilieservice.updateDelete('mongoose');
  }

  
}
