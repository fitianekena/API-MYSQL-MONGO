import { Test, TestingModule } from '@nestjs/testing';
import { RecepdecService } from './recepdec.service';

describe('RecepdecService', () => {
  let service: RecepdecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecepdecService],
    }).compile();

    service = module.get<RecepdecService>(RecepdecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
