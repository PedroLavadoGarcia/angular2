import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { LANGUAGE_TYPE } from "../../common/constant";
import { Coffee } from "../../model/coffee.model";
import { CardCoffeeComponent } from "../card-coffee/card-coffee.component";
import { CardTranslateComponent } from "../card-translate/card-translate.component";

@Component({
  selector: "app-card-project",
  standalone: true,
  imports: [
    CardCoffeeComponent,
    CardTranslateComponent,
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: "./card-project.component.html",
  styleUrl: "./card-project.component.scss",
})
export class CardProjectComponent {
  @Input() coffee!: Coffee;
  @Input() translated: boolean = false;
  @Input() optionTranslate!: string;
  @Input() value: string = "";
  @Input() disabled: boolean = false;

  @Output()
  changeOption = new EventEmitter<LANGUAGE_TYPE>();

  @Output()
  translate = new EventEmitter<string>();

  public LANGUAGE_TYPE = LANGUAGE_TYPE;

  changeOptionValue(optionTranslate: LANGUAGE_TYPE) {
    this.changeOption.emit(optionTranslate);
  }

  translateText() {
    this.translate.emit(this.value);
  }

  copyText() {
    navigator.clipboard.writeText(this.value);
  }

  audioText() {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(this.value);

    synth.speak(utterThis);
  }
}
