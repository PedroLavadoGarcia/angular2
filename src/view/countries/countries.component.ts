import { Component, OnInit } from "@angular/core";
import { MatTable, MatTableModule } from "@angular/material/table";
import { CountriesService } from "../../service/countries.service";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { CommonModule, NgClass } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";

@Component({
  selector: "app-countries",
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatTable,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    NgClass,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: "./countries.component.html",
  styleUrl: "./countries.component.scss",
})
export class CountriesComponent implements OnInit {
  constructor(private CountriesService: CountriesService) {}
  public countriesList = [];
  public sortBySelected = "population";
  public member = false;
  public independent = false;
  displayedColumns: string[] = ["flag", "name", "population", "area", "region"];
  sortByList = [
    { id: "population", itemName: "Population" },
    { id: "name", itemName: "Name" },
    { id: "area", itemName: "Area" },
    { id: "region", itemName: "Region" },
  ];

  get listRegion() {
    return ["America", "Asia", "Europa", "Africa", "Oceania", "Antarctic"];
  }

  async ngOnInit() {
    this.loadAllCountries();
  }

  public loadAllCountries() {
    this.CountriesService.getAllCountries().subscribe((response) => {
      this.countriesList = response;
    });
  }
}
