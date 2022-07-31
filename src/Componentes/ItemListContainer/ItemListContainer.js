import { useState,useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) =>{

    const [ products,setProducs ] = useState([])

    useEffect(() => {
        getProducts().then(products =>(
            setProducs(products)
            )
        )
    }, [])

        return(
            <>
                <div>
                    <h1>{greeting}</h1>
                </div>
                <ItemList  products={products}/>        
            </>
        )
}

export default ItemListContainer