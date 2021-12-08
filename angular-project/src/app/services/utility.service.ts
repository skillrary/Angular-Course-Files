import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private toastr: ToastrService
  ) { }

  showToast(type: string, title: string, message: string) {
    if (type === 'success') {
      this.toastr.success(message, title);
    } else if (type === 'error') {
      this.toastr.error(message, title);
    }
  }
}
