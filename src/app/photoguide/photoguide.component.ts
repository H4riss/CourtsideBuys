import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-photoguide',
  standalone: true,
  imports: [],
  templateUrl: './photoguide.component.html',
  styleUrl: './photoguide.component.css'
})
export class PhotoguideComponent {
  ngOnInit(){
    console.log("We have reacheed the photoguide")
  }
}
