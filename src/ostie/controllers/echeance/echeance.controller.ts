import { Controller, Param, Post, Put, Delete } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { EcheanceService } from 'src/ostie/service/echeance/echeance.service';

@Controller('ostie/echeance')
export class EcheanceController extends ServicesSyncroController<EcheanceService>{
    constructor(
        private readonly echeanceservice:EcheanceService,
    ){
      super(echeanceservice);
    }
  
}
