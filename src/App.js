import './App.css';
import { useState } from 'react';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Category from './Componentes/Category/Category';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home/Home';

function App() {

  const [cart, setCart] = useState([])
  console.log(cart);
  const addItem = (productToAdd) =>{
    setCart([...cart, productToAdd])
  }

  return (
      <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/list' element={<ItemListContainer greeting="VINILOS"/>} />
              <Route path='/category' element={<Category greeting="GENEROS"/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="VINILOS" />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer addItem={addItem}/>} />
              <Route path='*' element={<h1 className='text-center'>404 NOT FOUND</h1>} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
