import { NgIf, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import {
  OperatorFunction,
  Observable,
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap,
  catchError,
  of,
} from 'rxjs';
import { WikipediaService } from 'src/app/shared/services/wikipedia.service';

@Component({
  selector: 'ngb-typeahead-search',
  //   standalone: true,
  //   imports: [NgbTypeaheadModule, FormsModule, NgIf, JsonPipe],
  templateUrl: './ngb.typeahead.search.component.html',
  //   providers: [WikipediaService],
  //   styles: [
  //     `
  //       .form-control {
  //         width: 300px;
  //       }
  //     `,
  //   ],
  styleUrls: ['./ngb.typeahead.search.component.scss'],
})
export class NgbTypeaheadSearchComponent {
  model: any;
  searching = false;
  searchFailed = false;

  constructor(private _service: WikipediaService) {}

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap((term) =>
        this._service.search(term).pipe(
          tap(() => (this.searchFailed = false)),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => (this.searching = false))
    );
}
