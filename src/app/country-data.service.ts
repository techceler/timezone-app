import { Injectable } from '@angular/core';

import { Country } 	from './country';

@Injectable()
export class CountryDataService {
	
  COUNTRY: Country[] = [
	  {name: 'Pakistan', value: 'Pakistan'},
	  {name: 'India', value: 'India'},
	  {name: 'Srilanka', value: 'Srilanka'}
	]; 

	getCountries(): Country [] {
  	  return this.COUNTRY;
	}
	 
}