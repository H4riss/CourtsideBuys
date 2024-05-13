import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailgunService {

   
 private apiUrl = 'http:localhost:3000'

  constructor(private http: HttpClient  ) {}
  sendemail(email: string){
    return this.http.post<any>(`${this.apiUrl}/email` , {email})
  }
}

