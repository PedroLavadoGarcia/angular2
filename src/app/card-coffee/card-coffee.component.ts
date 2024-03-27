import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Coffee } from '../coffee/coffee.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'card-coffee',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './card-coffee.component.html',
  styleUrl: './card-coffee.component.scss',
})
export class CardCoffeeComponent {
  @Input() coffee!: Coffee;
  value = '';
}
