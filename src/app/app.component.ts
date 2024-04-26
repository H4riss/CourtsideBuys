import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgModule } from "@angular/core";
import { PopupService } from './popup/popup.service';
import { MatDialogModule } from '@angular/material/dialog';
// import { Router } frp0: stringp0: stringp0: stringom 'express';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CourtsideKicksBuys';
  constructor(private popupService: PopupService) {}
  // constructor(private router:PopupService){}
  // // constructor(private router: Router){}
  closeDialog() {
  }
numberOfItems: any;



openPopup() {
  this.popupService.openPopup();
  // this.router.navigateByUrl('/categories')
}


}




