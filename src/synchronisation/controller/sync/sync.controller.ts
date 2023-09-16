// sync.controller.ts

import { Controller, Post } from '@nestjs/common';
import  SyncService  from 'src/synchronisation/service/sync/sync.service';


@Controller('sync')
export class SyncController {
  constructor(private readonly syncService: SyncService) {}

  @Post()
  async syncData(): Promise<string> {
    return this.syncService.syncData();
  }
}
