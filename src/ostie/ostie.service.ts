import { Inject, Injectable } from '@nestjs/common';
import { ActiviteService } from './service/activite/activite.service';
import { AdherentService } from './service/adherent/adherent.service';
import { CarnetService } from './service/carnet/carnet.service';
import { CentreService } from './service/centre/centre.service';
import { DetReglService } from './service/det_regl/det_regl.service';
import { EcheanceService } from './service/echeance/echeance.service';
import { EcritureService } from './service/ecriture/ecriture.service';
import { HdecService } from './service/hdec/hdec.service';
import { RecepdecService } from './service/recepdec/recepdec.service';
import { Reglemt } from './schema/mongodb/reglemt.schema';
import { ReglemtService } from './service/reglemt/reglemt.service';
import { StatutService } from './service/statut/statut.service';


@Injectable()
export class OstieService {
    constructor(
        private readonly activiteService:ActiviteService,
        private readonly adherentService:AdherentService,
        private readonly carnetService:CarnetService,
        private readonly centreService:CentreService,
        private readonly det_reglService:DetReglService,
        private readonly echeanceService:EcheanceService,
        private readonly ecritureService:EcritureService,
        private readonly hdecService:HdecService,
        private readonly recepdecService:RecepdecService,
        private readonly reglemtService:ReglemtService,
        private readonly statusService:StatutService,

        
      ) {}
    async migrateallSqlToMongo(){
        try {
            this.centreService.syncToMongooseCentre();
            this.activiteService.syncToMongooseActivite();
            this.det_reglService.syncToMongooseDetRegl();
            this.echeanceService.syncToMongooseEcheance();
            this.ecritureService.syncToMongooseEcriture();
            this.adherentService.syncToMongooseAdherent();
            this.carnetService.syncToMongooseCarnet();
            this.hdecService.syncToMongooseHdec();
            this.recepdecService.syncToMongooseRecepdec;
            this.reglemtService.syncToMongooseReglemt();
            this.statusService.syncToMongooseStatut();
            return "Succes toutes les données ont été  migrés vers MongoDb pour cette database";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
        
        
    }
    async migrateallMongoToSql(){
        try {
            this.centreService.syncToSequelizeCentre();
            this.activiteService.syncToSequelizeActivite();
            this.det_reglService.syncToSequelizeDetRegl();
            this.echeanceService.syncToSequelizeEcheance();
            this.ecritureService.syncToSequelizeEcriture();
            this.adherentService.syncToSequelizeAdherent();
            this.carnetService.syncToSequelizeCarnet();
            this.hdecService.syncToSequelizeHdec();
            this.recepdecService.syncToSequelizeRecepdec;
            this.reglemtService.syncToSequelizeReglemt();
            this.statusService.syncToSequelizeStatut();
            return "Succes toutes les données ont été  migrés vers MySql pour cette database";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
        
        
    }
    async updateMongo(){
        try {
            this.centreService.updateCentreinMongodbCentre();
            this.activiteService.updateActiviteinMongodbActivite();
            this.det_reglService.updateDetReglinMongodbDetRegl();
            this.echeanceService.updateEcheanceinMongodbEcheance();
            this.ecritureService.updateEcritureinMongodbEcriture();
            this.adherentService.updateAdherentinMongodbAdherent();
            this.carnetService.updateCarnetinMongodbCarnet();
            this.hdecService.updateHdecinMongodbHdec();
            this.recepdecService.updateRecepdecinMongodbRecepdec;
            this.reglemtService.updateReglemtinMongodbReglemt();
            this.statusService.updateStatutinMongodbStatut;
            return "Succes  cette database est maintenant à jour et dispose des données manquants. ";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
    }
    async updateSql(){
        try {
            this.centreService.updateCentreinSequelizeCentre();
            this.activiteService.updateActiviteinSequelizeActivite();
            this.det_reglService.updateDetReglinSequelizeDetRegl();
            this.echeanceService.updateEcheanceinSequelizeEcheance();
            this.ecritureService.updateEcritureinSequelizeEcriture();
            this.adherentService.updateAdherentinSequelizeAdherent();
            this.carnetService.updateCarnetinSequelizeCarnet();
            this.hdecService.updateHdecinSequelizeHdec();
            this.recepdecService.updateRecepdecinSequelizeRecepdec;
            this.reglemtService.updateReglemtinSequelizeReglemt();
            this.statusService.updateStatutinSequelizeStatut;
            return "Succes  cette database est maintenant à jour et dispose des données manquants. ";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
    }

}
