import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useContext} from "react"
import CartContext from "../../Context/Context"

const Cart = () =>{

    const { cart, getQuantity } = useContext(CartContext)
    const cantidad = getQuantity()
    const sumPrice = () =>{
        let accu = 0
        cart.forEach(prod => {  
                accu = parseInt(accu) + parseInt(prod.price2 * prod.quantity)
        })
        return accu
    }

    return (
        <>
            <Navbar/>
                    <div className="d-flex flex-wrap justify-content-center py-3 mb-4 mx-3">
                        <div className="col-md-8 col-lg-7 order-md-last">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-primary">Carrito</span>
                                <span className="badge bg-primary rounded-pill">{cantidad}</span>
                            </h4>
                            {cart.map(prod => 
                            <div key={prod.id}>
                                <ul className="list-group mb-1">
                                    <li className="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                        <h6 className="my-0">{prod.title}</h6>
                                        <small className="text-muted">Cantidad: {prod.quantity}</small>
                                        </div>
                                        <div>
                                            <span className="text-muted">$ {prod.price2 * prod.quantity}</span><br/>
                                            <small className="text-muted">Unidad: $ {prod.price2}</small>
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-outline-danger btn-sm">remover</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            )}
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (MXN)</span>
                                    <strong>${sumPrice()}</strong>
                                    <button type="button" className="btn btn-outline-secondary btn-sm">Crear Orden</button>
                                </li>
                            </ul>
                        </div>
                    </div>
            <Footer/>
        </>
    )
}

export default Cart