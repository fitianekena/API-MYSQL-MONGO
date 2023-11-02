import { Inject, Injectable } from '@nestjs/common';
import { Activite } from 'src/test-mongo/schema/activite.schema';
import { AdAffilie } from 'src/test-mongo/schema/ad-affilie.schema';
import { AdUsers } from 'src/test-mongo/schema/ad-user.schema';
import { Adherent } from 'src/test-mongo/schema/adherent.schema';
import { BoAffilie } from 'src/test-mongo/schema/bo-affilie.schema';
import { Carnet } from 'src/test-mongo/schema/carnet.schema';
import { Centre } from 'src/test-mongo/schema/centre.schema';
import { DetRegl } from 'src/test-mongo/schema/detregl.schema';
import { DnsAffilie } from 'src/test-mongo/schema/dns-affilie.schema';
import { Echeance } from 'src/test-mongo/schema/echeance.schema';
import { Ecriture } from 'src/test-mongo/schema/ecriture.schema';
import { Fonction } from 'src/test-mongo/schema/fonction.schema';
import { GAdherent } from 'src/test-mongo/schema/g-adherent.schema';
import { Hdec } from 'src/test-mongo/schema/hdec.schema';
import { MedecinTravail } from 'src/test-mongo/schema/medecintravail.schema';
import { Ordonnance } from 'src/test-mongo/schema/ordonnance.schema';
import { Personnel } from 'src/test-mongo/schema/personnel.schema';
import { Recepdec } from 'src/test-mongo/schema/recepdec.schema';
import { Reglemt } from 'src/test-mongo/schema/reglemt.schema';
import { Service } from 'src/test-mongo/schema/service.schema';
import { Statut } from 'src/test-mongo/schema/statut.schema';
import { TypeAdherent } from 'src/test-mongo/schema/type_adherent.schema';
import { VaccinCovid } from 'src/test-mongo/schema/vaccinCovid.schema';
import { Visiteaffilie } from 'src/test-mongo/schema/visiteaffilie.schema';

@Injectable()
export class ClassingService {
    constructor(
        @Inject('DnsAffilie')private readonly dnsAffilie:DnsAffilie,
        @Inject('AdAffilie')private readonly adAffilie:AdAffilie,
        @Inject('Centre')private readonly centre:Centre,
        @Inject('Adherent')private readonly adherent:Adherent,
        @Inject('Fonction')private readonly fonction:Fonction,
        @Inject('GAdherent')private readonly gadherent:GAdherent,
        @Inject('Activite')private readonly activite:Activite,
        @Inject('Carnet')private readonly carnet:Carnet,
        @Inject('DetRegl')private readonly detregl:DetRegl,
        @Inject('Echeance')private readonly echeance:Echeance,
        @Inject('Ecriture')private readonly ecriture:Ecriture,
        @Inject('Hdec')private readonly hdec:Hdec,
        @Inject('MedecinTravail')private readonly medecintravail:MedecinTravail,
        @Inject('Ordonnance')private readonly ordonnance:Ordonnance,
        @Inject('Service')private readonly service:Service,
        @Inject('Personnel')private readonly personnel:Personnel,
        @Inject('Visiteaffilie')private readonly visiteaffilie:Visiteaffilie,
        @Inject('AdUsers')private readonly adusers:AdUsers,
        @Inject('TypeAdherent')private readonly typeusers:TypeAdherent,
        @Inject('VaccinCovid')private readonly vaccin:VaccinCovid,
    ){
        this.addClass('DnsAffilie',DnsAffilie);
        this.addClass('AdAffilie',AdAffilie);
        this.addClass('Centre',Centre);
        this.addClass('Adherent',Adherent);
        this.addClass('Fonction',Fonction);
        this.addClass('GAdherent',GAdherent);
        this.addClass('Activite',Activite);
        this.addClass('Carnet',Carnet);
        this.addClass('DetRegl',DetRegl);
        this.addClass('Echeance',Echeance);
        this.addClass('Ecriture',Ecriture);
        this.addClass('Recepdec',Recepdec);
        this.addClass('Reglemt',Reglemt);
        this.addClass('Hdec',Hdec);
        this.addClass('Statut',Statut);
        this.addClass('BoAffilie',BoAffilie);
        this.addClass('MedecinTravail',MedecinTravail);
        this.addClass('Ordonnance',Ordonnance);
        this.addClass('Service',Service);
        this.addClass('Personnel',Personnel);
        this.addClass('Visiteaffilie',Visiteaffilie);
        this.addClass('AdUsers',AdUsers);
        this.addClass('TypeAdherent',TypeAdherent);
        this.addClass('VaccinCovid',VaccinCovid);
    }
   public classMap: Record<string, any> = {};

  // Méthode pour ajouter une classe au Record
  addClass(className: string, classInstance: any) {
    this.classMap[className] = classInstance;
  }
  getClassNames(): string[] {
    const classNamesArray: string[] = [...Object.keys(this.classMap)];
    return classNamesArray;
  }
  // Méthode pour obtenir une classe à partir du nom de la classe (string)
  getClass(className: string) {
    return this.classMap[className];
  }
  getClassMap() {
    return this.classMap;
  }
}
