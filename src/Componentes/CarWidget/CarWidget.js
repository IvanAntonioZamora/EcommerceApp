import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../Context/Context"

const CarWidget = () =>{

    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity()

    if (quantity === 0) return

    return (
        <Link to='/cart' className="CartWidget mx-3 fw-bold text-decoration-none">
            <img src="../img/ico/shopping-cart.png" alt="CarShop"/> {quantity}
        </Link>
    )
}

export default CarWidget