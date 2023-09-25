import { Controller, Param, Post, Put, Delete } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { ActiviteService } from 'src/ostie/service/activite/activite.service';

@Controller('ostie/activite')
export class ActiviteController extends ServicesSyncroController<ActiviteService>{
    constructor(
        private readonly activiteservice:ActiviteService,
    ){
      super(activiteservice);
    }
   
}
