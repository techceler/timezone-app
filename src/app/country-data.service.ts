import { Injectable } from '@angular/core';

import { Country } 	from './country';

@Injectable()
export class CountryDataService {
	
  COUNTRY: Country[] = [
		{name: 'Australia', value: 'Australia'},
	  {name: 'Afghanistan', value: 'Afghanistan'},
	  {name: 'Albania', value: 'Albania'},
	  {name: 'Algeria', value: 'Algeria'},
	  {name: 'Angola', value: 'Angola'},
	  {name: 'Antigua and Barbuda', value: 'Antigua and Barbuda'},
	  {name: 'Argentina', value: 'Argentina'},
	  {name: 'Armenia', value: 'Armenia'},
	  {name: 'Aruba', value: 'Aruba'},
	  {name: 'Australia', value: 'Australia'},
	  {name: 'Austria', value: 'Austria'},
	  {name: 'Azerbaijan', value: 'Azerbaijan'},
	  {name: 'Bahamas', value: 'Bahamas'},
	  {name: 'Bahrain', value: 'Bahrain'},
	  {name: 'Bangladesh', value: 'Bangladesh'},
	  {name: 'Barbados', value: 'Barbados'},
	  {name: 'Belarus', value: 'Belarus'},
	  {name: 'Belgium', value: 'Belgium'},
	  {name: 'Belize', value: 'Belize'},
	  {name: 'Benin', value: 'Benin'},
	  {name: 'Bolivia', value: 'Bolivia'},
	  {name: 'Botswana and Herzegovina', value: 'Botswana and Herzegovina'},
	  {name: 'Brazil', value: 'Brazil'},
      {name: 'Brunei', value: 'Brunei'},
	  {name: 'Bulgaria', value: 'Bulgaria'},
	  {name: 'Burkina Faso', value: 'Burkina Faso'},
	  {name: 'Burma', value: 'Burma'},
	  {name: 'Burundi', value: 'Burundi'},
	  {name: 'Cambodia', value: 'Cambodia'},
	  {name: 'Cameroon', value: 'Cameroon'},
	  {name: 'Canada', value: 'Canada'},
	  {name: 'Cabo Verde', value: 'Cabo Verde'},
	  {name: 'Central African Republic', value: 'Central African Republic'},
	  {name: 'Chad', value: 'Chad'},
	  {name: 'Chile', value: 'Chile'},
	  {name: 'China', value: 'China'},
	  {name: 'Colombia', value: 'Colombia'},
	  {name: 'Comoros', value: 'Comoros'},
	  {name: 'Congo', value: 'Congo'},
	  {name: 'Costa Rica', value: 'Costa Rica'},
	  {name: 'Croatia', value: 'Croatia'},
	  {name: 'Cuba', value: 'Cuba'},
	  {name: 'Cyprus', value: 'Cyprus'},
	  {name: 'Czechia', value: 'Czechia'},


	  {name: 'India', value: 'India'},
	  {name: 'Pakistan', value: 'Pakistan'},
	  {name: 'Nepal', value: 'Nepal'}
	  

	]; 

	getCountries(): Country [] {
  	  return this.COUNTRY;
	}
	 
}