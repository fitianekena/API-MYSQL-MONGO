import { Controller,Param,Post,Put, Delete } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { ServiceService } from 'src/db_ampasamadinika/service/service/service.service';

@Controller('db_ampasamadinika/service')
export class ServiceController  extends ServicesSyncroController<ServiceService>{
    constructor(
        private readonly serviceservice:ServiceService,
    ){
      super(serviceservice)
    }
   
  
}
