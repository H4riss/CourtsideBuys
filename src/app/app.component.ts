import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgModule } from "@angular/core";
import { PopupService } from './popup/popup.service';
import { MatDialogModule } from '@angular/material/dialog';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
// import { Rop0: stringuter } frp0: stringp0: stringp0: stringom 'express';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MatDialogModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private popupService: PopupService) {}
  title = 'CourtsideKicksBuys';
  firestore = inject(Firestore);
  public email: String = "";
  public name: String = "";
  public price: String = "";
  public size: String = "";
  public id: String = "";
 
  tutorial: AngularFirestoreDocument<any> | undefined

  ngOnInit(){
    // Observable<any> tutorial = this.firestore.doc("users");
    // getDocs(collection(this.firestore,"users")).then((response) => {
    //   console.log("reached firebase success",response.docs); });
    }
  


  closeDialog() {
  }
numberOfItems: any;



openPopup() {
  // this.router.openPopup(['/popup']);
  this.popupService.openPopup();
  // this.router.navigateByUrl('/categories')
}


}




