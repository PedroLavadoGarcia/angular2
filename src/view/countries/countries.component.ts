import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../../service/countries.service";
import { MatDialog } from "@angular/material/dialog";
import { TableCountryComponent } from "../../component/table-country/table-country.component";

@Component({
  selector: "app-countries",
  standalone: true,
  imports: [TableCountryComponent],
  templateUrl: "./countries.component.html",
  styleUrl: "./countries.component.scss",
})
export class CountriesComponent implements OnInit {
  constructor(private CountriesService: CountriesService) {}
  public countriesList = [];

  async ngOnInit() {
    this.loadAllCountries();
  }

  loadAllCountries() {
    this.CountriesService.getAllCountries().subscribe((response) => {
      this.countriesList = response;
    });
  }
}
