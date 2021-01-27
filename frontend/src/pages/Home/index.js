import React from 'react'
import {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './../../assets/styles/global.css'
import './styles.css'
import Header from './../../components/Header'
import {FiSearch as Search, FiTrash2 as Trash, FiEdit as Edit} from 'react-icons/fi'
import api from '../../services/api'
import swal from 'sweetalert'
import {Dialog, DialogTitle,DialogContent,DialogActions ,Button,TextField, makeStyles} from '@material-ui/core'



export default function Home() {

    // declaração de constantes
    const history =  useHistory()
    const [open,setOpen] =  useState(false)
    const [loading,setLoading] = useState(false)
    const  [arg,setArg] =  useState('')
    const [products,setProducts] =  useState([])
    const [desc_product,setDesc_product] = useState('')
    const [column_product,setColumn_product] = useState('')



// configurações do modal de edição de produtos

    const handleOpen = (sku) => {
        setProducts(products.filter(product => product.sku_product === sku))
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };

// função apra cancelar o modal de edição


    function handleCloseEdit(e){
        e.preventDefault()
        handleClose()

    }

// função para editar os capturar os dados ao editar os produtos


    // const stylesModal = makeStyles

    
    // função para buscar produtos
    async function handleSearchProducts(e){
        setLoading(true)
        e.preventDefault()
        if(arg ===''){
            try{
                await api.get('products').then(response => setProducts(response.data))
                setLoading(false)

            }catch(err){
                swal({
                    icon:'error',
                    title:'Erro ao procurar produto',
                    text:`${err}`
                })

            }

        }else{
            try{
                await api.get(`products/search/${arg}`).then(response => response.data =='' ? swal({icon:'error',title:'Produto não encontrado'}):setProducts(response.data))
                setLoading(false)
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

    // Função para editar os produtos

    async function handleEditProducts(e,sku_product){
        e.preventDefault()

        const dataEdit ={desc_product, column_product}
        await api.put(`products/${sku_product}`,dataEdit)
        handleClose()
        swal({icon:'success',title:'Produto alterado com sucesso'})
        setLoading(true)
        await api.get(`products/search/${sku_product}`).then(response => setProducts(response.data))
        setLoading(false)
        
        
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
                disabled ={loading === true ? true : false}
                >{loading ? 'Carregando' : 'Buscar'}</button>
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

                        loading ? (
                            <div class="sk-fading-circle">
                                <div class="sk-circle1 sk-circle"></div>
                                <div class="sk-circle2 sk-circle"></div>
                                <div class="sk-circle3 sk-circle"></div>
                                <div class="sk-circle4 sk-circle"></div>
                                <div class="sk-circle5 sk-circle"></div>
                                <div class="sk-circle6 sk-circle"></div>
                                <div class="sk-circle7 sk-circle"></div>
                                <div class="sk-circle8 sk-circle"></div>
                                <div class="sk-circle9 sk-circle"></div>
                                <div class="sk-circle10 sk-circle"></div>
                                <div class="sk-circle11 sk-circle"></div>
                                <div class="sk-circle12 sk-circle"></div>
                            </div>
                      ) : 
                        products.map(product => 
      
                        
                        
                        (
                            

                    <li id="list-items" key={product.sku_product}>
                        <div id="item-sku" >{product.sku_product}</div>
                        <div id="item-desc">{product.desc_product}</div>
                        <div id="item-column">{product.column_product}</div>



                        <div id="item-act">
                            <Edit className='act' onClick={() =>handleOpen(product.sku_product)}/>

                                    <Dialog open={open} onClose={handleClose} id="modal-edit" >

                                        <DialogTitle>Editar produto</DialogTitle>

                                        <form onSubmit={(e) => handleEditProducts(e,product.sku_product)}>


                                            <DialogContent>
                                                <TextField label="Código" defaultValue={product.sku_product} inputProps={{ readOnly: true }} disabled={true} fullWidth margin="dense" />

                                                <TextField label="Descrição" defaultValue={product.desc_product} fullWidth margin="dense"
                                                    onChange={e =>  setDesc_product(e.target.value)} />

                                                <TextField label="Coluna" defaultValue={product.column_product} fullWidth margin="dense"
                                                    onChange={e => setColumn_product(e.target.value)  }  />
                                            </DialogContent>

                                            <DialogActions>

                                                <Button color="secondary" variant="contained" onClick={e => handleCloseEdit(e)} type="text" >
                                                    Cancelar
                                                </Button>
                                                <Button variant="contained" color="primary" type="submit">
                                                    Salvar
                                            </Button>
                                            </DialogActions>
                                        </form>
                                    </Dialog>
                            <Trash className='act'
                            onClick={() => handleDeleteProducts(product.sku_product)}
                            />

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