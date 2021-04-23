import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCountriesService {

  constructor(private http: HttpClient) { }
  getCounries() {
    return this.http.get(`https://restcountries.eu/rest/v2/all`);
  }
}
