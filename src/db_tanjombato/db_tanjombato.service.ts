import { Inject, Injectable } from '@nestjs/common';

import { FonctionService } from './service/fonction/fonction.service';
import { PersonnelService } from './service/personnel/personnel.service';
import { ServiceService } from './service/service/service.service';
import { CentreService } from './service/centre/centre.service';
import { VisiteService } from './service/visite/visite.service';
@Injectable()
export class DbTanjombatoService {
    constructor(
        private readonly centreService:CentreService,
        private readonly fonctionService:FonctionService,
        private readonly personnelService:PersonnelService,
        private readonly serviceService:ServiceService,
        private readonly visiteaffilieService:VisiteService,
        
      ) {}
      async migrateallSqlToMongo(){
        try {
            this.centreService.synchronizeToMongoose();
            this.fonctionService.synchronizeToMongoose();
            this.personnelService.synchronizeToMongoose();
            this.serviceService.synchronizeToMongoose();
            this.visiteaffilieService.synchronizeToMongoose();
            return "Succes toutes les données ont été  migrés vers MongoDb pour cette database";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
        
        
    }
    async migrateallMongoToSql(){
        try {
            this.centreService.synchronizeToSequelize();
            this.fonctionService.synchronizeToSequelize();
            this.personnelService.synchronizeToSequelize();
            this.serviceService.synchronizeToSequelize();
            this.visiteaffilieService.synchronizeToSequelize();
            return "Succes toutes les données ont été  migrés vers MySql pour cette database";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
        
        
    }
    async updateMongo(){
        try {
            this.centreService.updateMongo();
            this.fonctionService.updateMongo();
            this.personnelService.updateMongo();
            this.serviceService.updateMongo();
            this.visiteaffilieService.updateMongo();
            return "Succes  cette database est maintenant à jour et dispose des données manquants. ";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
    }
    async updateSql(){
        try {
            this.centreService.updateSql();
            this.fonctionService.updateSql();
            this.personnelService.updateSql();
            this.serviceService.updateSql();
            this.visiteaffilieService.updateSql();
            return "Succes  cette database est maintenant à jour et dispose des données manquants. ";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
    }

}
