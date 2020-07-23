import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuModule } from './components/menu/menu.module';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [
    MenuModule,
    HeaderModule,
    FooterModule,
  ]
})
export class SharedModule { }
