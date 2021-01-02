import React from 'react'
import './../../assets/styles/global.css'
import './styles.css'
import Header from './../../components/Header'
import {FiSearch as Search, FiTrash2 as Trash, FiEdit as Edit} from 'react-icons/fi'


export default function Home() {
    return (
        <main>
            <Header />
            <div id="localizar">
                <div id="caixa-pesquisa" >
                    <Search id="icon-search" />
                    <input id="input-pesquisa" type="search" name="search" placeholder="Pesquisar produtos..." />

                </div>
                <button id="botao-buscar">Buscar</button>
            </div>

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
                    <li id="list-items">
                        <div id="item-sku">1234</div>
                        <div id="item-desc">tal tal</div>
                        <div id="item-col">1</div>
                        <div id="item-act"><Trash className="act"/><Edit className="act"/></div>
                    </li>

                    <li id="list-items">
                        <div id="item-sku">12345678910</div>
                        <div id="item-desc">tal taltal taltal taltal taltal tal</div>
                        <div id="item-col">1</div>
                        <div id="item-act"><Trash  className="act"/><Edit className="act"/></div>
                    </li>
                    <li id="list-items">
                        <div id="item-sku">12345678910</div>
                        <div id="item-desc">tal taltal taltal taltal taltal tal</div>
                        <div id="item-col">1</div>
                        <div id="item-act"><Trash  className="act"/><Edit className="act"/></div>
                    </li>

                    <li id="list-items">
                        <div id="item-sku">12345678910</div>
                        <div id="item-desc">tal taltal taltal taltal taltal tal</div>
                        <div id="item-col">1</div>
                        <div id="item-act"><Trash  className="act"/><Edit className="act"/></div>
                    </li>

                    <li id="list-items">
                        <div id="item-sku">12345678910</div>
                        <div id="item-desc">tal taltal taltal taltal taltal tal</div>
                        <div id="item-col">1</div>
                        <div id="item-act"><Trash  className="act"/><Edit className="act"/></div>
                    </li>
                    <li id="list-items">
                        <div id="item-sku">12345678910</div>
                        <div id="item-desc">tal taltal taltal taltal taltal tal</div>
                        <div id="item-col">1</div>
                        <div id="item-act"><Trash  className="act"/><Edit className="act"/></div>
                    </li>
                    <li id="list-items">
                        <div id="item-sku">12345678910</div>
                        <div id="item-desc">tal taltal taltal taltal taltal tal</div>
                        <div id="item-col">1</div>
                        <div id="item-act"><Trash  className="act"/><Edit className="act"/></div>
                    </li>

                    <li id="list-items">
                        <div id="item-sku">12345678910</div>
                        <div id="item-desc">tal taltal taltal taltal taltal tal</div>
                        <div id="item-col">1</div>
                        <div id="item-act"><Trash  className="act"/><Edit className="act"/></div>
                    </li>
                    <li id="list-items">
                        <div id="item-sku">12345678910</div>
                        <div id="item-desc">tal taltal taltal taltal taltal tal</div>
                        <div id="item-col">1</div>
                        <div id="item-act"><Trash  className="act"/><Edit className="act"/></div>
                    </li>
                    <li id="list-items">
                        <div id="item-sku">12345678910</div>
                        <div id="item-desc">tal taltal taltal taltal taltal tal</div>
                        <div id="item-col">1</div>
                        <div id="item-act"><Trash  className="act"/><Edit className="act"/></div>
                    </li>
                    <li id="list-items">
                        <div id="item-sku">12345678910</div>
                        <div id="item-desc">tal taltal taltal taltal taltal tal</div>
                        <div id="item-col">1</div>
                        <div id="item-act"><Trash  className="act"/><Edit className="act"/></div>
                    </li>
                    <li id="list-items">
                        <div id="item-sku">12345678910</div>
                        <div id="item-desc">tal taltal taltal taltal taltal tal</div>
                        <div id="item-col">1</div>
                        <div id="item-act"><Trash  className="act"/><Edit className="act"/></div>
                    </li>
                    <li id="list-items">
                        <div id="item-sku">12345678910</div>
                        <div id="item-desc">tal taltal taltal taltal taltal tal</div>
                        <div id="item-col">1</div>
                        <div id="item-act"><Trash  className="act"/><Edit className="act"/></div>
                    </li>
                    <li id="list-items">
                        <div id="item-sku">12345678910</div>
                        <div id="item-desc">tal taltal taltal taltal taltal tal</div>
                        <div id="item-col">1</div>
                        <div id="item-act"><Trash  className="act"/><Edit className="act"/></div>
                    </li>
                    <li id="list-items">
                        <div id="item-sku">12345678910</div>
                        <div id="item-desc">tal taltal taltal taltal taltal tal</div>
                        <div id="item-col">1</div>
                        <div id="item-act"><Trash  className="act"/><Edit className="act"/></div>
                    </li>
                </ul>
            </div>
        </main>
    )
}