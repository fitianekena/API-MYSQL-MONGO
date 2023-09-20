import { Controller,Inject,Param,Post } from '@nestjs/common';
import { VisiteService } from 'src/db_ampasamadinika/service/visite/visite.service';


@Controller('db-ampasamadinika/visiteAffilie')
export class VisiteAffilieController {
    constructor(
      private readonly visiteAffilieservice:VisiteService,
    ){}
    @Post('/sql-to-mongo')
  async syncVisiteAffilieSQLtoMongo(): Promise<string> {
    return this.visiteAffilieservice.syncToMongooseVisiteaffilie();
  }
  @Post('/mongo-to-sql')
  async syncVisiteAffilieMongotoSQL(): Promise<string> {
    return this.visiteAffilieservice.syncToSequelizeVisiteaffilie();
  }
  @Post('update/sql-to-mongo')
  async updatesyncVisiteAffilieMongotoSQL(): Promise<void> {
    return this.visiteAffilieservice.updateVisiteaffilieinMongodbVisiteaffilie();
  }
  @Post('update/mongo-to-sql')
  async updatesyncVisiteAffilieSQLtoMongo(): Promise<void> {
    return this.visiteAffilieservice.updateVisiteaffilieinSequelizeVisiteaffilie();
  }

  
}
