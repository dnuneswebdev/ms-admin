import { Component, OnInit, Input } from '@angular/core';
import { ExportDataService } from './services/export-data.service';

@Component({
  selector: 'app-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.css']
})
export class ExportDataComponent implements OnInit {

  @Input() data: any;
  @Input() fields: Array<string>;
  @Input() labels: Array<string>;
  @Input() title: string;

  constructor(private exportDataService: ExportDataService) { }

  ngOnInit(): void {
  }

  generatePdf() {
    return this.exportDataService.exportAsPdfFile(this.data, this.fields, this.labels, this.title);
  }

  generateXls() {
    return this.exportDataService.exportAsExcelFile(this.data, this.title);
  }

}
