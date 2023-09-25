import { Controller } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { RecepdecService } from 'src/ostie/service/recepdec/recepdec.service';

@Controller('ostie/recepdec')
export class RecepdecController extends ServicesSyncroController<RecepdecService>{
    constructor(
        private readonly recepdecservice:RecepdecService,
    ){
      super(recepdecservice);
    }
  

}
