import React from 'react'
import './../../assets/styles/global.css'
import './styles.css'
import {Link} from 'react-router-dom'
import {FiArrowLeft as Backlink} from 'react-icons/fi'


export default function RegisterProducts(){
    return(
        <main id="main-register">
            <div id="box-register">
                <Link  id="back-link" to='/'><Backlink/>Voltar</Link>
                <h1 id="title-register">Cadastro de produtos</h1>
                <form id="form-register">

                    <label htmlFor="sku" id="label-sku">Código : </label>
                    <input name="sku" type="text" id="input-sku"/>

                    <label htmlFor="desc" id="label-desc">Descrição : </label>
                    <input id="input-desc"name="desc" type="text"/>

                    <label htmlFor="col" id="label-col">Coluna : </label>
                    <input id="input-col" name="col" type="text"/>

                    <button id="button-register"type="submit">Cadastrar</button>

                </form>
            </div>
            
        </main>
    )
}