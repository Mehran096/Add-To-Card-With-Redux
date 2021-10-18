import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import currencyFormatter from 'currency-formatter';
import {GiHealthIncrease} from "react-icons/gi";
import {FaMinusSquare } from "react-icons/fa";
 
const Details = () => {
    const [Quantity, setQuantity] = useState(1)
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductReducer);
     useEffect(() => {
         dispatch({type:'PRODUCT', id})
     }, [id]);
     const decQuantity = () => {
            if(Quantity > 1){
                setQuantity(Quantity-1)

            }
     }
    return (
        <div className="container  align-items-center">
         <div className="row mt-5 text-center">
                <div className="col-lg-6 img-tag col-sm-12"> <img src={`/images/${product.image}`} alt="" /></div>
                <div className="col-lg-6 col-sm-12">
                <div className="currency-f">
                <span className="mr-4 font-weight-bold">PRICE</span>
                <span className="font-weight-bold">{currencyFormatter.format(product.discountPrice, { code: 'USD' })}</span>
                </div>
                <div className="main-inc mt-sm-3">
                    <span className="inc" onClick={() => setQuantity(Quantity+1)}><GiHealthIncrease/></span><span className="count">{Quantity}</span><span className="dec" onClick={decQuantity}><FaMinusSquare/></span>
                </div>
                <div className="mt-sm-3  button-tag">
                    <button className="btn-block px-4 button-k" onClick={() => dispatch({type: "ADD_TO_CARD", payload: {product, Quantity}})}>add to card</button>
                </div>
                <div className="desc mt-3">
                    <div className="font-weight-bolder">
                        {product.name}
                    </div>

                </div>
                <div className="desc mt-3">
                    <div>
                        {product.desc}
                    </div>

                </div>
                </div>
            </div>
            
            </div>  
    )
}

export default Details
