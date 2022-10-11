import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'RootCauseFilterPipe'
})
export class RootCauseFilterPipe implements PipeTransform {

  transform(value: any[], param: string): any {
    console.log(`RootCauseFilterPipe: `, param);
    return value.filter(
      (x) =>
        param == null ||
        param == '' ||
        x.commit_id.toLocaleLowerCase().includes(param.toLocaleLowerCase()) ||
        x.gerrit.toLocaleLowerCase().includes(param.toLocaleLowerCase()) ||
        x?.Failure_signature?.toLocaleLowerCase().includes(param.toLocaleLowerCase())
    );
  }

}
