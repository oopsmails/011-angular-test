import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.city.component.html',
  styleUrls: ['./search.city.component.scss']
})
export class SearchCityComponent implements OnInit {
  title = 'Search City';
  httpClient: any;
  states: any;
  cityName = '';
  cities = [];
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  ngOnInit() {
    this.httpClient.get('assets/cities.json').subscribe(data => {
      console.log('Loading states and cities ..... ');
      if (data) {
        this.states = Object.entries(data);
        console.log(`States: `, this.states);
        this.states.forEach((state) => {
          state[1].forEach(city => this.cities.push(city + ', ' + state[0]));
        });
      }
    });
  }
}
