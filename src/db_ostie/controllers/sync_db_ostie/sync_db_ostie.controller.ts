import { Controller,Post } from '@nestjs/common';
import SyncDbOstieService from 'src/db_ostie/service/sync_db_ostie/sync_db_ostie.service';

@Controller('sync-db-ostie')
export class SyncDbOstieController {
    constructor(
        private readonly syncronisationservice:SyncDbOstieService,
    ){}
        @Post()
  async syncData(): Promise<string> {
    return this.syncronisationservice.syncToMongoose();
  }
}
