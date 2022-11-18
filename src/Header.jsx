import "./Header.css"
import Datadisplayer from "./fetchBTC"
import Datadisplayer1 from "./fetchETH"
import React from 'react'
import ReactDOM from 'react-dom/client'



function Header() {
    return (
        <header>
            <div className="headerDiv">
                <img src="src/assets/pepe.png"/>
                <div className="exArrow">
                    <div>
                    Exchange 
                    </div>
                    <div>
                    <img src="src/assets/arrow-down-sign-to-navigate.png" className="arrow" />
                    </div>
                </div>
                <div className="fuArrow">
                    <div>
                       Futuros
                    </div>
                    <div>
                       <img src="src/assets/arrow-down-sign-to-navigate.png" className="arrow" />
                    </div>
                </div>
                <div className="spArrow">
                    <div>
                       Spot
                    </div>
                    <div>
                        <img src="src/assets/arrow-down-sign-to-navigate.png" className="arrow" />
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
                <img  src="src/assets/menu.png"/>
            </div>
        </header>
     )
   }
   
   export default Header
   