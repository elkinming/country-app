import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css']
})
export class CountriesTableComponent implements OnInit {

  @Input()
  countries: Country[] = [];

  constructor() { }

  ngOnInit() {
  }

}
