import { Component, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

@Component({
  selector: "app-countries-dialog",
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatButtonModule,
  ],
  templateUrl: "./countries-dialog.component.html",
  styleUrl: "./countries-dialog.component.scss",
})
export class CountriesDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  get languages(): string {
    return Object.values(this.data.country.languages).toString();
  }

  get currencies(): string {
    let currencies = "";
    let array: any = Object.values(this.data.country.currencies);
    for (let index = 0; index < array.length; index++) {
      currencies = currencies
        ? currencies.concat(",").concat(array[index].name)
        : currencies.concat(array[index].name);
    }
    return currencies;
  }
}
