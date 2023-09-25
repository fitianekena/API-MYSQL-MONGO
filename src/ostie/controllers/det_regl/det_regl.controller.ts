import { Controller, Param, Post, Put, Delete } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { DetReglService } from 'src/ostie/service/det_regl/det_regl.service';

@Controller('ostie/det_regl')
export class DetReglController extends ServicesSyncroController<DetReglService>{
    constructor(
        private readonly detreglservice:DetReglService,
    ){
      super(detreglservice);
    }
   
}
