import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-plant',
  templateUrl: './search.plant.component.html',
  styleUrls: ['./search.plant.component.scss']
})
export class SearchPlantComponent implements OnInit {
  title = 'Search Plant';
  httpClient: any;
  searchStr = '';
  allItems = [];
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  ngOnInit() {
    this.httpClient.get('assets/plants.json').subscribe(data => {
      console.log('Loading plants ..... ');
      if (data) {
        this.allItems = data;
      }
    });
  }
}
