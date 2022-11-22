import "./App.css"
import ex from "./assets/images.png"

function Second(){
    return(
        <div className="man">
      <div>
        <div className="rigthText1">
           Disfruta del exchange con mayor volumen del mercado. Puedes operar con cientos de criptomonedas e interfaces 
           adaptables a tu nivel de experiencia como trader. Spot se divide en 2 niveles, el fácil, que es el intercambio 
           directo entre las principales criptomonedas, y el avanzado
        </div>
      </div> 
      <div>
        <div className="main1">
          <div>
            <div className="mainText1">
              Quienes somos?
            </div>
            <div className="mainText">
               We are a 100% trustly Exchange,
               Pensado en y para la gente
            </div>
          </div>
          <div>
           <img src={ex} className="imgEx"></img>
          </div>
        </div>
      </div>  
    </div>
    )
}
export default Second