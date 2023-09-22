import { Controller,Param, Post } from '@nestjs/common';
import { DbOstieService } from './db_ostie.service';

@Controller('db-ostie/all')
export class DbOstieController {
    constructor(
        private readonly dbservice:DbOstieService,
    ){}
  @Post('/sql-to-mongo')
  async syncAdherentSQLtoMongo(): Promise<string> {
    return this.dbservice.migrateallSqlToMongo();
  }
  @Post('/mongo-to-sql')
  async syncAdherentMongotoSQL(): Promise<string> {
    return this.dbservice.migrateallMongoToSql();
  }
  @Post('/update/sql-to-mongo')
  async updateAdherentSQLtoMongo(): Promise<string> {
    return this.dbservice.updateMongo();
  }
  @Post('/update/mongo-to-sql')
  async updateAdherentMongotoSQL(): Promise<string> {
    return this.dbservice.updateSql();
  }
}
