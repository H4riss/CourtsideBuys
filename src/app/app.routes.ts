import { Routes } from '@angular/router';
import { PhotoguideComponent } from './photoguide/photoguide.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'photoguide',component:PhotoguideComponent},
    {path: '', component: AppComponent},
];
