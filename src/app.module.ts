import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbOstieModule } from './db_ostie/db_ostie.module';
import { OstieModule } from './ostie/ostie.module';
import { DbBehoririkaModule } from './db_behoririka/db_behoririka.module';
import { DbAmpasamadinikaModule } from './db_ampasamadinika/db_ampasamadinika.module';
import { DbTanjombatoModule } from './db_tanjombato/db_tanjombato.module';
import { Db24mklenModule } from './db_24mklen/db_24mklen.module';

@Module({
  imports:[
     DbOstieModule,
     OstieModule,
     DbBehoririkaModule,
     DbAmpasamadinikaModule,
     DbTanjombatoModule,
     Db24mklenModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
