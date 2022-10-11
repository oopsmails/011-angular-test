import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'InstitutionFilterPipe'
})
export class InstitutionFilterPipe implements PipeTransform {

  transform(value: any[], param: string): any {
    console.log(`InstitutionFilterPipe: `, param);
    return value.filter(
      (x) =>
        param == null ||
        param == '' ||
        ('' + x?.TRANSFER_ID)?.toLocaleLowerCase().includes(param.toLocaleLowerCase()) ||
        x?.INSTITUTION_NME_EN?.toLocaleLowerCase().includes(param.toLocaleLowerCase()) ||
        x?.PARTNER_NOTES?.toLocaleLowerCase().includes(param.toLocaleLowerCase())
    );
  }

}
