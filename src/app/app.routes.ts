import { Routes } from "@angular/router";
import { CoffeeComponent } from "../view/coffee/coffee.component";
import { CountriesComponent } from "../view/countries/countries.component";
import { HomeComponent } from "../view/home/home.component";
import { TranslateComponent } from "../view/translate/translate.component";

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "coffee", component: CoffeeComponent },
  { path: "translate", component: TranslateComponent },
  { path: "countries", component: CountriesComponent },
];
