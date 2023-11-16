import { Controller, Get } from '@nestjs/common';
import { InsertServiceService } from 'src/caracteristique/services/insert-service/insert-service.service';

@Controller('caracteristique')
export class InsertionCaracteristiqueController {
    constructor(
        private readonly insertionService:InsertServiceService
    ){}
    @Get('insertion')
    insertion(){
        return  this.insertionService.getAllTheVisiteAffilie();
    }

}
