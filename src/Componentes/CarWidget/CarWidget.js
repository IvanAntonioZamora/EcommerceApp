import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../App"

const CarWidget = () =>{

    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity()

    return (
        <Link to='/cart' className="CartWidget">
            <img src="../img/ico/shopping-cart.png" alt="CarShop"/> {quantity}
        </Link>
    )
}

export default CarWidget