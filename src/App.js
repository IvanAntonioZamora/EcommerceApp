import './App.css';
import { useState, createContext } from 'react';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Category from './Componentes/Category/Category';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home/Home';

export const CartContext = createContext()

function App() {

  const [cart, setCart] = useState([])
  console.log(cart);
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

  return (
      <div className="App">
        <CartContext.Provider value={{ cart, addItem, getQuantity }}>
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/list' element={<ItemListContainer greeting="VINILOS"/>} />
                <Route path='/category' element={<Category greeting="GENEROS"/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer greeting="VINILOS" />} />
                <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
                <Route path='*' element={<h1 className='text-center'>404 NOT FOUND</h1>} />
              </Routes>
          </BrowserRouter>
        </CartContext.Provider>
      </div>
  );
}

export default App;
