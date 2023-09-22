import { Controller,Param,Post, Put } from '@nestjs/common';
import { CentreService } from 'src/db_24mklen/service/centre/centre.service';
import { OstieService } from './ostie.service';




@Controller('ostie/all')
export class OstieController {
    constructor(
        private readonly ostieservice:OstieService,
    ){}
  @Post('/sql-to-mongo')
  async syncCentreSQLtoMongo(): Promise<string> {
    return this.ostieservice.migrateallSqlToMongo();
  }
  @Post('/mongo-to-sql')
  async syncCentreMongotoSQL(): Promise<string> {
    return this.ostieservice.migrateallMongoToSql();
  }
  @Put('/update/sql-to-mongo')
  async updateCentreSQLtoMongo(): Promise<string> {
    return this.ostieservice.updateMongo();
  }
  @Put('/update/mongo-to-sql')
  async updateCentreMongotoSQL(): Promise<string> {
    return this.ostieservice.updateSql();
  }

  
}
