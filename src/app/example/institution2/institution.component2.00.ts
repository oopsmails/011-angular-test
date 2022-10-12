import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, Observable, Subject, switchMap } from 'rxjs';
import { AppInitService } from 'src/app/core/services/app.init.service';
import { APP_CONFIG_JSON } from 'src/app/core/settings';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component2.html'
})
export class InstitutionComponent2 implements OnInit {
  institutionForm;
  institution;
  institutionsWithSwitchmap = [];
  requestsWithSwitchmap = [];
  institutionsWithoutSwitchmap = [];
  requestsWithoutSwitchmap = [];
  private institutionLookup$: Subject<void> = new Subject();

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.institutionForm = this.fb.group({
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      delayTime: 2000
    });

    this.institutionForm.valueChanges.subscribe(() => {
      this.institutionLookup$.next();
      this.getCustomers();
    });

    this.institutionLookup$
      .pipe(
        map(() => this.requestsWithSwitchmap = []),
        switchMap(() => {
          console.log(`this.institutionForm.value ..... this.institutionForm.value = `, this.institutionForm.value);
          // this.requestsWithSwitchmap.push(this.institutionForm.value);
          const searchParams = this.institutionForm.value.name;
          return this.searchService.getSearchFilteredInstitutions(searchParams);
        })
      )
      .subscribe(results => {
        this.institutionsWithSwitchmap = results;
        this.requestsWithSwitchmap.shift();
      });

    this.institutionLookup$.next();
    this.getCustomers();
  }

  getCustomers() {
    this.requestsWithoutSwitchmap.push(this.institutionForm.value);
    const searchParams = this.institutionForm.value.name;
    this.searchService.getSearchFilteredInstitutions(searchParams).subscribe(results => {
      console.log(`getSearchFilteredInstitutions ..... results = `, results);
      this.institutionsWithoutSwitchmap = results;
      this.requestsWithoutSwitchmap.shift();
    });
  }


}
