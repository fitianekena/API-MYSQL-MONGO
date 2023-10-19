import { Test, TestingModule } from '@nestjs/testing';
import { ChampFilleService } from './champ-fille.service';

describe('ChampFilleService', () => {
  let service: ChampFilleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChampFilleService],
    }).compile();

    service = module.get<ChampFilleService>(ChampFilleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
