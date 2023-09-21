import { Test, TestingModule } from '@nestjs/testing';
import { EcheanceController } from './echeance.controller';

describe('EcheanceController', () => {
  let controller: EcheanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EcheanceController],
    }).compile();

    controller = module.get<EcheanceController>(EcheanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
