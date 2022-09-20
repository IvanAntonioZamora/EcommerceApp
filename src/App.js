import './App.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Category from './Componentes/Category/Category';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home/Home';
import {CartContextProvide} from './Context/Context';
import {NotificationProvider} from './Context/Notification';
import Cart from './Componentes/CartView/CartView';

function App() {
  
  return (
      <div className="App">
        <NotificationProvider>
          <CartContextProvide>
            <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/list' element={<ItemListContainer greeting="VINILOS"/>} />
                  <Route path='/category' element={<Category greeting="GENEROS"/>} />
                  <Route path='/cart' element={<Cart greeting="CARRITO"/>} />
                  <Route path='/category/:categoryId' element={<ItemListContainer greeting="VINILOS" />} />
                  <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
                  <Route path='*' element={<h1 className='text-center'>404 NOT FOUND</h1>} />
                </Routes>
            </BrowserRouter>
          </CartContextProvide>
        </NotificationProvider>
      </div>
  );
}

export default App;
