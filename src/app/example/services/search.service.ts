import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    debounceTime,
    distinctUntilChanged,
    fromEvent,
    map,
    Observable,
    switchMap,
    tap,
    timer,
} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    API_URL = "http://localhost:9000/plant/mysearch";

    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    getSearchFilteredInstitutions(searchStr: string): Observable<any> {
        const url = this.API_URL + '?text=' + searchStr + '&limit=5';
        console.log(`getSearchFilteredInstitutions ..... url = `, url);
        return this.httpClient.get(url);
    }

}