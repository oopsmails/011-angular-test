import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

interface ExampleItemData {
  id: number;
  name: string;
  text?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public items$: Observable<ExampleItemData[]>;
  public formControl = new FormControl(3);

  public constructor() {
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
}
