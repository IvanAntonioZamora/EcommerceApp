import { useContext } from 'react'
import CartContext from '../../Context/Context'


const CartItem = ({ id, title, quantity, price2 }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div >
            <ul className="list-group mb-1">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                    <h6 className="my-0">{title}</h6>
                    <small className="text-muted">Cantidad: {quantity}</small>
                    </div>
                    <div>
                        <span className="text-muted">$ {price2 * quantity}</span><br/>
                        <small className="text-muted">Unidad: $ {price2}</small>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(id)}>Remover</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default CartItem