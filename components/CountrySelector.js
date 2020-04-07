import {useState} from 'react';
import Stats from './Stats';
import useStats from '../utils/useStats';

export default function CountrySelector() {
    const {stats: countries, loading, error } =useStats(
        'https://covid19.mathdro.id/api/countries'
    )
    const [selectedCountry, setSelectedCountry] = useState('USA');
    if (loading) return <p>Loading...</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>

    let newStructure = {
        countries: {},
        iso3: {}
    };
    for (let country of countries.countries){
        newStructure.countries[country.name] = country.iso2;
        newStructure.iso3[country.iso2] = country.iso3;
    }
    
    return (
        <div>
           <select 
                onChange={e =>{
                setSelectedCountry(e.target.value);
            }}>
                {Object.entries(newStructure.countries).map(([country, code]) => (
                <option 
                selected={selectedCountry === newStructure.iso3[code]}
                key={code} 
                value={country}>
                    {country}
                </option>
                ))}
            </select>
            <h2 className="titleCountry">{selectedCountry}</h2>
            <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
        </div>
    );
}