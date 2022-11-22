import "./Header.css"
import Datadisplayer from "./fetchBTC"
import Datadisplayer1 from "./fetchETH"
import React from 'react'
import ReactDOM from 'react-dom/client'
import pepe from "./assets/pepe.png"
import arrowD from "./assets/arrow-down-sign-to-navigate.png"
import menu from "./assets/menu.png"
import {FutuM ,ExchangeM, SpotM} from "./HeadersMenu"
import MatedMenu from "./aniMenu"


function Header() {
    return (
        <header>
            <div className="headerDiv">
                <img src={pepe}/>
                <ExchangeM/>
                <FutuM/>
                <SpotM/>
            </div>
            <div className="headerDiv">
                <div>
                    <Datadisplayer/>        
                </div>
                <div>
                    <Datadisplayer1/>
                </div>    
            </div>
            <div className="headerDiv">
                <div>
                   Iniciar Sesion
                </div>
                <div>
                   Registrarse
                </div>
                <MatedMenu/>
            </div>
        </header>
     )
   }
   
   export default Header
   