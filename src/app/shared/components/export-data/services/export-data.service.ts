import { Injectable } from '@angular/core';

//PDF
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

// EXCEL
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExportDataService {

  constructor() { }

  //EXCEL
  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  //PDF
  public exportAsPdfFile(inputData, inputFields, inputLabels, inputTitle) {
    const documentDefinition = this.getDocumentDefinition(inputData, inputFields, inputLabels, inputTitle);
    pdfMake.createPdf(documentDefinition).open();
  }

  private getDocumentDefinition(data, fields, labels, title) {
    return {
      header: this.defaultPdfHeader(title),
      content: data.map((item, index) => {
        return {
          fontSize: 12,
          alignment: 'left',
          margin: [0, 0, 0, 12],
          columns: [
            fields.map((field, index) => {
              return [
                {
                  text: labels[index] + ':' + " " + item[field],
                }
              ]
            })
          ]
        }
      })
    };
  }

  defaultPdfHeader(title) {
    return {
      text: title.toUpperCase(),
      alignment: 'center',
      margin: [0, 20, 0, 50],
      bold: true,
    }
  }
}
