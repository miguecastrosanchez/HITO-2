
import Button from 'react-bootstrap/Button';


function CardPizza(props){

    return(
        <>
        <div className="card-pizza card mx-2">
          <img src={props.imagen} className="card-pizza" alt="Pizza" />
          
          <div className="card-body">
            
            <div className="informacion">
             <h2>{props.tipo}</h2>
            <h5 className="card-title fw-light mb-3 text-center ">
              Ingredientes:
            </h5>
            <p className="ingredientes fs-6 text-center">🍕 {props.ingredientes}
            </p>
            <hr />
            </div>
          <div className='cont-precio-botones'>

            <div className="precio-pizza text-center fs-3">
            Precio: ${props.precio}
             </div>

            <div className="botones-card">
                <Button variant="dark">Ver Más 👀</Button>
                <Button variant="dark">Añadir 🛒</Button>
            </div>
          </div>             
          </div>
        </div>
        </>
    )
}

export default CardPizza