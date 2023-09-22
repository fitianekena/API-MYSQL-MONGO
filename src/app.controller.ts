import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DbBehoririkaService } from './db_behoririka/db_behoririka.service';
import { DbTanjombatoService } from './db_tanjombato/db_tanjombato.service';
import { Db24mklenService } from './db_24mklen/db_24mklen.service';
import { OstieService } from './ostie/ostie.service';
import { DbAmpasamadinikaService } from './db_ampasamadinika/db_ampasamadinika.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly db_behoririkaService:DbBehoririkaService,
    private readonly db_tanjombatoService:DbTanjombatoService,
    private readonly dbmklenService:Db24mklenService,
    private readonly ostieService:OstieService,
    private readonly db_ampsamadinikaService:DbAmpasamadinikaService) {}

  @Post('migrate/all/sql-to-mongo')
  migrerPourToutesLesBases(): any {
    this.db_behoririkaService.migrateallSqlToMongo();
    this.db_ampsamadinikaService.migrateallSqlToMongo();
    this.db_tanjombatoService.migrateallSqlToMongo();
    this.dbmklenService.migrateallSqlToMongo();
    this.ostieService.migrateallSqlToMongo();
  }
  @Post('migrate/all/mongo-to-sql')
  migrerPourToutesLesBasesVersSql(): any {
    this.db_behoririkaService.migrateallMongoToSql();
    this.db_ampsamadinikaService.migrateallMongoToSql();
    this.db_tanjombatoService.migrateallMongoToSql();
    this.dbmklenService.migrateallMongoToSql();
    this.ostieService.migrateallMongoToSql();
  }
}
