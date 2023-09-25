import { Controller,Param,Post,Put, Delete } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { ServiceService } from 'src/db_24mklen/service/service/service.service';

@Controller('db_24mklen/service')
export class ServiceController  extends ServicesSyncroController<ServiceService>{
    constructor(
        private readonly serviceservice:ServiceService,
    ){
      super(serviceservice)
    }
   
  
}
