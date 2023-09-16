import { Test, TestingModule } from '@nestjs/testing';
import { SyncDbOstieService } from './sync_db_ostie.service';

describe('SyncDbOstieService', () => {
  let service: SyncDbOstieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SyncDbOstieService],
    }).compile();

    service = module.get<SyncDbOstieService>(SyncDbOstieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
