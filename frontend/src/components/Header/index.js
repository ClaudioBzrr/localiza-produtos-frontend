import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import {FiPlus as Plus} from 'react-icons/fi'

export default function Header(){
    return(
        <header id="header">
            <ul id="lista-header">
                <li><Link to="/register"><Plus/> Cadastrar produtos</Link></li>
            </ul>
        </header>
    )
}