//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutionComponent } from './example/institution/institution.component';
import { SearchCauseComponent } from './example/search/search.cause.component';
import { SearchCityComponent } from './example/search/search.city.component';
import { SearchInstitutionComponent } from './example/search/search.institution.component';
import { SearchPlantComponent } from './example/search/search.plant.component';

const routes: Routes = [
  { path: '', component: SearchPlantComponent },
  { path: 'example/search-city', component: SearchCityComponent },
  { path: 'example/search-cause', component: SearchCauseComponent },
  { path: 'example/search-inst', component: SearchInstitutionComponent },
  { path: 'example/inst', component: InstitutionComponent },
  { path: 'example/search-plant', component: SearchPlantComponent },
  { path: '**', component: SearchPlantComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
