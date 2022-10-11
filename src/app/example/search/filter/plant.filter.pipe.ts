import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PlantFilterPipe'
})
export class PlantFilterPipe implements PipeTransform {

  transform(value: any, param: any): any {
    console.log(`PlantFilterPipe: `, param);
    return value.filter(
      (x) =>
        param == null ||
        param == '' ||
        x?.name.toLocaleLowerCase().includes(param.toLocaleLowerCase()) ||
        x?.scientific_name.toLocaleLowerCase().includes(param.toLocaleLowerCase()) ||
        x?.family?.toLocaleLowerCase().includes(param.toLocaleLowerCase())
    );
  }

}
