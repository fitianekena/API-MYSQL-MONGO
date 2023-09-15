import { Module } from '@nestjs/common';
import { SyncserviceService } from './syncservice/syncservice.service';

@Module({
  providers: [SyncserviceService]
})
export class SynchronisationModule {}
