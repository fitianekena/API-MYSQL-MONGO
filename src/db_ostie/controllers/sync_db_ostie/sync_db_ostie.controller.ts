import { Controller,Post } from '@nestjs/common';
import SyncDbOstieService from 'src/db_ostie/service/sync_db_ostie/sync_db_ostie.service';

@Controller('sync-db-ostie')
export class SyncDbOstieController {
    constructor(
        private readonly syncronisationservice:SyncDbOstieService,
    ){}
    @Post('/adherent/sql-to-mongo')
  async syncAdherentSQLtoMongo(): Promise<string> {
    return this.syncronisationservice.syncToMongoose();
  }
  @Post('/adherent/mongo-to-sql')
  async syncAdherentMongotoSQL(): Promise<string> {
    return this.syncronisationservice.syncToSequelize();
  }
  @Post('update/adherent/sql-to-mongo')
  async updatesyncAdherentMongotoSQL(): Promise<void> {
    return this.syncronisationservice.updateAdherentinMongodb();
  }

}
