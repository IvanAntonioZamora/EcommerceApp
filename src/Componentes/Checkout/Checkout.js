import { useState, useContext } from "react"
import CartContext from "../../Context/Context"

import { db } from "../../service/firebase"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'

import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

import NotificationContext from '../../Context/Notification'
import CartItem from '../CartItem/CartItem'


const Checkout = () => {

    const {setNotification} =  useContext(NotificationContext)
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext) 

    const navigate = useNavigate()

    const totalQuantity = getQuantity()
    const total = getTotal()

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    
    const createOrder = async () => {
        setIsLoading(true)
        try {
            const objOrder = {
                buyer: {
                    firstName: nombre,
                    lastName: apellido,
                    email: email,
                    address: address
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = productsAddedFromFirestore
    
            const outOfStock = []
    
            const batch = writeBatch(db)
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
    
                console.log(`El id de su orden es: ${orderAdded.id}`)
                clearCart()
                setOrderCreated(true)
                setTimeout(() => {
                    navigate('/list')
                }, 3000)
            } else {
                console.log('Hay productos que estan fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    if(isLoading) {
        setNotification('default', `Se esta generando tu orden...`)
        // return <h1>Se esta generando tu orden...</h1>
    }

    if(orderCreated) {
        setNotification('success', `La orden fue creada correctamente, sera redirigido al listado de productos en 3 segundos`)
        // return <h1>La orden fue creada correctamente, sera redirigido al listado de productos en 3 segundos</h1>
    }

    return (
        <>
            <Navbar/>
            <div className="container mb-5">
                <div className="py-5 text-center">
                    <h2>Checkout</h2>
                    <p className="lead">Llenar con los datos requeridos</p>
                </div>
                <div className="row g-5">
                    <div className="col-md-6 col-lg-5 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Carrito</span>
                            <span className="badge bg-primary rounded-pill">{totalQuantity}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {cart.map(p => <CartItem key={p.id} {...p}/>)}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (MXN)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-7">
                        <h4 className="mb-3">Dirección de Envio</h4>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label for="firstName" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="firstName" onChange={event => setNombre(event.target.value)}/>
                                </div>
                                <div className="col-sm-6">
                                    <label for="lastName" className="form-label">Apellidos</label>
                                    <input type="text" className="form-control" id="lastName" onChange={event => setApellido(event.target.value)}/>
                                </div>
                                <div className="col-12">
                                    <label for="username" className="form-label">Email</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text">@</span>
                                            <input type="text" className="form-control" id="username" onChange={event => setEmail(event.target.value)}/>
                                        </div>
                                </div>
                                <div className="col-12">
                                    <label for="address" className="form-label">Dirección</label>
                                    <input type="text" className="form-control" id="address" onChange={event => setAddress(event.target.value)}/>
                                </div>
                            </div>
                            <hr className="my-4"/>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address"/>
                                <label className="form-check-label" for="same-address">La dirección de envío es la misma que mi dirección de facturación</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info"/>
                                <label className="form-check-label" for="save-info">Guarda esta información para la próxima vez</label>
                            </div>
                            <hr className="my-4"/>
                            <button className="w-100 btn btn-primary btn-lg" onClick={createOrder}>Generar Orden</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Checkout