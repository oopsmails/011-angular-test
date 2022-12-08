import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { delay, Observable, of, Subject } from 'rxjs';
import { Card, ExampleItem } from './models/home.models';

@Injectable({
  providedIn: 'root',
})
export class HomeDataService implements OnDestroy {
  public cards = [
    new Card('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'),
    new Card(
      'What kind of cheese do you use to disguise a small horse?',
      'Mask-a-pony (Mascarpone)'
    ),
    new Card('A kid threw a lump of cheddar at me', "I thought 'That's not very mature"),
  ];

  exampleItem: ExampleItem = { id: 1, name: 'example 1', text: 'ttt' } as ExampleItem;

  public exampleItems: ExampleItem[] = [
    { id: 1, name: 'example 1', text: 'ttt' },
    { id: 2, name: 'example 2' },
    { id: 3, name: 'example 3' },
    { id: 4, name: 'example 4' },
    { id: 5, name: 'example 5' },
    { id: 6, name: 'example 6' },
    { id: 7, name: 'example 7' },
    { id: 8, name: 'example 8' },
    { id: 9, name: 'example 9' },
  ];

  private onDestroy$: Subject<boolean> = new Subject();

  constructor(private httpClient: HttpClient) {}

  getCards(): Observable<Card[]> {
    return of(this.cards);
  }

  getExampleItems(): Observable<ExampleItem[]> {
    return of(this.exampleItems).pipe(delay(2000)); // simulate loading data
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
