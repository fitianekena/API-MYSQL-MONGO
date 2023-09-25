import { Controller, Param, Post, Put, Delete } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { CarnetService } from 'src/ostie/service/carnet/carnet.service';

@Controller('ostie/carnet')
export class CarnetController extends ServicesSyncroController<CarnetService>{
    constructor(
        private readonly carnetservice:CarnetService,
    ){
      super(carnetservice);
    }
    
}
