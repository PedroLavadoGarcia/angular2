import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { CardTranslateComponent } from "../../component/card-translate/card-translate.component";
import { ServiceTranslateService } from "../../service/service-translate.service";
import { LANGUAGE_TYPE } from "../../common/constant";

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
  constructor(private ServiceTranslateService: ServiceTranslateService) {}
  public optionCard1 = LANGUAGE_TYPE.EN;
  public optionCard2 = LANGUAGE_TYPE.ES;
  public textCard1 = "";
  public textCard2 = "";

  changeOption(index: number, option: LANGUAGE_TYPE) {
    index === 1 ? (this.optionCard1 = option) : (this.optionCard2 = option);
  }

  translateText(text: string) {
    this.ServiceTranslateService.translateText(
      text,
      this.optionCard1,
      this.optionCard2
    ).subscribe((response) => {
      this.textCard2 = response?.responseData?.translatedText;
    });
  }
}
