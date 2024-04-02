import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  public getAllCountries(): Observable<[]> {
    return this.http.get<[]>(
      `https://restcountries.com/v3.1/all?fields=flag,name,population,area,region,independent,unMember,subregion`
    );
  }
}
