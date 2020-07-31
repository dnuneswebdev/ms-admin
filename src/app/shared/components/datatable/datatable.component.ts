import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() tableData: Array<any>;
  @Input() tableColumns: Array<string>;
  @Input() tableHeaderCells: Array<string>;
  @Input() hasStatus: boolean = true;

  @Output() editItem = new EventEmitter();
  @Output() deleteItem = new EventEmitter();

  isLoading: boolean = true;
  matTableDataSource: MatTableDataSource<any>;
  displayedColumns: Array<string>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  ngOnChanges() {
    if (this.tableData !== undefined) {
      this.matTableDataSource = new MatTableDataSource(this.tableData);
      this.matTableDataSource.sort = this.sort;
      this.matTableDataSource.paginator = this.paginator;
      this.isLoading = false;
    }

    if (this.hasStatus) {
      this.displayedColumns = this.tableColumns.concat(['status', 'actions']);
    } else {
      this.displayedColumns = this.tableColumns.concat(['actions']);
    }
  }

  filterTable(value: string) {
    this.matTableDataSource.filter = value.trim().toLowerCase();
  }

  editTableItem(item) {
    this.editItem.emit(item);
  }

}
