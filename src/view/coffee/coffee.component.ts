import { CommonModule, NgClass } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ServiceCoffeeService } from "../../service/service-coffee.service";
import { Coffee } from "../../model/coffee.model";
import { COFFEE_TYPE } from "../../common/constant";
import { tap } from "rxjs";
import { CardProjectComponent } from "../../component/card-project/card-project.component";

@Component({
  selector: "app-coffe",
  standalone: true,
  imports: [CardProjectComponent, CommonModule, NgClass],
  templateUrl: "./coffee.component.html",
  styleUrl: "./coffee.component.scss",
})
export class CoffeeComponent implements OnInit {
  constructor(private serviceCoffee: ServiceCoffeeService) {}
  public active: string = COFFEE_TYPE.ALL;
  private list: Coffee[] = [];
  public listShow: Coffee[] = [];

  public COFFEE_TYPE = COFFEE_TYPE;

  async ngOnInit() {
    this.loadCoffees();
  }

  public loadCoffees() {
    this.serviceCoffee
      .getListCoffee()
      .pipe(tap((result) => (this.listShow = result)))
      .subscribe((response) => {
        this.list = response;
      });
  }

  filterList(filter: string) {
    this.active = filter;
    this.listShow =
      filter === this.COFFEE_TYPE.AVAILABLE
        ? this.list.filter((s) => s.available)
        : this.list;
  }
}
