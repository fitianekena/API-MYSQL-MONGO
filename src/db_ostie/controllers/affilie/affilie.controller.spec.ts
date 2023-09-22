import { Test, TestingModule } from '@nestjs/testing';
import { AffilieController } from './affilie.controller';

describe('AffilieController', () => {
  let controller: AffilieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AffilieController],
    }).compile();

    controller = module.get<AffilieController>(AffilieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
