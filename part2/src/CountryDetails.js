const CountryDetails = ({country}) => {
    console.log("COUNTRY FILTERED ", country.flags.png)
    console.log(typeof country.image)
    return(
        <div>
            <h2>CountryDetails</h2>
            <h3>{country.name.common}</h3>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <p>Languages:</p>
            <ul>
                {Object.entries(country.languages).map(([key,value]) => {
                    return(<li>{value}</li>)
                })}
            </ul>
            <img src={country.flags.png} alt="Country Flag" />
        </div>
    )
}

export default CountryDetails;