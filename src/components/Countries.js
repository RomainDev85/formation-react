import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function Countries() {

    const API_COUNTRIES = process.env.REACT_APP_API_COUNTRIES;
    const [data, setData] = useState([]);
    const [oncePlayed, setOncePlayed] = useState(false);

    useEffect(() => {
        if(oncePlayed === false){
            axios.get(API_COUNTRIES)
            .then((res) => {
                setData(res.data);
                setOncePlayed(true);
            })
        }
    }, [])

    console.log('data:', data);

    

    return (
        <div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
