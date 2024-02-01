import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  countries: Country[] = [];

  constructor(
    private countryService: CountryService
  ) {}

  searchByCapital(term: string): void {
    this.countryService.searchCapital(term).subscribe((countries: Country[]) => {
      this.countries = countries;
    })
  }

}
