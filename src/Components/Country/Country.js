import React ,{useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import './Country.css';

import { fetchCountriesAP} from '../../api';

const Country = ({handleCountry}) => {

    const [fetchCountries, setFetchCountries] = useState([]);

 useEffect(() => {
     const countryAPI = async () => {
        setFetchCountries(await fetchCountriesAP());
     }

     countryAPI();
 },[setFetchCountries]);

    return (
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountry(e.target.value)}>
                <option value="">Global</option>
                {fetchCountries.map((country,i) => 
                <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>

    )

};


export default Country;