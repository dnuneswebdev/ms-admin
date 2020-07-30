import { Component, OnInit, Input } from '@angular/core';
import { PageTitle } from './models/page-title.model';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  @Input() pageTitle: PageTitle;
  @Input() isForm: boolean = false;
  @Input() isEditing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
