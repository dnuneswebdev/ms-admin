import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Input() tableData: Array<any>;
  @Input() tableColumns: Array<string>;
  @Input() tableHeaderCells: Array<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
