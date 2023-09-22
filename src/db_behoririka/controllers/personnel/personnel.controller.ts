import { Controller,Param,Post, Put,Delete} from '@nestjs/common';
import { PersonnelService } from 'src/db_behoririka/service/personnel/personnel.service';

@Controller('db-behoririka/personnel')
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
  @Put('update/sql-to-mongo')
  async updatesyncPersonnelMongotoSQL(): Promise<void> {
    return this.personnelservice.updatePersonnelinMongodbPersonnel();
  }
  @Put('update/mongo-to-sql')
  async updatesyncPersonnelSQLtoMongo(): Promise<void> {
    return this.personnelservice.updatePersonnelinSequelizePersonnel();
  }
  @Put('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.personnelservice.updatePersonnelInMongoById(id);
  }
  @Put('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.personnelservice.updatePersonnelInMySqlById(id);
  }
  @Delete('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.personnelservice.updateDelete('sequelize');
  }
  @Delete('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.personnelservice.updateDelete('mongoose');
  }
  
}
