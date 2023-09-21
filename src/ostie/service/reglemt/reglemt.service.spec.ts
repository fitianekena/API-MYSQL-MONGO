import { Test, TestingModule } from '@nestjs/testing';
import { ReglemtService } from './reglemt.service';

describe('ReglemtService', () => {
  let service: ReglemtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReglemtService],
    }).compile();

    service = module.get<ReglemtService>(ReglemtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
