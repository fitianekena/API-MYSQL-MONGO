import { Controller,Param,Post, Put } from '@nestjs/common';
import { CentreService } from 'src/db_24mklen/service/centre/centre.service';

import { DbBehoririkaService } from './db_behoririka.service';


@Controller('db_behoririka/all')
export class DbBehoririkaController {
    constructor(
        private readonly dbservice:DbBehoririkaService,
    ){}
  @Post('/sql-to-mongo')
  async syncCentreSQLtoMongo(): Promise<string> {
    return this.dbservice.migrateallSqlToMongo();
  }
  @Post('/mongo-to-sql')
  async syncCentreMongotoSQL(): Promise<string> {
    return this.dbservice.migrateallMongoToSql();
  }
  @Put('/update/sql-to-mongo')
  async updateCentreSQLtoMongo(): Promise<string> {
    return this.dbservice.updateMongo();
  }
  @Put('/update/mongo-to-sql')
  async updateCentreMongotoSQL(): Promise<string> {
    return this.dbservice.updateSql();
  }

  
}
