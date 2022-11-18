import "./Header.css"
import Datadisplayer from "./fetchBTC"
import Datadisplayer1 from "./fetchETH"
import React from 'react'
import ReactDOM from 'react-dom/client'
import pepe from "./assets/pepe.png"
import arrowD from "./assets/arrow-down-sign-to-navigate.png"
import menu from "./assets/menu.png"

function Header() {
    return (
        <header>
            <div className="headerDiv">
                <img src={pepe}/>
                <div className="exArrow">
                    <div>
                    Exchange 
                    </div>
                    <div>
                    <img src={arrowD} className="arrow" />
                    </div>
                </div>
                <div className="fuArrow">
                    <div>
                       Futuros
                    </div>
                    <div>
                       <img src={arrowD} className="arrow" />
                    </div>
                </div>
                <div className="spArrow">
                    <div>
                       Spot
                    </div>
                    <div>
                        <img src={arrowD} className="arrow" />
                    </div>
                </div>
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
                <img  src={menu}/>
            </div>
        </header>
     )
   }
   
   export default Header
   