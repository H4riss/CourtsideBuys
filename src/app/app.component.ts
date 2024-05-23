import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgModule } from "@angular/core";
import { PopupService } from './popup/popup.service';
import { MatDialogModule } from '@angular/material/dialog';
import { Firestore, addDoc, collection, docSnapshots, getDoc, getDocs, query, where } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import{ MatSnackBar } from '@angular/material/snack-bar';
import { getFirestore } from 'firebase/firestore';
import {doc , setDoc } from 'firebase/firestore'; 
import { MailgunService } from './mailgun.service';

import { getStorage, ref } from "firebase/storage";

import { AlertService } from './alert.service';
import { uploadBytes } from '@angular/fire/storage';
import { File } from 'buffer';
import { Module } from 'module';
import { CommonModule, NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



// import { Rop0: stringuter } frp0: stringp0: stringp0: stringom 'express';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MatDialogModule,FormsModule,FormsModule,NgFor, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(private popupService: PopupService, private snackbar:MatSnackBar, private alertService: AlertService){}
  
  title = 'CourtsideKicksBuys';
  firestore = inject(Firestore);
  mailgun = inject(MailgunService); 
  public email: string = "";
  public name: string = "";
  public price: string = "";
  public size: string = "";
  public id: string = "";
  public photosUploaded: boolean = false;
  public imageuploaded: string[] =[];
 
  // tutorial: AngularFirestoreDocument<any> | undefined
  files: FileList | null = null;

  
  onFileChange(event: any): void {
    this.files = event.target.files;
    if (this.files) {
      for(let i = 0; i < 7; i++){
        this.photosUploaded = true;
        this.imageuploaded.push(this.files[i].name);
      }
    }
  }
  removeFile(index: number): void {
    this.imageuploaded.splice(index, 1);
  }

    async submit(){
      console.log(this.email);
      console.log(this.name);
      console.log(this.price);
      console.log(this.size);
      console.log(this.id);

      if (this.photosUploaded == true && this.files != null){
        const storage = getStorage();
        for (let i = 0; i < 7; i++) {
            const file = this.files[i];
            const storageRef = ref(storage, `${this.email}/${file.name}`);

              // 'file' comes from the Blob or File API
            uploadBytes(storageRef, file).then(() => {
                console.log(`Uploaded ${file.name}`);
                
            }).catch(error => {
                console.error(`Failed to upload ${file.name}:`, error);
            });
        }
      }


      setTimeout(() => {
        window.location.reload();
      }, 3000);
      
      this.alertService.openSnackBar('Successful submission!', 'Close');

      let namewithoutspace = this.name.replace(/\s/g, "");
      
      let allfieldsfilled = true;
      allfieldsfilled = this.checkvalid(this.email);
      allfieldsfilled = this.checkvalid(namewithoutspace); 
      allfieldsfilled = this.checkvalid(this.price);
      allfieldsfilled = this.checkvalid(this.size);

      
     this.mailgun.sendemail(this.email).subscribe(response => console.log(response.reply));
    

      console.log("all fields true", allfieldsfilled); 
       
      if (allfieldsfilled === false){
        this.snackbar.open('Please fillout all the required fields', 'Close')
      }
      else{
        
        const user =  collection(this.firestore, 'users');


        console.log('This is the user, ', user)

        const email = doc(user, this.email)


        console.log("this is the collection ", email)

        const docSnapshot = await getDoc(email)

        const entries = docSnapshot.data();

        console.log(entries);


        const existingEntries = entries?.['entries'] || []

        console.log("Existing entries ", existingEntries)

        const data = {
          id: this.id,
          name: this.name,
          price: this.price,
          size: this.size
        }

        existingEntries.push(data)


        await setDoc(email, {
          entries: existingEntries
          }, { merge: true }).then(() => {console.log("Sucess!")}
          ).catch((Error) => {alert("Failed Submission: "+ Error)})

        
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




