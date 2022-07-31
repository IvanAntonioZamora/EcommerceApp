import { useState,useEffect } from 'react'
const Counter = ( {stock,onAdd} ) =>{

    const [count, setCount] = useState(1)

        useEffect(() =>{
            console.log("Se ejecuta despues");
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
            <div className="d-inline-flex">
                <button onClick={decrement} className="btn" type="button"><img src="img\ico\boton-menos.png" alt="Menos"/></button>
                <h1 className="text-center">{count}</h1>
                <button onClick={increment} className="btn ms-3" type="button"><img src="img\ico\mas.png" alt="Mas"/></button>
            </div>
            <div>
                <button onClick={()=>onAdd(count)} className="btn btn-secondary btn-sm ms-3" type="button">Agregar</button>
            </div>
        </div>  
    )

}
export default Counter