import { Inject, Injectable } from '@nestjs/common';
import { AdAffilie } from 'src/test-mongo/schema/ad-affilie.schema';
import { DnsAffilie } from 'src/test-mongo/schema/dns-affilie.schema';

@Injectable()
export class ClassingService {
    constructor(
        @Inject('DnsAffilie')private readonly dnsAffilie:DnsAffilie,
        @Inject('AdAffilie')private readonly adAffilie:AdAffilie
    ){
        this.addClass('DnsAffilie',DnsAffilie);
        this.addClass('AdAffilie',AdAffilie)
    }
   public classMap: Record<string, any> = {};

  // Méthode pour ajouter une classe au Record
  addClass(className: string, classInstance: any) {
    this.classMap[className] = classInstance;
  }

  // Méthode pour obtenir une classe à partir du nom de la classe (string)
  getClass(className: string) {
    return this.classMap[className];
  }
  getClassMap() {
    return this.classMap;
  }
}
