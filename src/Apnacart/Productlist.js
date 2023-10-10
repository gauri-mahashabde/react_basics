import React from 'react'
import Product from './Product'

function Productlist(props) {
    
  return (

    <>
{props.productList.map((product,i) => {
    return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index = {i}/>
})}
</>
  )
}

export default Productlist;