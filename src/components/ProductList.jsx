import React from 'react'
import Product from './Product'

export default function ProductList(props) {
    
    return (
      props.productList.length>0 ?
    props.productList.map((product,i)=>{
        return <Product product={product} key={i} increamentQuantity={props.increamentQuantity} decreamentQuantity={props.decreamentQuantity} index={i} removeItem={props.removeItem}/>
    })
    : <h1>No any product exists</h1>
  )
}
