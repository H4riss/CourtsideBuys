import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { PopupComponent } from './popup.component';


@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private dialog: MatDialog) {}

  openPopup() {
    this.dialog.open(PopupComponent);

  }
  closePopup(){
    this.dialog.closeAll();
  }
  
}

