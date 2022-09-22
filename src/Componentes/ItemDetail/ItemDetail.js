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
            <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={decrement}>-</button>
                  <input type='text'  className='text-center' value={count} disabled/>
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={increment}>+</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => onConfirm(count)}>Agregar al carrito</button>
                </div>
                {/* <small className="text-muted">{count}</small> */}
            </div>
        </div>
    )
}

const ItemDetail = ({id, albumId, title, artist, genero, description, price, price2, stock}) =>{
    // const [inputType, setInputType] = useState('button')
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
    // const Count = inputType === 'button' ? ButtonCount : InputCount

    return (
        <>
            <div className="card mx-1" style={{width:"50rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Album: { title }</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Artista: { artist }</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Genero: { genero }</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Precio: { price }</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Stock: { stock }</h6>
                    <p className="card-text text-center">Descripcion: { description }</p>
                    <div className='d-flex justify-content-center'>
                        {
                        quantityToAdd === 0 ? (
                            <ButtonCount onConfirm={handleOnAdd} stock={stock} initial={productQuantity}/>
                        ) : (
                            <Link className="card-link" to='/cart'>Finalizar compra</Link> 
                        )
                        }
                    </div>
                </div>
            </div>             
            {/* <button onClick={() => setInputType(inputType === 'button' ? 'input' : 'button')}>{inputType === 'button' ? 'pasar a input' : 'pasar a button'}</button> */}
        </>
    )
}

export default ItemDetail