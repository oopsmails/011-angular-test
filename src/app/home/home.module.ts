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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/ngx-test', component: NgxTestComponent },
];

@NgModule({
  declarations: [HomeComponent, NgxTestComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    NgxSelectModule,
    TranslateModule.forRoot(),
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
})
export class HomeModule {}
