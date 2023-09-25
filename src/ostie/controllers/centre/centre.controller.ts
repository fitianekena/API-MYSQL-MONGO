import { Controller, Param, Post, Put, Delete } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { CentreService } from 'src/ostie/service/centre/centre.service';

@Controller('ostie/centre')
export class CentreController extends ServicesSyncroController<CentreService>{
    constructor(
        private readonly centreservice:CentreService,
    ){
      super(centreservice);
    }
   
}
