import React from 'react'
import {useState} from 'react'
import './../../assets/styles/global.css'
import './styles.css'
import {Link} from 'react-router-dom'
import {FiArrowLeft as Backlink} from 'react-icons/fi'
import api from './../../services/api'
import swal from 'sweetalert'


export default function RegisterProducts(){

    const [sku_product,setSku_product] =  useState('')
    const  [desc_product,setDesc_product] =  useState('')
    const  [lane_location,setLane_location] =  useState('')
    const  [column_location,setColumn_location] =  useState('')
    const  [stand_location,setStand_location] =  useState('')
    const [sku_location, setSku_location] =  useState('')

    function resetForms(){
        setSku_product('')
        setDesc_product('')
        setLane_location('')
        setColumn_location('')
        setStand_location('')
    }


    function handleInsertSku(e){
        setSku_location(e.target.value)
        setSku_product(e.target.value)
    }


    async function handleRegisterProductLocation(e){
        e.preventDefault()
        const dataProduct = {
            sku_product,
            desc_product,
        }

        const dataLocation ={
            lane_location,
            column_location,
            stand_location,
            sku_location
        }

        try{
            setSku_location(sku_product)
            await api.post('products',dataProduct)
            await api.post('locations',dataLocation)
            swal({icon:'success',title:'Produto cadastrado com sucesso'})
            
            resetForms()


        }catch(err){
            swal({icon:'error',title:`Erro ao cadastrar produto : ${err}`})
        }

        
        

    }




    return(
        <main id="main-register">
            <div id="box-register">
                <Link  id="back-link" to='/'><Backlink/>Voltar</Link>
                <h1 id="title-register">Cadastro de produtos</h1>
                <form id="form-register"  onSubmit={handleRegisterProductLocation}>

                    <label htmlFor="sku" id="label-sku">Código : </label>
                    <input name="sku" type="text" id="input-sku"
                    autoComplete="off"
                    value={sku_product}
                    onChange={handleInsertSku}
                    />

                    <label htmlFor="desc" id="label-desc">Descrição : </label>
                    <input id="input-desc"name="desc" type="text"
                    autoComplete="off"
                    value={desc_product}
                    onChange={e => setDesc_product(e.target.value)}
                    />



                    <label htmlFor="lane" id="label-lane">Rua : </label>
                    <input name="lane" id="input-lane" type="text" autoComplete="off"
                        value={lane_location}
                        onChange={e => setLane_location(e.target.value)}
                    />

                    <label htmlFor="col" id="label-col"> Coluna : </label>
                    <input name="col" id="input-col" type="text" autoComplete="off"
                        value={column_location}
                        onChange={e => setColumn_location(e.target.value)}
                    />

                    <label htmlFor="stand" id="label-stand" >Suporte : </label>
                    <input id="input-stand" type="text" name="stand" autoComplete="off"
                        value={stand_location}
                        onChange={e => setStand_location(e.target.value)}
                    />


                    <button id="button-register"type="submit">Cadastrar</button>

                </form>
            </div>
            
        </main>
    )
}