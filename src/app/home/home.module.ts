import { NgxSelectModule } from 'ngx-select-ex';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { NgxTestComponent } from './pages/ngx-test/ngx.test.component';
import { NgxSelect1Component } from './pages/ngx-select-1/ngx.select.1.component';
import { NgxSelect2Component } from './pages/ngx-select-2/ngx.select.2.component';
import { NgxSelect3Component } from './pages/ngx-select-3/ngx.select.3.component';
import { NgbTypeaheadSearchComponent } from './pages/ngb-typeahead-search/ngb.typeahead.search.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTypeaheadSearchScrollableComponent } from './pages/ngb-typeahead-search-scrollable/ngb.typeahead.search.scrollable.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/ngx-test', component: NgxTestComponent },
  { path: 'home/ngx-select-1', component: NgxSelect1Component },
  { path: 'home/ngx-select-2', component: NgxSelect2Component },
  { path: 'home/ngx-select-3', component: NgxSelect3Component },
  { path: 'home/ngb-typeahead-search', component: NgbTypeaheadSearchComponent },
  {
    path: 'home/ngb-typeahead-search-scrollable',
    component: NgbTypeaheadSearchScrollableComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    NgxTestComponent,
    NgxSelect1Component,
    NgxSelect2Component,
    NgxSelect3Component,
    NgbTypeaheadSearchComponent,
    NgbTypeaheadSearchScrollableComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    NgxSelectModule,
    NgbTypeaheadModule,
    TranslateModule.forRoot(),
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
})
export class HomeModule {}
