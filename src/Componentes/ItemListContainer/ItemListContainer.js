import { useState,useEffect } from "react"
import { getProducts,getProductByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import Footer from "../Footer/Footer"
import { useParams } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"

const ItemListContainer = ({greeting}) =>{

    const [ products,setProducs ] = useState([])
    const [ input,setInput] = useState('')

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFuntion = categoryId ? getProductByCategory : getProducts

        asyncFuntion(categoryId).then(products =>(
            setProducs(products)
            ))

    }, [categoryId])

    // const handleOnChance = (e) => {
    //     getProducts().then(products =>(
    //         setProducs(products)
    //         )
    //     )
    // }
        return(
            <>
                <Navbar/>
                <div className="mb-2 d-flex justify-content-end">
                    <form className="col-lg-auto mb-3 me-3 ms-3" role="search">
                        <input onChange={(e)=> setInput(e.target.value)} type="search" className="form-control" placeholder="Buscar..." aria-label="Search" value={input}/>                
                    </form>
                </div>
                <div className="bg-opacity-10 mx-3 rounded-4">
                    <h2 className="text-body">{greeting}</h2>
                </div>
                <ItemList  products={products}/>
                <Footer/>       
            </>
        )
}

export default ItemListContainer