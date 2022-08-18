import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../App'

const InputCount = ({onConfirm, stock, initial = 1}) => {
    const [count, setCount] = useState(initial)

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

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
        if (count > 1) {
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

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)
        const productToAdd = {
            id, albumId, title, price2, quantity
        }

        addItem(productToAdd)
    }

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
                        <Count onConfirm={handleOnAdd} stock={stock} />
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
            }

            {/* <Counter stock={products.stock} onAdd={CarWidget}/>          */}
        </>
    )
}

export default ItemDetail