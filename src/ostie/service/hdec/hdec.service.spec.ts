import { Test, TestingModule } from '@nestjs/testing';
import { HdecService } from './hdec.service';

describe('HdecService', () => {
  let service: HdecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HdecService],
    }).compile();

    service = module.get<HdecService>(HdecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
