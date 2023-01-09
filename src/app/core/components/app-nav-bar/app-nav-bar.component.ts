import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.scss'],
})
export class AppNavBarComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('navbar') navbarElementRef: ElementRef;
  @ViewChild('menubar') menubarElementRef: ElementRef;

  // navbarClick: Subscription; // old way to unsubscribe

  private onDestroy$: Subject<boolean> = new Subject();

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // this.navbarClick = fromEvent(this.navbarElementRef.nativeElement, 'click').subscribe(
    fromEvent(this.navbarElementRef.nativeElement, 'click')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((x) => {
        // console.log("NavbarFixedComponent, ngAfterViewInit ... ", x);
        this.menubarElementRef.nativeElement?.click();
      });
  }

  ngOnDestroy() {
    // this.navbarClick.unsubscribe(); // this is old way without takeUntil

    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
