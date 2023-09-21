import { Test, TestingModule } from '@nestjs/testing';
import { HdecController } from './hdec.controller';

describe('HdecController', () => {
  let controller: HdecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HdecController],
    }).compile();

    controller = module.get<HdecController>(HdecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
