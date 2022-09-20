import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/Context'
import NotificationContext from '../../Context/Notification'

const InputCount = ({onConfirm, stock, initial = 0}) => {
    const [count, setCount] = useState(initial)

    useEffect(() => {
        setCount(initial)
    }, [initial])

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, stock, initial = 1}) => {
    const [count, setCount] = useState(initial)

    useEffect(() => {
        setCount(initial)
    }, [initial])

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)    
        }  
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({id, albumId, title, artist, genero, description, price, price2, stock}) =>{
    const [inputType, setInputType] = useState('button')
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)

    const {setNotification} =  useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)
        const productToAdd = {
            id, albumId, title, price2, quantity
        }

        addItem(productToAdd)
        setNotification('success', `Se egregaron ${quantity} discos de ${title}`)
    }

    const productQuantity = getProductQuantity(id)
    const Count = inputType === 'button' ? ButtonCount : InputCount

    return (
        <>
            <button onClick={() => setInputType(inputType === 'button' ? 'input' : 'button')}>{inputType === 'button' ? 'pasar a input' : 'pasar a button'}</button>
            <h5 className="text-star" >Album: { title }</h5>
            <h5 className="text-star" >Artista: { artist }</h5>
            <h5 className="text-star" >Genero: { genero }</h5>
            <h5 className="text-star" >Precio: { price }</h5>
            <h5 className="text-star" >Stock: { stock }</h5>
            <h5 className="text-star" >Descripcion: { description }</h5>
            {
                    quantityToAdd === 0 ? (
                        <Count onConfirm={handleOnAdd} stock={stock} initial={productQuantity}/>
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
            }

            {/* <Counter stock={products.stock} onAdd={CarWidget}/>          */}
        </>
    )
}

export default ItemDetail