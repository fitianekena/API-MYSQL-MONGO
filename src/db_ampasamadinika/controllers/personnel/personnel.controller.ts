import { Controller,Param,Post } from '@nestjs/common';
import { PersonnelService } from 'src/db_ampasamadinika/service/personnel/personnel.service';

@Controller('db-ampasamadinika/personnel')
export class PersonnelController {
    constructor(
        private readonly personnelservice:PersonnelService,
    ){}
    @Post('/sql-to-mongo')
  async syncPersonnelSQLtoMongo(): Promise<string> {
    return this.personnelservice.syncToMongoosePersonnel();
  }
  @Post('/mongo-to-sql')
  async syncPersonnelMongotoSQL(): Promise<string> {
    return this.personnelservice.syncToSequelizePersonnel();
  }
  @Post('update/sql-to-mongo')
  async updatesyncPersonnelMongotoSQL(): Promise<void> {
    return this.personnelservice.updatePersonnelinMongodbPersonnel();
  }
  @Post('update/mongo-to-sql')
  async updatesyncPersonnelSQLtoMongo(): Promise<void> {
    return this.personnelservice.updatePersonnelinSequelizePersonnel();
  }

  
}
