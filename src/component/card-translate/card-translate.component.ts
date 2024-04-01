import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-card-translate",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: "./card-translate.component.html",
  styleUrl: "./card-translate.component.scss",
})
export class CardTranslateComponent {
  @Input() translated: boolean = false;
  @Input() option: string = "";
  @Input() value: string = "";
  @Input() disabled: boolean = false;

  @Output()
  changeOption = new EventEmitter<string>();

  @Output()
  translate = new EventEmitter<string>();

  changeOptionValue(option: string) {
    this.changeOption.emit(option);
  }

  translateText() {
    this.translate.emit(this.value);
  }

  copyText() {
    navigator.clipboard.writeText(this.value);
  }
}
