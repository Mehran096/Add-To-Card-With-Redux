import React, {useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import currencyFormatter from 'currency-formatter';
import {GiHealthIncrease} from "react-icons/gi";
import {FaMinusSquare } from "react-icons/fa";
import {RiDeleteBin5Line} from "react-icons/ri";
 

const Cart = () => {
    const {products, totalPrice, totalQuantities} = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
     
     
    return (
        <div className="container  align-items-center">
         <div className="row mt-5 text-center main-row">
                <div className="col-lg-6  col-md-12 col-sm-12"> 
      
                <div>your card</div>
           
{products.length > 0 ? <div>
<div className="table-responsive"></div>
<table className="table">
  <thead>
    <tr>
      <th scope="col">Picture</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">INC/DEC</th>
      <th scope="col">Total Price</th>
      <th scope="col">Product Quantity</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
  {products.map(product =>(
    <tr key={product.id}>

      <td style={{width:"150px", height:"150px"}}><div className="image-tab" style={{width:"150px", height:"150px"}}><img style={{width:"130px", height:"130px"}} src={`/images/${product.image}`} alt="" /></div></td>
      <td>{product.name}</td>
      <td><div className="text-center">{currencyFormatter.format(product.discountPrice, { code: 'USD' })}</div></td>
      <td><div className="main-inc">
      <span className="dec" onClick={() => dispatch({type: "DEC", payload:product.id})}><FaMinusSquare/></span><span className="count">{product.Quantity}</span><span className="inc" onClick={() => dispatch({type: "INC", payload: product.id })}><GiHealthIncrease/></span>
                </div></td>
      <td><div>{product.discountPrice * product.Quantity}</div></td>
      <td><div>{product.Quantity}</div></td>
      <td><div className="font-weight-bolder typed-cursor" onClick={() => dispatch({type: "REMOVE", payload: product.id})}><RiDeleteBin5Line/></div></td>
    </tr>
    ))}
     
    
  </tbody>
</table>
</div> : 'your cart is empty'}
                </div>
                <div className="col-lg-6  mt-5 col-md-12 col-sm-12 main-dev">
                <div className="responsive">
                    <div className="row  summary detail">
                     <div className="col-12">Summary</div> 

                    </div>
                     
                      <div className="row mt-3 main-dt  detail">
                        <div className="col-6">Total Items:</div>
                        <div className="col-6">{totalQuantities}</div>
                      
                      
                        <div className="col-6 mt-3">Total Price:</div>
                        <div className="col-6 mt-3">{currencyFormatter.format(totalPrice, { code: 'USD' })}</div>
                      </div>
                      <div className="row  mt-3 checkout detail">
                     <div className="col-12">CHECKOUT</div> 

                    </div>

                     
                </div>
                </div>
            </div>
            
            </div>  
    )
}

export default Cart

{/* <th scope="row">{1}</th> */}