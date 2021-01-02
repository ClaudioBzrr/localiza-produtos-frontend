import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './../../assets/styles/global.css'
import './styles.css'
import {Link} from 'react-router-dom'
import {FiArrowLeft as Backlink} from 'react-icons/fi'
import api from './../../services/api'
import swal from 'sweetalert'


export default function RegisterProducts(){

    const [sku_product,setSku_product] =  useState('')
    const  [desc_product,setDesc_product] =  useState('')
    const  [column_product,setColumn_product] =  useState('')
    const history =  useHistory()



   

    async function handleRegisterProduct(e){
        e.preventDefault()
        const data = {
            sku_product,
            desc_product,
            column_product
        }

        try{
              await api.post('products',data)
            swal("Produto cadastrado com sucesso!!!","","success")
            history.push('/register')

        }catch(err){
            swal(`erro : ${err}`,"","error")
        }

    }




    return(
        <main id="main-register">
            <div id="box-register">
                <Link  id="back-link" to='/'><Backlink/>Voltar</Link>
                <h1 id="title-register">Cadastro de produtos</h1>
                <form id="form-register"  onSubmit={handleRegisterProduct}>

                    <label htmlFor="sku" id="label-sku">Código : </label>
                    <input name="sku" type="text" id="input-sku"
                    autoComplete="off"
                    value={sku_product}
                    onChange={e => setSku_product(e.target.value)}
                    />

                    <label htmlFor="desc" id="label-desc">Descrição : </label>
                    <input id="input-desc"name="desc" type="text"
                    autoComplete="off"
                    value={desc_product}
                    onChange={e => setDesc_product(e.target.value)}
                    />

                    <label htmlFor="col" id="label-col">Coluna : </label>
                    <input id="input-col" name="col" type="text"
                    autoComplete="off"
                    value={column_product}
                    onChange={e => setColumn_product(e.target.value)}
                    />

                    <button id="button-register"type="submit">Cadastrar</button>

                </form>
            </div>
            
        </main>
    )
}