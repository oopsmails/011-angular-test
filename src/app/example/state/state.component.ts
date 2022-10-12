import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, mergeMap, switchMap } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  title = 'Search State';

  @ViewChild('search', { static: true }) search: ElementRef;
  States: any[];

  constructor(private dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit() {
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
