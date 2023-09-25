import { Test, TestingModule } from '@nestjs/testing';
import { DbOstieService } from './db_ostie.service';

describe('DbOstieService', () => {
  let service: DbOstieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbOstieService],
    }).compile();

    service = module.get<DbOstieService>(DbOstieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
