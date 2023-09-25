import { Controller,Param,Post } from '@nestjs/common';
import { CentreService } from 'src/db_behoririka/service/centre/centre.service';


@Controller('db-behoririka/centre')
export class CentreController {
    constructor(
        private readonly centreservice:CentreService,
    ){}
    @Post('/sql-to-mongo')
  async syncCentreSQLtoMongo(): Promise<string> {
    return this.centreservice.synchronizeToMongoose();
  }
  @Post('/mongo-to-sql')
  async syncCentreMongotoSQL(): Promise<string> {
    return this.centreservice.synchronizeToSequelize();
  }
  @Post('update/sql-to-mongo')
  async updatesyncCentreMongotoSQL(): Promise<any> {
    return this.centreservice.updateMongo();
  }
  @Post('update/mongo-to-sql')
  async updatesyncCentreSQLtoMongo(): Promise<any> {
    return this.centreservice.updateSql();
  }
  @Post('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<any> {
    return this.centreservice.synchronizeModelSqlToMongoose(id);
  }
  @Post('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<any> {
    return this.centreservice.synchronizeModelsMongooseToSql(id);
  }
  @Post('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<any> {
    return this.centreservice.updatedeleteSql;
  }
  @Post('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<any> {
    return this.centreservice.updatedeleteMongo;
  }

  
}
