import { Controller,Inject,Param,Post, Put,Delete} from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { VisiteService } from 'src/db_tanjombato/service/visite/visite.service';


@Controller('db_tanjombato/visiteAffilie')
export class VisiteAffilieController extends ServicesSyncroController<VisiteService>{
    constructor(
      private readonly visiteAffilieservice:VisiteService,
    ){
      super(visiteAffilieservice)
    }
    
  
}
