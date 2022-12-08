import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, Observable, of, Subject } from 'rxjs';
import { HomeDataService } from './home.data.service';
import { Card } from './models/home.models';
import { ExampleItemData } from './models/home.models';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private onDestory$: Subject<boolean> = new Subject();
  cards$: Observable<Card[]>;

  constructor(private router: Router, private homeDataService: HomeDataService) {}

  ngOnInit() {
    this.cards$ = this.homeDataService.getCards();
    // this.items$ = of([
    //   { id: 1, title: 'example 1', text: 'ttt' },
    //   { id: 2, title: 'example 2' },
    //   { id: 3, title: 'example 3' },
    //   { id: 4, title: 'example 4' },
    //   { id: 5, title: 'example 5' },
    //   { id: 6, title: 'example 6' },
    //   { id: 7, title: 'example 7' },
    //   { id: 8, title: 'example 8' },
    //   { id: 9, title: 'example 9' },
    // ]).pipe(delay(2000)); // simulate loading data
  }

  navToPage(page) {
    console.log('HomeComponent, navToPage, page = ' + page);
    this.router.navigateByUrl(page);
  }

  ngOnDestroy() {
    this.onDestory$.next(true);
    this.onDestory$.complete();
  }
}
