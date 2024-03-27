import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from './coffee/coffee.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceCoffeeService {
  Data!: Coffee[];
  private baseUrl =
    'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';
  constructor(private http: HttpClient) {}

  public getListCoffee(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(`${this.baseUrl}`);
  }
}
