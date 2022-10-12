import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, mergeMap, switchMap } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search-plant',
  templateUrl: './search.plant.component.html',
  styleUrls: ['./search.plant.component.scss']
})
export class SearchPlantComponent implements OnInit {
  title = 'Search Plant';
  httpClient: HttpClient;
  searchStr = '';
  // allItems: any;
  allItems: any[];

  @ViewChild('search', { static: true }) search: ElementRef;
  States: any[];

  constructor(httpClient: HttpClient, private dataService: DataService) {
    this.httpClient = httpClient;
  }

  ngOnInit() {
    this.httpClient.get('assets/plants.json').subscribe(data => {
      console.log('Loading plants ..... ');
      if (data) {
        // this.allItems = data;
        this.allItems = Object.values(data);
      }
    });

    fromEvent(this.search.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((searchText: string) => this.dataService.getData(searchText))
      )
      .subscribe((res) => {
        this.States = res;
        console.log(res);
      });
  }
}
