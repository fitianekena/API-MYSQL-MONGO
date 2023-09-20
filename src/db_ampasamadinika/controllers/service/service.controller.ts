import { Controller,Param,Post } from '@nestjs/common';
import { ServiceService } from 'src/db_ampasamadinika/service/service/service.service';

@Controller('db-ampasamadinika/service')
export class ServiceController {
    constructor(
        private readonly serviceservice:ServiceService,
    ){}
    @Post('/sql-to-mongo')
  async syncServiceSQLtoMongo(): Promise<string> {
    return this.serviceservice.syncToMongooseService();
  }
  @Post('/mongo-to-sql')
  async syncServiceMongotoSQL(): Promise<string> {
    return this.serviceservice.syncToSequelizeService();
  }
  @Post('update/sql-to-mongo')
  async updatesyncServiceMongotoSQL(): Promise<void> {
    return this.serviceservice.updateServiceinMongodbService();
  }
  @Post('update/mongo-to-sql')
  async updatesyncServiceSQLtoMongo(): Promise<void> {
    return this.serviceservice.updateServiceinSequelizeService();
  }

  
}
