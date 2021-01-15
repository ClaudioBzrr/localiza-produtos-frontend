import React from 'react'
import { useState } from 'react'
import './../../assets/styles/global.css'
import './styles.css'
import { Link } from 'react-router-dom'
import { FiArrowLeft as Backlink, FiPlusCircle as Plus, FiTrash2 as RemoveInput } from 'react-icons/fi'
import api from './../../services/api'
import swal from 'sweetalert'

export default function RegisterProducts() {


    // Constantes
    const [dataLocation, setDataLocation] = useState([])
    const [locations, setLocations] = useState([])
    const [sku_product, setSku_product] = useState('')
    const [desc_product, setDesc_product] = useState('')
    const [lane_location, setLane_location] = useState([])
    const [column_location, setColumn_location] = useState([])
    const [stand_location, setStand_location] = useState([])
    const [sku_location, setSku_location] = useState('')


    // Função para adicionar novos campos de input ao form principal.
    function handleAddInputLocation(e) {
        e.preventDefault()
        setLocations([...locations, ''])


    }



    // Função para remover os campos de input locations
    function handleRemoveInputLocation(e, position) {
        e.preventDefault()
        setLocations([...locations.filter((_, index) => index !== position)])
        

    }



    // Função para limpar os valores de input.
    function resetForms() {
        setSku_product('')
        setDesc_product('')
        setLane_location([])
        setColumn_location([])
        setStand_location([])
        setDataLocation([])
        setLocations([])
    }

    // Função para copiar o sku e associálo a tabela Locations.
    function handleInsertSku(e) {
        setSku_location(e.target.value)
        setSku_product(e.target.value)
    }


    // Função para  registrar produtos.
    async function handleRegisterProductLocation(e) {
        e.preventDefault()
        const dataProduct = {
            sku_product,
            desc_product,
        }


        try {
            setSku_location(sku_product)
            await api.post('products', dataProduct)


            if (lane_location !== '' || column_location !== '' || stand_location !== '') {

                dataLocation.push(lane_location, column_location, stand_location)
                setDataLocation([...dataLocation])
                dataLocation.forEach(async e => 
                    await  api.post('locations',{lane_location,column_location,stand_location, sku_location}) 
                    
                )

                
                

            }

            swal({ icon: 'success', title: 'Produto cadastrado com sucesso' })
            resetForms()


        } catch (err) {
            swal({ icon: 'error', title: `Erro ao cadastrar produto : ${err}` })
        }




    }


    // Funções para gravar os valores da localização em um array 
    function locationColumn(e, index) {
        column_location[index] = e.target.value
        setColumn_location([...column_location])
    }

    function locationLane(e, index) {
        lane_location[index] = e.target.value
        setLane_location([...lane_location])
    }

    function locationStand(e, index) {
        stand_location[index] = e.target.value
        setStand_location([...stand_location])
    }



    return (
        <main id="main-register">
            <div id="box-register">
                <Link id="back-link" to='/'><Backlink />Voltar</Link>
                <h1 id="title-register">Cadastro de produtos</h1>
                <form id="form-register" onSubmit={handleRegisterProductLocation}>
                    <div id="input-products-div">
                        <label htmlFor="sku" id="label-sku">Código : </label>
                        <input name="sku" type="text" id="input-sku"
                            autoComplete="off"
                            value={sku_product}
                            onChange={handleInsertSku}
                        />

                        <label htmlFor="desc" id="label-desc">Descrição : </label>
                        <input id="input-desc" name="desc" type="text"
                            autoComplete="off"
                            value={desc_product}
                            onChange={e => setDesc_product(e.target.value)}
                        />
                    </div>
                    <button type="button" id="add-locations" onClick={handleAddInputLocation}>
                        <Plus className="plus-locations" />
                        Adicionar localização
                    </button>

                    {locations.map((location, index) => (
                        <div id="location-div" key={index}>

                            <label htmlFor="lane" id="label-lane">Rua : </label>
                            <input name="lane" id="input-lane" type="text" autoComplete="off"
                                value={location.lane_location}
                                onChange={e => locationLane(e, index)}
                            />

                            <label htmlFor="col" id="label-col"> Coluna : </label>
                            <input name="col" id="input-col" type="text" autoComplete="off"
                                value={location.column_location}
                                onChange={e => locationColumn(e, index)}
                            />

                            <label htmlFor="stand" id="label-stand" >Suporte : </label>
                            <input id="input-stand" type="text" name="stand" autoComplete="off"
                                value={location.stand_location}
                                onChange={e => locationStand(e, index)}
                            />


                            <button id="remove-input" type="text"
                                onClick={(e) => handleRemoveInputLocation(e, index)}
                            ><RemoveInput size={20} />
                            </button>
                        </div>
                    ))}



                    <button id="button-register" type="submit"
                        disabled={sku_product === '' || desc_product === '' ? true : false}
                    >Cadastrar</button>

                </form>
            </div>

        </main>
    )
}