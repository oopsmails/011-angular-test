import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HmDatatable6Component } from './hm-datatable6/hm-datatable6.component';

const routes: Routes = [{ path: 'hm/hm-datatable6', component: HmDatatable6Component }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeMadeRoutingModule {}
