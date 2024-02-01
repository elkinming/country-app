import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountryService {
  constructor(private http: HttpClient) { }

  apiURL: string = 'https://restcountries.com/v3.1';

  searchCountryByAlphaCode(code: string): Observable<Country | undefined>{
    return this.http.get<Country[]>(`${this.apiURL}/alpha/${code}`).pipe(
      // Map modifica el valor de emision del observable
      map( countries => countries.length > 0 ? countries[0] : undefined),
      // catchError Atrapa los errores y ejecuta codigo
      catchError((err) => {
        return of(undefined);
      })
    )
  }

  searchCapital(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/capital/${term}`).pipe(
      catchError((err) => {
        return of([]);
      })
    )
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/name/${term}`).pipe(
      catchError((err) => {
        return of([]);
      })
    )
  }

  searchRegion(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/region/${term}`).pipe(
      catchError((err) => {
        return of([]);
      })
    )
  }

}
