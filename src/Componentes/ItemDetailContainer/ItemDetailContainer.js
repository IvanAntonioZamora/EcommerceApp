import { useState,useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import Footer from "../Footer/Footer"
import { useParams } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const { productId } = useParams()

    useEffect(() => {

        getProductById(productId)
            .then(product =>{
                setProduct(product)
            })
            .catch(error =>{
                console.log(error);
            })
    },[])

    return(
        <>
            <Navbar/>
            <div className="mx-3">
                <h2>Detalle</h2>
                <ItemDetail {...product}/>
            </div>
            <Footer/>
        </>
    )
}

export default ItemDetailContainer