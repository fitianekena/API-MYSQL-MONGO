import { Test, TestingModule } from '@nestjs/testing';
import { RecepdecController } from './recepdec.controller';

describe('RecepdecController', () => {
  let controller: RecepdecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecepdecController],
    }).compile();

    controller = module.get<RecepdecController>(RecepdecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
