import React from 'react'

export default function Card({country}) {
    return (
        <li className="card">
            <img src={country.flag} alt="flag" />
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                </ul>
            </div>
        </li>
    )
}
