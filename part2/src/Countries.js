import {useEffect, useState} from 'react'
import { getCountries } from './services/countries/getCountries'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [inputCountry, setInputCountry] = useState('')
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect(() => {
        getCountries()
            .then(response => {
                console.log(response)
                const allCountries = response.map(res => {
                    return res.name.common
                })

                setCountries(allCountries)
            })
    }, [])

    useEffect(() => {
        const filtered = countries.filter(cntry => 
            cntry.toLowerCase().includes(inputCountry.toLowerCase())
        )
        setFilteredCountries(filtered)
    }, [inputCountry, countries])

    const handleCountryChange = (event) => {
        setInputCountry(event.target.value)
    }
        
    return(
        <div>
            <h1> Countries </h1>
            find countries <input onChange={handleCountryChange} value={inputCountry}></input>
            {
                filteredCountries.length === 1 ? (
                    <p> Hola </p>
                ) : filteredCountries.length <= 10 ? (
                    <div>
                        {filteredCountries.map(cntry => <p key={cntry}>{cntry}</p>)}
                    </div>
                ) : (
                    <p>Too many matches, specify another filter</p>
                )
            }
        </div>
    )
}

export default Countries