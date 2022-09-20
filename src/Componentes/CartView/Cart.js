import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useContext} from "react"
import CartContext from "../../Context/Context"
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () =>{

    const { cart, clearCart, getQuantity, getTotal} = useContext(CartContext)

    
    const totalQuantity = getQuantity()
    const total = getTotal()

    if(totalQuantity === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (
        <>
            <Navbar/>
                    <div className="d-flex flex-wrap justify-content-center py-3 mb-4 mx-3">
                        <div className="col-md-8 col-lg-7 order-md-last">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-primary">Carrito</span>
                                <span className="badge bg-primary rounded-pill">{totalQuantity}</span>
                            </h4>
                        {cart.map(p => <CartItem key={p.id} {...p}/>)}
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (MXN)</span>
                                    <strong>${total}</strong>
                                    <button onClick={() => clearCart()} className="btn btn-outline-secondary btn-sm text-wrap">Limpiar</button>
                                    <button type="button" className="btn btn-outline-secondary btn-sm"><Link to='/checkout' className='text-decoration-none text-wrap'>Crear Orden</Link></button>
                                </li>
                            </ul>
                        </div>
                    </div>
            <Footer/>
        </>
    )
}

export default Cart