import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgModule } from "@angular/core";
import { PopupService } from './popup/popup.service';
import { MatDialogModule } from '@angular/material/dialog';
import { Firestore, addDoc, collection, getDoc, getDocs, query, where } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import{ MatSnackBar } from '@angular/material/snack-bar';
import { getFirestore } from 'firebase/firestore';
import {doc , setDoc } from 'firebase/firestore'; 


// import { Rop0: stringuter } frp0: stringp0: stringp0: stringom 'express';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MatDialogModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  constructor(private popupService: PopupService, private snackbar:MatSnackBar){}
  title = 'CourtsideKicksBuys';
  firestore = inject(Firestore);
  public email: string = "";
  public name: string = "";
  public price: string = "";
  public size: string = "";
  public id: string = "";
 
  tutorial: AngularFirestoreDocument<any> | undefined

  ngOnInit(){
    // Observable<any> tutorial = this.firestore.doc("users");
    // getDocs(collection(this.firestore,"users")).then((response) => {
    //   console.log("reached firebase success",response.docs); });
    }

    async submit(){
      console.log(this.email);
      console.log(this.name);
      console.log(this.price);
      console.log(this.size);
      console.log(this.id);


      let namewithoutspace = this.name.replace(/\s/g, "");
      
      let allfieldsfilled = true;
      allfieldsfilled = this.checkvalid(this.email);
      allfieldsfilled = this.checkvalid(namewithoutspace); 
      allfieldsfilled = this.checkvalid(this.price);
      allfieldsfilled = this.checkvalid(this.size);
      

      console.log("all fields true", allfieldsfilled); 
       
      if (allfieldsfilled === false){
        this.snackbar.open('Please fillout all the required feilds', 'Close')
      }
      else{ 


        const userDataArray = [
          { name: this.name,
          price: this.price,
           size: this.size,
          id: this.id }
        ];


        const docRef = doc(this.firestore, "users", this.email)
        const snapShot = await getDoc(docRef)
        console.log(snapShot)


        if (snapShot.exists()) {
          const existingData = snapShot.data();
          console.log("Document data:", snapShot.data());

          const updatedData = { ...existingData, ...userDataArray };

          await setDoc(doc(this.firestore, "users", this.email), {
            updatedData
          });
        }

        else{
          await setDoc(doc(this.firestore, "users", this.email), {
            userDataArray
          });

        }

      }

      

    
    }

    checkvalid(field:String){
      if (field === ""){
        return false;
      }
      else {
        return true;
        
        
        
      }

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




