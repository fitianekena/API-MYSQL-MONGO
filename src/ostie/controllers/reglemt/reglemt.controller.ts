import { Controller } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { ReglemtService } from 'src/ostie/service/reglemt/reglemt.service';

@Controller('ostie/reglemt')
export class ReglemtController extends ServicesSyncroController<ReglemtService>{
    constructor(
        private readonly reglemtservice:ReglemtService,
    ){
      super(reglemtservice);
    }
  
}
