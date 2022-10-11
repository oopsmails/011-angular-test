import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppInitService } from 'src/app/core/services/app.init.service';
import { APP_CONFIG_JSON } from 'src/app/core/settings';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss']
})
export class InstitutionComponent implements OnInit {

  API_URL = "http://localhost:9000/plant/mysearch";

  private httpClient: HttpClient;
  private appInitService: AppInitService;
  searchStr = '';
  allItems = [];
  // filteredItems = [];
  filteredItems: any;
  constructor(httpClient: HttpClient, appInitService: AppInitService) {
    this.httpClient = httpClient;
    this.appInitService = appInitService;
  }

  ngOnInit() {
    this.filteredItems = [];
  }

  onSearch(event: any) {
    const value = "" + event.target.value;
    console.log(`onSearch ..... value = `, value);
    console.log(`onSearch ..... searchStr = `, this.searchStr);

    if (value.length >= 3) {
      this.httpClient.get(this.API_URL + '?text=' + this.searchStr + '&limit=5')
          .subscribe(
            data => {
              console.log(`onSearch ..... data = `, data);
              this.filteredItems = data;
            },
            err => {
              this.filteredItems = JSON.parse(err.error).message;
            }
          );
    } else {
      this.filteredItems = [];
    }
    console.log(this.filteredItems);

  }

}
