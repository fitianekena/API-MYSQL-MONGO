import { Module } from '@nestjs/common';
import { MigrationService } from './migration/migration.service';
import { ChampFilleService } from 'src/decoratorServices/champ-fille/champ-fille.service';

@Module({
  providers: [MigrationService,ChampFilleService],
  exports: [MigrationService,ChampFilleService],
})
export class MongoToSqlModule {}
