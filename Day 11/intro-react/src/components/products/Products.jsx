/* eslint-disable react/prop-types */
import { useState } from "react"
import { useEffect } from "react"

export default function Products({handleAddToCart}) {
    const [products,setProducts] = useState([])


    useEffect(()=>{
        fetch("./products.JSON")
        .then(data=> data.json() )
        .then(data=>setProducts(data))
    },[])

    // console.log("products", products)
  return (
    <div className="grid grid-cols-3 gap-4">
        {
            products.map(product => <div key={product.id} className="card bg-base-100  shadow-xl">
               
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>Category: {product.category} </p>
                  <h2>{product.price}</h2>
                  <div className="card-actions justify-end">
                    <button onClick={()=> handleAddToCart (product)} className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)
        }
    </div>
  )
}
