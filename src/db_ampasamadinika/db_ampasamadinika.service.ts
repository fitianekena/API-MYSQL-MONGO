import { Inject, Injectable } from '@nestjs/common';

import { FonctionService } from './service/fonction/fonction.service';
import { PersonnelService } from './service/personnel/personnel.service';
import { ServiceService } from './service/service/service.service';
import { CentreService } from './service/centre/centre.service';
import { VisiteService } from './service/visite/visite.service';
@Injectable()
export class DbAmpasamadinikaService {
    constructor(
        private readonly centreService:CentreService,
        private readonly fonctionService:FonctionService,
        private readonly personnelService:PersonnelService,
        private readonly serviceService:ServiceService,
        private readonly visiteaffilieService:VisiteService,
        
      ) {}
    async migrateallSqlToMongo(){
        try {
            this.centreService.syncToMongooseCentre();
            this.fonctionService.syncToMongooseFonction();
            this.personnelService.syncToMongoosePersonnel();
            this.serviceService.syncToMongooseService();
            this.visiteaffilieService.syncToMongooseVisiteaffilie();
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
            this.visiteaffilieService.syncToSequelizeVisiteaffilie();
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
            this.visiteaffilieService.updateVisiteaffilieinMongodbVisiteaffilie();
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
            this.visiteaffilieService.updateVisiteaffilieinSequelizeVisiteaffilie;
            return "Succes  cette database est maintenant à jour et dispose des données manquants. ";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
    }

}
