import { Component, OnInit, Input } from '@angular/core';
import { Breadcrumb } from './models/breadcrumb.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() breadcrumbs: Breadcrumb[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  isLastBreadcrumb(breadcrumb: Breadcrumb): boolean {
    const index = this.breadcrumbs.indexOf(breadcrumb);
    return index + 1 == this.breadcrumbs.length;
  }

}
