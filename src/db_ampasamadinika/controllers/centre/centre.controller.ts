import { Controller,Param,Post } from '@nestjs/common';
import { CentreService } from 'src/db_ampasamadinika/service/centre/centre.service';


@Controller('db-ampasamadinika/centre')
export class CentreController {
    constructor(
        private readonly centreservice:CentreService,
    ){}
    @Post('/sql-to-mongo')
  async syncCentreSQLtoMongo(): Promise<string> {
    return this.centreservice.syncToMongooseCentre();
  }
  @Post('/mongo-to-sql')
  async syncCentreMongotoSQL(): Promise<string> {
    return this.centreservice.syncToSequelizeCentre();
  }
  @Post('update/sql-to-mongo')
  async updatesyncCentreMongotoSQL(): Promise<void> {
    return this.centreservice.updateCentreinMongodbCentre();
  }
  @Post('update/mongo-to-sql')
  async updatesyncCentreSQLtoMongo(): Promise<void> {
    return this.centreservice.updateCentreinSequelizeCentre();
  }

  
}
