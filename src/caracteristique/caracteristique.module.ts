import { Module } from '@nestjs/common';
import { InsertionCaracteristiqueController } from './controller/insertion-caracteristique/insertion-caracteristique.controller';
import { InsertServiceService } from './services/insert-service/insert-service.service';
import { DbBehoririka } from 'src/db_behoririka/db_behoririka.module';

@Module({
    imports:[DbBehoririka],
    controllers:[InsertionCaracteristiqueController],
    providers:[InsertServiceService]
})
export class CaracteristiqueModule {
    
}
