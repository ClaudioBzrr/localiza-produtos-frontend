import React from 'react'
import {useState} from 'react'
import './../../assets/styles/global.css'
import './styles.css'
import Header from './../../components/Header'
import {FiSearch as Search, FiTrash2 as Trash, FiEdit as Edit, FiSave as Save} from 'react-icons/fi'
import api from '../../services/api'
import swal from 'sweetalert'


export default function Home() {

    // declaração de contantes
    const  [arg,setArg] =  useState('')
    const  [desc_product,setDesc_product] =  useState('')
    const  [column_product,setColumn_product] =  useState('')
    const [products,setProducts] =  useState([])
    const [editable,setEditable] =  useState(false)

    
    //carregando os produtos
    // useEffect(()=>{
    //     api.get('products').then(response => setProducts(response.data))

    // })


    // função para buscar produtos
    async function handleSearchProducts(e){
        e.preventDefault()

        if(arg ===''){
            try{
                await api.get('/products').then(response => setProducts(response.data))
            }catch(err){
                swal({
                    icon:'error',
                    title:'Erro ao procurar produto',
                    text:`${err}`
                })
            }
        }else{
            try{
                await api.get(`products/search/${arg}`).then(response => response.data == [''] ? swal({icon:'error',title:'Produto não encontrado'}):setProducts(response.data))
            }catch(err){
                swal({
                    icon:'error',
                    title:'Erro ao buscar produto',
                    text:`${err}`
                })
            }
        }
    }

    //função para deletar os produtos
    function handleDeleteProducts(sku_product){
        swal({icon:'info',title:'Deseja deletar o produto selecionado ?',buttons:true,dangerMode:true})
        .then(async (willDelete) =>{
            if(willDelete){
                await api.delete(`products/${sku_product}`)
                setProducts(products.filter(product => product.sku_product !== sku_product))
                swal({icon:'success',title:'Produto deletado com sucesso'})

            }else{
                swal({icon:'info',title:'O produto não foi deletado'})
            }
        })
    
    }


    //função pra salvar produtos(através do contentEditable) sem ter que ir para outra página.
    async function HandleUpdateProducts(sku){
        const data = {desc_product,column_product}

            try{
    
                await api.put(`products/${sku}`,data)
                swal({
                    icon:"success",
                    title:"Alterações salvas com sucesso"
                })
            }catch(err){
                alert(err)
            }
            setEditable(!editable)
        
    }
    


    return (
        <main>
            <Header />
            <form onSubmit={handleSearchProducts}>
                
            <div id="localizar">
                <div id="caixa-pesquisa" >
                    <Search id="icon-search" />
                    <input id="input-pesquisa" type="search" name="search" 
                    autoComplete='off'
                    placeholder="Pesquisar produtos..." 
                    value={arg}
                    onChange={e =>setArg(e.target.value)}
                    />

                </div>
                <button id="botao-buscar" 
                type='submit'
                >Buscar</button>
            </div>
            </form>

            <div id="list">
                <ul id="list-heading">
                    <li id="list-sku-heading">Código</li>
                    <li id="list-desc-heading">Descrição</li>
                    <li id="list-col-heading">Coluna</li>
                    <li id="list-act-heading">Ação</li>
                </ul>
            </div>

            <div id="data">
                <ul id="items">



                    {
                        products.map(product => 
      
                        
                        
                        (
                            

                    <li id="list-items" key={product.sku_product}>
                        <div id="item-sku" >{product.sku_product}</div>

                        <div id="item-desc"
                        suppressContentEditableWarning={true}
                        onBlur={e  => e.target.innerText ===""? setDesc_product(product.desc_product):setDesc_product(e.target.innerText)}
                        contentEditable={editable}
                        >{product.desc_product}</div>
                        
                        <div id="item-col"
                        suppressContentEditableWarning={true}
                        onBlur={e  => desc_product === ""? setDesc_product(product.desc_product):setColumn_product(e.target.innerText)} 
                        contentEditable={editable}
                        >{product.column_product}</div>


                        <div id="item-act">
                            <Trash onClick={() => handleDeleteProducts(product.sku_product)} className="act"/>
                            <Edit onClick={()=>setEditable(!editable)} className="act"/>
                            <Save onClick={()=>HandleUpdateProducts(product.sku_product)} className="act"/>

                        </div>
                    </li>

                        )

                        )
                    }

                </ul>
            </div>
        </main>
    )
}