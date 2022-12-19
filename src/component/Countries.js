import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries = useLoaderData();
    console.log(countries)
    return (
        <div>
            <h2>total countries : {countries.length}</h2>
            <div>
                {
                    countries.map(country => <div key={country.cca3}><Link to={`/country/${country.cca3}`}>{country.name.common}</Link></div>)
                }
            </div>
        </div >
    );
};

export default Countries;