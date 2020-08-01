import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';


@Injectable({
  providedIn: 'root'
})
export class UxService {

  notificationOptions = {
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
  }

  constructor(
    private nfService: NotificationsService,
  ) { }

  success(text: string) {
    this.nfService.success(text, null, this.notificationOptions);
  }

  info(text: string) {
    this.nfService.info(text, null, this.notificationOptions);
  }

  warn(text: string) {
    this.nfService.warn(text, null, this.notificationOptions);
  }

  error(text: string) {
    this.nfService.error(text, null, this.notificationOptions);
  }


}
