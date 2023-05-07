import { LocalsharedModule } from './../localshared/localshared.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { OopsLib002Module, SharedModule } from 'oops-lib002';
import { HomeMadeRoutingModule } from './homemade-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomemadeComponent } from './homemade/homemade.component';
import { OopsLib001Module } from 'oops-lib001';

@NgModule({
  declarations: [HomemadeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    SharedModule,
    OopsLib001Module,
    OopsLib002Module,
    LocalsharedModule,
    HomeMadeRoutingModule,
  ],
  exports: [HomemadeComponent],
})
export class HomeMadeModule {}
