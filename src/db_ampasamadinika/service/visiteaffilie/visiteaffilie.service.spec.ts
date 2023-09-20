import { Test, TestingModule } from '@nestjs/testing';
import { VisiteAffilieService } from './visiteaffilie.service';

describe('VisiteaffilieService', () => {
  let service: VisiteAffilieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisiteAffilieService],
    }).compile();

    service = module.get<VisiteAffilieService>(VisiteAffilieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
