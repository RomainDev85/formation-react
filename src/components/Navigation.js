import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className="navigation">
            <NavLink exact to="/" >Accueil</NavLink>
            <NavLink exact to='/a-propos' >À propos</NavLink>
        </div>
    )
}