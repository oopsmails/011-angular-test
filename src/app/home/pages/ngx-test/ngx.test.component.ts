import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { HomeDataService } from '../../home.data.service';

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
    this.items$ = this.homeDataService.getExampleItems();
  }

  ngOnDestroy() {
    this.onDestory$.next(true);
    this.onDestory$.complete();
  }
}
