import { Test, TestingModule } from '@nestjs/testing';
import { EcheanceService } from './echeance.service';

describe('EcheanceService', () => {
  let service: EcheanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EcheanceService],
    }).compile();

    service = module.get<EcheanceService>(EcheanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
