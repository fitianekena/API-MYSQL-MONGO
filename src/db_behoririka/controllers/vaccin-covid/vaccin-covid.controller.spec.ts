import { Test, TestingModule } from '@nestjs/testing';
import { VaccinCovidController } from './vaccin-covid.controller';

describe('VaccinCovidController', () => {
  let controller: VaccinCovidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VaccinCovidController],
    }).compile();

    controller = module.get<VaccinCovidController>(VaccinCovidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
