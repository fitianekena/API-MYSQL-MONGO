import { Test, TestingModule } from '@nestjs/testing';
import { VaccinCovidService } from './vaccin-covid.service';

describe('VaccinCovidService', () => {
  let service: VaccinCovidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VaccinCovidService],
    }).compile();

    service = module.get<VaccinCovidService>(VaccinCovidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
