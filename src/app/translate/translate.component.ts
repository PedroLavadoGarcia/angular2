import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { CardTranslateComponent } from "../card-translate/card-translate.component";

@Component({
  selector: "app-translate",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    CardTranslateComponent,
  ],
  templateUrl: "./translate.component.html",
  styleUrl: "./translate.component.scss",
})
export class TranslateComponent {
  optionCard1 = "en";
  optionCard2 = "es";
  textCard1 = "";
  textCard2 = "";

  changeOption1(option: string) {
    this.optionCard1 = option;
  }

  changeOption2(option: string) {
    this.optionCard2 = option;
  }

  translateText(text: string) {
    this.textCard2 = text + this.optionCard1 + this.optionCard2;
  }
}
