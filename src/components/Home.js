import React from 'react';
import { useSelector } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import {  Link } from "react-router-dom";

const Home = () => {
    const {products} = useSelector(state => state.ProductReducer)
    // console.log(state);
    return (
        <div className="container  align-items-center">
         <div className="row mt-5 text-center">
            {products.map(product => (
                <div className="col-sm-4 mt-2" key={product.id}>
                    <div className="image-f">
                    <Link to={`/details/${product.id}`}>
                        <img src={`/images/${product.image}`} alt="by default" />
                    </Link>
                    </div>
                    <div className="row mt-2"> 
                     
                    <div className="col-6"><span className="text-decoration-line-through"> {currencyFormatter.format(product.price, { code: 'USD' })}</span> <span className=" font-weight-lighter" style={{fontSize:"12px"}}> {product.discount}% off</span></div>
                     
                    <div className="col-6"> {currencyFormatter.format(product.discountPrice, { code: 'USD' })}</div>
                    </div>
                    <div className="row">
                        <div className="col-12">{product.name}</div>
                    </div>
                </div>
                ))}
                
            </div>
            
            </div>  
       
    )
}

export default Home
