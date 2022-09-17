import { useState,useEffect } from 'react'

const Counter = ( {stock,onAdd} ) =>{

    const [count, setCount] = useState(1)

        useEffect(() =>{
        },[])
    
        const increment = () =>{
            if (count < stock) {
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
            <div className="row text-center">
                <div className="col-6 d-flex justify-content-center">
                    <div className="col-4"><button onClick={decrement} className="btn" type="button">-</button></div>
                    <div className="col-4"><h3 className="text-center">{count}</h3></div>
                    <div className="col-4"><button onClick={increment} className="btn" type="button">+</button></div>
                </div>
                <div className="col-6">
                    <button onClick={()=>onAdd(count)} className="btn btn-light btn-sm ms-3" type="button"><img className="me-3" src="../img/ico/anadir-al-carrito.png" alt="Carrito"/>Agregar</button>
                </div>
            </div>
        </div>  
    )

}
export default Counter

