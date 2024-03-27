import { Routes } from '@angular/router';
import { CoffeeComponent } from './coffee/coffee.component';
import { HomeComponent } from './home/home.component';
import { TranslateComponent } from './translate/translate.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'coffee', component: CoffeeComponent },
  { path: 'translate', component: TranslateComponent },
];
