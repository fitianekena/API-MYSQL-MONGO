import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SynchronisationModule } from './synchronisation/synchronisation.module';

@Module({
  imports: [SynchronisationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
