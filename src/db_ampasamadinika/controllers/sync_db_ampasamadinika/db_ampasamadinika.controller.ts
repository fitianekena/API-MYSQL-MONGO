import { Controller,Post } from '@nestjs/common';
import { SyncDbAmpasamadinikaService } from 'src/db_ampasamadinika/service/sync_db_ampasamadinika/sync_db_ampasamadinika.service';

@Controller('db-ampasamadinika')
export class SyncDbAmpasamadinikaController {
    constructor(
        private readonly syncronisationservice:SyncDbAmpasamadinikaService,
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
