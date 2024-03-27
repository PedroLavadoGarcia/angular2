import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardCoffeeComponent } from '../card-coffee/card-coffee.component';
import { ServiceCoffeeService } from '../service-coffee.service';
import { Coffee } from './coffee.model';

@Component({
  selector: 'app-coffe',
  standalone: true,
  imports: [CardCoffeeComponent, CommonModule, NgClass],
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.scss',
})
export class CoffeeComponent implements OnInit {
  constructor(private serviceCoffee: ServiceCoffeeService) {}
  active: string = 'All';
  list: Coffee[] = [];
  listShow: Coffee[] = [];

  async ngOnInit() {
    this.loadCoffees();
  }

  public loadCoffees() {
    this.serviceCoffee.getListCoffee().subscribe((response) => {
      this.list = response;
      this.listShow = JSON.parse(JSON.stringify(this.list));
    });
  }

  filterList(filter: string) {
    this.active = filter;
    this.listShow =
      filter === 'Available' ? this.list.filter((s) => s.available) : this.list;
  }
}
