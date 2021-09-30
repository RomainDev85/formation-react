import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">Accueil</NavLink>
            <NavLink exact to='/a-propos' activeClassName="nav-active">À propos</NavLink>
        </div>
    )
}