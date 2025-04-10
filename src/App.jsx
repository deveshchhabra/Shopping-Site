import React from 'react'
import Header from './component/header'
import Body from './component/Body'
import ProductDetail from './component/ProductDetails'
import {Routes, Route } from 'react-router-dom'
import Cart from './component/Cart'
import Login from './component/Login'
const App = () => {
  return (
    <div>

      <Header />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/login" element={<Login />} />

        </Routes>
    </div>
  )
}

export default App