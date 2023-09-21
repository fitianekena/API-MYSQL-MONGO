import { Test, TestingModule } from '@nestjs/testing';
import { EcritureController } from './ecriture.controller';

describe('EcritureController', () => {
  let controller: EcritureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EcritureController],
    }).compile();

    controller = module.get<EcritureController>(EcritureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
