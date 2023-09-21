import { Test, TestingModule } from '@nestjs/testing';
import { ReglemtController } from './reglemt.controller';

describe('ReglemtController', () => {
  let controller: ReglemtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReglemtController],
    }).compile();

    controller = module.get<ReglemtController>(ReglemtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
