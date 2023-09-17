import { Controller,Post } from '@nestjs/common';
import SyncDbOstieService from 'src/db_ostie/service/sync_db_ostie/sync_db_ostie.service';

@Controller('sync-db-ostie')
export class SyncDbOstieController {
    constructor(
        private readonly syncronisationservice:SyncDbOstieService,
    ){}
    @Post('/adherent/sql-to-mongo')
  async syncAdherentSQLtoMongo(): Promise<string> {
    return this.syncronisationservice.syncToMongooseAdherent();
  }
  @Post('/adherent/mongo-to-sql')
  async syncAdherentMongotoSQL(): Promise<string> {
    return this.syncronisationservice.syncToSequelizeAdherent();
  }
  @Post('update/adherent/sql-to-mongo')
  async updatesyncAdherentMongotoSQL(): Promise<void> {
    return this.syncronisationservice.updateAdherentinMongodbAdherent();
  }
  @Post('update/adherent/mongo-to-sql')
  async updatesyncAdherentSQLtoMongo(): Promise<void> {
    return this.syncronisationservice.updateAdherentinSequelizeAdherent();
  }
  @Post('/affilie/sql-to-mongo')
  async syncAffilieSQLtoMongo(): Promise<string> {
    return this.syncronisationservice.syncToMongooseAffilie();
  }
  @Post('/affilie/mongo-to-sql')
  async syncAffilieMongotoSQL(): Promise<string> {
    return this.syncronisationservice.syncToSequelizeAffilie();
  }
  @Post('update/affilie/sql-to-mongo')
  async updatesyncAffilieMongotoSQL(): Promise<void> {
    return this.syncronisationservice.updateAdherentinMongodbAffilie();
  }
  @Post('update/affilie/mongo-to-sql')
  async updatesyncAffilieSQLtoMongo(): Promise<void> {
    return this.syncronisationservice.updateAdherentinSequelizeAffilie();
  }

}
