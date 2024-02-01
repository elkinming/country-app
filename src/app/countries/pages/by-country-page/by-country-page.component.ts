import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  countries: Country[] = [];

  constructor(
    private countryService: CountryService
  ) {}

  searchByCountry(term: string): void {
    this.countryService.searchCountry(term).subscribe((countries: Country[]) => {
      this.countries = countries;
    })
  }

}
