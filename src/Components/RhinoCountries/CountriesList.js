import CountryEntry from "./CountryEntry";

// this child of the main is for the list of featured rhinos
const CountriesList = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.id}>
          <CountryEntry country={country} />
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
