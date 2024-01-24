// Function to fetch the data
async function fetchData() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

//Geting all the countries from Asia continent/region using the filter function
function getCountriesInAsia(countries) {
  return countries.filter(country => country.region === 'Asia');
}

// 2. Get all the countries with a population of less than 2 lakhs using the filter function
function getCountriesWithPopulationLessThan2Lakhs(countries) {
  return countries.filter(country => country.population < 200000);
}

// 3. Print name, capital, flag using forEach function
function printDetailsForEach(countries) {
  countries.forEach(country => {
    console.log(`Name: ${country.name.common}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Flag: ${country.flags.svg}`);
    console.log('-------------------');
  });
}

// 4. Print the total population of countries using the reduce function
function getTotalPopulation(countries) {
  return countries.reduce((totalPopulation, country) => totalPopulation + country.population, 0);
}

// 5. Print the country that uses US dollars as currency
function getCountryWithUSDollarCurrency(countries) {
  return countries.find(country => country.currencies && country.currencies.USD);
}


async function main() {
  const countriesData = await fetchData();

  // Task 1
  const countriesInAsia = getCountriesInAsia(countriesData);
  console.log('Countries in Asia:', countriesInAsia);

  // Task 2
  const countriesWithPopulationLessThan2Lakhs = getCountriesWithPopulationLessThan2Lakhs(countriesData);
  console.log('Countries with population less than 2 lakhs:', countriesWithPopulationLessThan2Lakhs);

  // Task 3
  console.log('Details of each country:');
  printDetailsForEach(countriesData);

  // Task 4
  const totalPopulation = getTotalPopulation(countriesData);
  console.log('Total population of all countries:', totalPopulation);

  // Task 5
  const countryWithUSDollarCurrency = getCountryWithUSDollarCurrency(countriesData);
  console.log('Country that uses US dollars:', countryWithUSDollarCurrency);
}

// Execute the main function
main();
