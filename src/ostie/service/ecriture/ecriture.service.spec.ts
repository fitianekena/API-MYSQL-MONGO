import { Test, TestingModule } from '@nestjs/testing';
import { EcritureService } from './ecriture.service';

describe('EcritureService', () => {
  let service: EcritureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EcritureService],
    }).compile();

    service = module.get<EcritureService>(EcritureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
