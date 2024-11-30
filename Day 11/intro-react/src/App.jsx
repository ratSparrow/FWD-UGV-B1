import { useState } from 'react'
import './App.css'
import Products from './components/products/Products'
import Header from './components/shared/Header'


function App() {
  const [cart,setCart] = useState([])
  const handleAddToCart = (product) =>{
    console.log("product add hoise", product)
    const newCart = [...cart,product]
    setCart(newCart)
}

// console.log("cart", cart)
  return (
    <>
      <Header cart ={cart}></Header>
      <Products handleAddToCart={handleAddToCart}></Products>
    </>
  )
}

export default App
