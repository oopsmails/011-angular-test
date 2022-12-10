import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { RandomItem } from 'src/app/shared/models/sample.model';
import { SharedDataService } from 'src/app/shared/services/shared.data.service';
import { HomeDataService } from '../../home.data.service';

@Component({
  selector: 'ngx-test',
  templateUrl: './ngx.select.1.component.html',
  styleUrls: ['./ngx.select.1.component.scss'],
})
export class NgxSelect1Component implements OnInit, OnDestroy {
  private onDestory$: Subject<boolean> = new Subject();

  public formControl1 = new FormControl(3);
  public formControl2 = new FormControl(3);

  public items: RandomItem[];
  public items$: Observable<RandomItem[]>;

  constructor(private router: Router, private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.items$ = this.sharedDataService.getRandomItems();
    this.items$.subscribe((resp) => (this.items = resp));
  }

  ngOnDestroy() {
    this.onDestory$.next(true);
    this.onDestory$.complete();
  }
}
