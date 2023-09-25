import { Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { EcritureService } from 'src/ostie/service/ecriture/ecriture.service';

@Controller('ostie/ecriture')
export class EcritureController extends ServicesSyncroController<EcritureService>{
    constructor(
        private readonly ecritureservice:EcritureService,
    ){
      super(ecritureservice);
    }
  
  
}
