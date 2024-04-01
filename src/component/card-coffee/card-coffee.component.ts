import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { Coffee } from "../../model/coffee.model";

@Component({
  selector: "card-coffee",
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: "./card-coffee.component.html",
  styleUrl: "./card-coffee.component.scss",
})
export class CardCoffeeComponent {
  @Input() coffee!: Coffee;
  value = "";
}
