import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { tap, Observable, takeUntil, Subject, map } from 'rxjs';

@Component({
  selector: 'app-input-save',
  templateUrl: './input-save.component.html',
  styleUrls: ['./input-save.component.scss'],
})
export class InputSaveComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<boolean> = new Subject();
  inputModel: string = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  textOnChange(event) {
    console.log('textOnChange event: ', event);
    this.inputModel = event.target.value;
    console.log('textOnChange inputModel: ', this.inputModel);
  }

  displayUpdatedText() {
    this.inputModel = 'a\nchanged';
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
