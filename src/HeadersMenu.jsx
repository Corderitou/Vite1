import pepe from "./assets/pepe.png"
import arrowD from "./assets/arrow-down-sign-to-navigate.png"
import menu from "./assets/menu.png"
import { useState } from "react"

function ExchangeM(){
    const [active, setActive] = useState("ave1r")
    return(
        <div className="exArrow"      
            onMouseOut={()=> setActive("aver1")}
            onMouseOver={()=> setActive("aver")}>
            <div>
                Exchange 
            </div>
            <img src={arrowD} className="arrow" />
            {active === "aver" && <div className="divMenu" >
             <h3 className="a">Example</h3>
                <h3 className="a">Staking</h3>
            <h3 className="a">Prestamo</h3>
             <h3 className="a">Comprar Cricto</h3>
 </div>}
        </div>
    )
}

function FutuM(){
    const [active, setActive] = useState("ave1r")
    return (
    <div className="fuArrow"
        onMouseOut={()=> setActive("aver1")}
        onMouseOver={()=> setActive("aver")}>
        <div>
           Futuros
        </div>
        <div>
           <img src={arrowD} className="arrow" />
        </div>
        {active === "aver" && <div className="divMenu" >
            <h3 className="a">Spot</h3>
            <h3 className="a">Staking</h3>
            <h3 className="a">Prestamo</h3>
            <h3 className="a">Comprar Cricto</h3>
        </div>}
</div>
    )
}

function SpotM(){
    const [active, setActive] = useState("ave1r")
    return(
        <div className="spArrow" 
        onMouseOut={()=> setActive("aver1")}
        onMouseOver={()=> setActive("aver")}>
                    <div>
                       Spot
                    </div>
                    <div>
                        <img src={arrowD} className="arrow" />
                    </div>
                    {active === "aver" && <div className="divMenu" >
                        <div className="a">
                            <h3>Spot</h3>
                        </div>
                        <div className="a">
                            <h3>Futu</h3>
                        </div>
                        <div className="a">
                            <h3>Staking</h3>
                        </div>
                                          </div>}
        </div>
    )
  
}



export {FutuM, ExchangeM, SpotM}
