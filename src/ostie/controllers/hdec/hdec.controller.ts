import { Controller, Param, Post, Put, Delete } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { HdecService } from 'src/ostie/service/hdec/hdec.service';

@Controller('ostie/hdec')
export class HdecController extends ServicesSyncroController<HdecService>{
    constructor(
        private readonly hdecservice:HdecService,
    ){
      super(hdecservice);
    }
   
}
