import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function Countries() {

    const API_COUNTRIES_FLAG_NAME = process.env.REACT_APP_API_COUNTRIES_FLAG_NAME;
    const [data, setData] = useState([]);
    const [oncePlayed, setOncePlayed] = useState(false);

    useEffect(() => {
        if(oncePlayed === false){
            axios.get(API_COUNTRIES_FLAG_NAME)
            .then((res) => {
                setData(res.data.data);
                setOncePlayed(true);
            })
        }
    }, [])

    console.log('data:', data);   

    return (
        <div className="countries">
            <ul className="countries-list">
                {data.sort().map((country) => (
                    <Card country={country} key={country.name} />          
                ))}
            </ul>
        </div>
    )
}
