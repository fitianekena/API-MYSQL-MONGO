import { Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { StatutService } from 'src/ostie/service/statut/statut.service';

@Controller('ostie/status')
export class StatusController extends ServicesSyncroController<StatutService>{
    constructor(
        private readonly statutservice:StatutService,
    ){
      super(statutservice);
    }
  

}
