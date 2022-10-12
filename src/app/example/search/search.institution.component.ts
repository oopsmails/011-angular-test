import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppInitService } from 'src/app/core/services/app.init.service';
import { APP_CONFIG_JSON } from 'src/app/core/settings';

@Component({
  selector: 'search-institute',
  templateUrl: './search.institution.component.html',
  // styleUrls: ['./search.institution.component.scss']
})
export class SearchInstitutionComponent implements OnInit {

  private httpClient: HttpClient;
  private appInitService: AppInitService;
  searchStr = '';
  allItems = [];
  filteredItems = [];
  constructor(httpClient: HttpClient, appInitService: AppInitService) {
    this.httpClient = httpClient;
    this.appInitService = appInitService;
  }
  ngOnInit() {
    if (APP_CONFIG_JSON.samplyArray.length === 0) {
      console.log("should never be here -----------------------");
      this.appInitService.loadJson();
    }
    // this.allItems = APP_CONFIG_JSON.samplyArray; // browser crash!
    this.allItems = APP_CONFIG_JSON.samplyArray.slice(0, 5000); // 9999 is ok but slow
  }

}
