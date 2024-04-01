import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ServiceTranslateService {
  constructor(private http: HttpClient) {}

  public translateText(
    text: string,
    language: string,
    language2: string
  ): Observable<any> {
    let baseUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${language}|${language2}`;

    return this.http.get<any>(`${baseUrl}`);
  }
}
