import { Inject, Injectable } from '@nestjs/common';

import { FonctionService } from './service/fonction/fonction.service';
import { PersonnelService } from './service/personnel/personnel.service';
import { ServiceService } from './service/service/service.service';
import { CentreService } from './service/centre/centre.service';
@Injectable()
export class Db24mklenService {
    constructor(
        private readonly centreService:CentreService,
        private readonly fonctionService:FonctionService,
        private readonly personnelService:PersonnelService,
        private readonly serviceService:ServiceService,
        
      ) {}
    async migrateallSqlToMongo(){
        try {
            this.centreService.syncToMongooseCentre();
            this.fonctionService.syncToMongooseFonction();
            this.personnelService.syncToMongoosePersonnel();
            this.serviceService.syncToMongooseService();
            return "Succes toutes les données ont été  migrés vers MongoDb pour cette database";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
        
        
    }
    async migrateallMongoToSql(){
        try {
            this.centreService.syncToSequelizeCentre();
            this.fonctionService.syncToSequelizeFonction();
            this.personnelService.syncToSequelizePersonnel();
            this.serviceService.syncToSequelizeService();
            return "Succes toutes les données ont été  migrés vers MySql pour cette database";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
        
        
    }
    async updateMongo(){
        try {
            this.centreService.updateCentreinMongodbCentre();
            this.fonctionService.updateFonctioninMongodbFonction();
            this.personnelService.updatePersonnelinMongodbPersonnel();
            this.serviceService.updateServiceinMongodbService();
            
            return "Succes  cette database est maintenant à jour et dispose des données manquants. ";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
    }
    async updateSql(){
        try {
            this.centreService.updateCentreinSequelizeCentre();
            this.fonctionService.updateFonctioninSequelizeFonction();
            this.personnelService.updatePersonnelinSequelizePersonnel;
            this.serviceService.updateServiceinSequelizeService;
            
            return "Succes  cette database est maintenant à jour et dispose des données manquants. ";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
    }
}
