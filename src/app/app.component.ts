import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgModule } from "@angular/core";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CourtsideKicksBuys';
numberOfItems: any;

}


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [], // Remove RouterLink and RouterOutlet imports
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'CourtsideKicksBuys';
//   numberOfItems: any;
// }


