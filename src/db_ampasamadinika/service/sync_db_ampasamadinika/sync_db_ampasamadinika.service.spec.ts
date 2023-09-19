import { Test, TestingModule } from '@nestjs/testing';
import { DbAmpasamadinikaService } from './sync_db_ampasamadinika.service';

describe('DbAmpasamadinikaService', () => {
  let service: DbAmpasamadinikaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbAmpasamadinikaService],
    }).compile();

    service = module.get<DbAmpasamadinikaService>(DbAmpasamadinikaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
