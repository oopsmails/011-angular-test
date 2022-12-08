import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HighlighterPipe } from '../shared/pipes/highlighter.pipe';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: 'home/home', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    TranslateModule.forRoot(),
    RouterModule.forChild(routes),
    HighlighterPipe,
  ],
  exports: [],
})
export class HomeModule {}
