import { Controller,Param,Post } from '@nestjs/common';
import { CentreService } from 'src/db_24mklen/service/centre/centre.service';

import {  DbTanjombatoService } from './db_tanjombato.service';


@Controller('db-tanjombato/all')
export class DbTanjombatoController {
    constructor(
        private readonly dbservice:DbTanjombatoService,
    ){}
  @Post('/sql-to-mongo')
  async syncCentreSQLtoMongo(): Promise<string> {
    return this.dbservice.migrateallSqlToMongo();
  }
  @Post('/mongo-to-sql')
  async syncCentreMongotoSQL(): Promise<string> {
    return this.dbservice.migrateallMongoToSql();
  }
  @Post('/update/sql-to-mongo')
  async updateCentreSQLtoMongo(): Promise<string> {
    return this.dbservice.updateMongo();
  }
  @Post('/update/mongo-to-sql')
  async updateCentreMongotoSQL(): Promise<string> {
    return this.dbservice.updateSql();
  }

  
}
