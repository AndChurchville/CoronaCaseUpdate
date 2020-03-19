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
    
    return (
        <div>
           <select 
                onChange={e =>{
                setSelectedCountry(e.target.value);
            }}>
                {Object.entries(countries.countries).map(([country, code]) => (
                <option 
                selected={selectedCountry === countries.iso3[code]}
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