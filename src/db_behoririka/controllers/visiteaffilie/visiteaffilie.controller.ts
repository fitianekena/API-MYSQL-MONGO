import { Controller,Inject,Param,Post, Put,Delete} from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { VisiteService } from 'src/db_behoririka/service/visite/visite.service';


@Controller('db_behoririka/visiteAffilie')
export class VisiteAffilieController extends ServicesSyncroController<VisiteService>{
    constructor(
      private readonly visiteAffilieservice:VisiteService,
    ){
      super(visiteAffilieservice)
    }
    
  
}
