import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailgunService {



  constructor(private http: HttpClient  ) {}
   
 private apiUrl = 'http:localhost:3002'

  
  sendemail(email: string){
    return this.http.post<any>(`${this.apiUrl}/email` , {email})
  }
}

