import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Subject, switchMap } from 'rxjs';
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
      INSTITUTION_NME_EN: '',
      PARTNER_NOTES: ''
    });

    this.institutionForm.valueChanges.subscribe(() => {
      this.institutionLookup$.next();
    });

    this.institutionLookup$
      .pipe(
        map(() => this.requestsWithSwitchmap = []),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(() => {
          console.log(`this.institutionForm.value ..... this.institutionForm.value = `, this.institutionForm.value);
          const searchParams = this.institutionForm.value.INSTITUTION_NME_EN;
          return this.searchService.getSearchFilteredInstitutions(searchParams);
        })
      )
      .subscribe(results => {
        this.institutionsWithSwitchmap = results;
        console.log(`InstitutionComponent2 ..... this.institutionsWithSwitchmap.length = `, this.institutionsWithSwitchmap.length);
        this.requestsWithSwitchmap.shift();
      });

    this.institutionLookup$.next();
  }

}
