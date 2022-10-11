import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { APP_CONFIG_JSON } from 'src/app/core/settings';

@Component({
  selector: 'app-cause',
  templateUrl: './search.cause.component.html',
  styleUrls: ['./search.cause.component.scss']
})
export class SearchCauseComponent implements OnInit {
  httpClient: any;
  states: any;
  causeName = '';
  causes = [];
  filteredCauses = [];

  searchResult: any;
  allItems: [];
  searchStr: string;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  ngOnInit() {
    this.httpClient.get('assets/rootCauses.json').subscribe(data => {
      console.log('Loading root causes ..... ');
      if (data) {
        this.causes = data;
        this.searchResult = data;
      }
    });

    // this.allItems = APP_CONFIG_JSON.samplyArray.slice(0, 9999);
  }

  search() {
    if (this.causeName == '') {
      this.ngOnInit();
    } else {
      this.filteredCauses =
        this.causes.filter((res) => {
          return res.Failure_signature.toLocaleLowerCase().match(this.causeName.toLocaleLowerCase()
          );
        });
    }
  }

  onSearch(event: any) {
    const value = "" + event.target.value;
    console.log(`onSearch ..... value = `, value);
    console.log(`onSearch ..... searchStr = `, this.searchStr);
    if (value.length >= 2) {
      this.searchResult = this.causes.filter(
        (x) =>
        value == null ||
        value == '' ||
        x.commit_id.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        x.gerrit.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        x?.Failure_signature?.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    )} else {
      this.searchResult = this.causes;
    }
    console.log(this.searchResult);
  }

}
