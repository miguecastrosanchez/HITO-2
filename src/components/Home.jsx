import CardPizza from "./CardPizza"
import Pizzanap from "../assets/pizzaNAP.jpeg"
import Pizzaesp from "../assets/piizaESP.jpeg"
import Pizzapep from "../assets/pizzaPEP.jpeg"

function Home(){
    return(
        <>
        <div className="cont-card-pizzas">

         <CardPizza imagen = {Pizzanap} tipo ="Pizza Napolitana" ingredientes = "mozarella, tomates, jamón, orégano" precio ="5950"/>
        
        <CardPizza imagen ={Pizzaesp} tipo ="Pizza Española" ingredientes = "mozarella, gorgonzola, parmesano, provolone" precio ="6950"/>

        <CardPizza imagen ={Pizzapep} tipo ="Pizza Pepperoni" ingredientes = "mozarella, pepperoni, orégano" precio ="6950"/>

        </div>
        
        </>
    )
}

export default Home