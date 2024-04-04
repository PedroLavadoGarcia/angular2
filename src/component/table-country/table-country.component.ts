import { CommonModule, NgClass } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialog } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSortModule, Sort } from "@angular/material/sort";
import { MatTable, MatTableModule } from "@angular/material/table";
import { LIST_REGION } from "../../common/constant";
import { compare } from "../../common/function";
import { CountriesDialogComponent } from "../countries-dialog/countries-dialog.component";

@Component({
  selector: "app-table-country",
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
  templateUrl: "./table-country.component.html",
  styleUrl: "./table-country.component.scss",
})
export class TableCountryComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  @Input() countriesList: any = [];
  public sortedData = [];
  public member = false;
  public independent = false;
  public searchText = "";
  public displayedColumns: string[] = [
    "flag",
    "name",
    "population",
    "area",
    "region",
  ];
  public listRegion = LIST_REGION;
  public regionSelected = LIST_REGION;

  async ngOnInit() {
    this.sortedData = this.countriesList;
  }

  filterList() {
    this.sortedData = this.countriesList.filter((item: any) => {
      let keep = true;
      let searchValid = true;
      let searchText = this.searchText.toLocaleUpperCase();
      if (this.searchText) {
        searchValid =
          item.region.toLocaleUpperCase().includes(searchText) ||
          item.subregion.toLocaleUpperCase().includes(searchText) ||
          item.name.official.toLocaleUpperCase().includes(searchText);
      }
      if (this.independent) {
        keep = item.independent;
      }
      if (this.member) {
        keep = item.unMember;
      }
      return keep && this.regionSelected.includes(item.region) && searchValid;
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
