import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, Observable, of, Subject } from 'rxjs';
import { HomeDataService } from '../../home.data.service';
import { ExampleItemData } from '../../models/home.models';

@Component({
  selector: 'ngx-test',
  templateUrl: './ngx.test.component.html',
  styleUrls: ['./ngx.test.component.scss'],
})
export class NgxTestComponent implements OnInit, OnDestroy {
  private onDestory$: Subject<boolean> = new Subject();

  public items$: Observable<any[]>;
  public formControl = new FormControl(3);

  constructor(private router: Router, private homeDataService: HomeDataService) {}

  ngOnInit() {
    this.items$ = of([
      { id: 1, title: 'example 1', text: 'ttt' },
      { id: 2, title: 'example 2' },
      { id: 3, title: 'example 3' },
      { id: 4, title: 'example 4' },
      { id: 5, title: 'example 5' },
      { id: 6, title: 'example 6' },
      { id: 7, title: 'example 7' },
      { id: 8, title: 'example 8' },
      { id: 9, title: 'example 9' },
    ]).pipe(delay(2000)); // simulate loading data
  }

  ngOnDestroy() {
    this.onDestory$.next(true);
    this.onDestory$.complete();
  }
}
