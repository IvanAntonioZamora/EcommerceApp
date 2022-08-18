import { useState, createContext } from 'react';

const CartContext = createContext()

export const CartContextProvide =( {children} ) =>{

    const [cart, setCart] = useState([])
    const addItem = (productToAdd) =>{
    setCart([...cart, productToAdd])
    }

    const getQuantity = () =>{
        let accu = 0

    cart.forEach(prod => {
      accu += prod.quantity
    })
    return accu
  }

  return(
    <CartContext.Provider value={{ cart, addItem, getQuantity }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext