import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
