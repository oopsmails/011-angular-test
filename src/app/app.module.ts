import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarFixedComponent } from './core/navbar-fixed/navbar-fixed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppInitService } from './core/services/app.init.service';
import { SearchCityComponent } from './example/search/search.city.component';
import { CityFilterPipe } from './example/search/filter/city.filter.pipe';
import { SearchCauseComponent } from './example/search/search.cause.component';
import { RootCauseFilterPipe } from './example/search/filter/root.cause.filter.pipe';
import { SearchInstitutionComponent } from './example/search/search.institution.component';
import { InstitutionFilterPipe } from './example/search/filter/institution.filter.pipe';
import { SearchPlantComponent } from './example/search/search.plant.component';
import { PlantFilterPipe } from './example/search/filter/plant.filter.pipe';
import { InstitutionComponent } from './example/institution/institution.component';
import { StateComponent } from './example/state/state.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

export function appLoadJsonFactory(appInitService: AppInitService) {
  return (): Promise<any> => {
    return appInitService.loadJson();
  }
}

export function getSettingsFactory(appInitService: AppInitService) {
  return () => appInitService.getSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarFixedComponent,
    SearchCityComponent,
    SearchCauseComponent,
    SearchInstitutionComponent,
    SearchPlantComponent,
    InstitutionComponent,
    StateComponent,
    CityFilterPipe,
    PlantFilterPipe,
    InstitutionFilterPipe,
    RootCauseFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,

    AppRoutingModule
  ],
  providers: [ 
    AppInitService,
    { provide: APP_INITIALIZER,useFactory: appLoadJsonFactory, deps: [AppInitService], multi: true},
    { provide: APP_INITIALIZER,useFactory: getSettingsFactory, deps: [AppInitService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
