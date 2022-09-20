import { useState,useEffect } from "react"
// import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import Footer from "../Footer/Footer"
import { useParams } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../service/firebase"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const { productId } = useParams()

    useEffect(() => {

        getDoc(doc(db, 'products', productId)).then(response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        }).catch(error => {
            console.log(error);
        })
        // getProductById(productId)
        //     .then(product =>{
        //         setProduct(product)
        //     })
        //     .catch(error =>{
        //         console.log(error);
        //     })
    },[productId])

    return(
        <>
            <Navbar/>
            <div className="mx-3">
                <h2>DETALLE</h2>
                <div className="my-3 mx-3 d-flex align-self-center">
                    <ItemDetail {...product}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ItemDetailContainer