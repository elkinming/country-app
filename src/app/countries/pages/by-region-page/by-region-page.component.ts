import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  countries: Country[] = [];

  constructor(
    private countryService: CountryService
  ) {}

  searchByRegion(term: string): void {
    // console.log({term});
    this.countryService.searchRegion(term).subscribe((countries: Country[]) => {
      this.countries = countries;
    })
  }

}
