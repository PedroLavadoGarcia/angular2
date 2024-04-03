import { Component, OnInit } from "@angular/core";
import { MatTable, MatTableModule } from "@angular/material/table";
import { CountriesService } from "../../service/countries.service";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule, NgClass } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { Sort, MatSortModule } from "@angular/material/sort";
import { tap } from "rxjs";
import { compare } from "../../common/function";
import { MatDialog } from "@angular/material/dialog";
import { CountriesDialogComponent } from "../../component/countries-dialog/countries-dialog.component";

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
    NgClass,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSortModule,
  ],
  templateUrl: "./countries.component.html",
  styleUrl: "./countries.component.scss",
})
export class CountriesComponent implements OnInit {
  constructor(
    private CountriesService: CountriesService,
    public dialog: MatDialog
  ) {}
  public countriesList = [];
  public member = false;
  public independent = false;
  displayedColumns: string[] = ["flag", "name", "population", "area", "region"];
  sortedData = [];

  public listRegion = [
    "Americas",
    "Asia",
    "Europe",
    "Africa",
    "Oceania",
    "Antarctic",
  ];

  public regionSelected = [
    "Americas",
    "Asia",
    "Europe",
    "Africa",
    "Oceania",
    "Antarctic",
  ];

  async ngOnInit() {
    this.loadAllCountries();
  }

  loadAllCountries() {
    this.CountriesService.getAllCountries()
      .pipe(tap((result) => (this.sortedData = result.slice())))
      .subscribe((response) => {
        this.countriesList = response;
      });
  }

  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === "") {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "name":
          return compare(a.name.official, b.name.official, isAsc);
        case "population":
          return compare(a.population, b.population, isAsc);
        case "area":
          return compare(a.area, b.area, isAsc);
        case "region":
          return compare(a.region, b.region, isAsc);
        default:
          return 0;
      }
    });
  }

  filterList() {
    this.sortedData = this.countriesList.filter((item: any) => {
      let keep = true;
      if (this.independent) {
        keep = item.independent;
      }
      if (this.member) {
        keep = item.unMember;
      }
      return keep && this.regionSelected.includes(item.region);
    });
  }

  filterCountry(region: string) {
    this.regionSelected.includes(region)
      ? (this.regionSelected = this.regionSelected.filter(
          (item) => item != region
        ))
      : this.regionSelected.push(region);

    this.filterList();
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    country: any
  ): void {
    this.dialog.open(CountriesDialogComponent, {
      width: "80%",
      height: "90%",
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        country: country,
      },
    });
  }
}
