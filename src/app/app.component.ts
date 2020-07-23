import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  isLoginPage: boolean;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    private detectRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private router: Router,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => detectRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.checkIfLoginPage();
  }

  checkIfLoginPage() {
    if (this.router.url === '/login') {
      this.isLoginPage = true;
    } else {
      this.isLoginPage = false;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
