import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of, Subject, delay } from 'rxjs';
import { RandomItem } from 'src/app/shared/models/sample.model';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService implements OnDestroy {
  private onDestroy$: Subject<boolean> = new Subject();

  constructor(private httpClient: HttpClient) {}

  getRandomItems(numOfItems?: number, delayInMs?: number): Observable<RandomItem[]> {
    if (!numOfItems) {
      numOfItems = 10;
    }
    if (!delayInMs) {
      delayInMs = 1000;
    }
    const items: RandomItem[] = [];
    for (let i = 0; i < numOfItems; i++) {
      items.push({
        id: i,
        name: 'randomItem name ' + i,
        desc: 'randomItem desc ' + i,
        text: 'randomItem text ' + i,
        price: i,
        imageUrl: 'randomItem imageUrl ' + i,
        quantity: i,
      });
    }

    return of(items).pipe(delay(delayInMs));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
