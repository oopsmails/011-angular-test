import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';

@NgModule({
  declarations: [AppNavBarComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild([])],
  exports: [AppNavBarComponent],
})
export class CoreModule {}
