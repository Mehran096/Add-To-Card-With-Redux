import React from 'react'
import {  Link } from "react-router-dom";
//import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
 
import {FcPrivacy } from "react-icons/fc";
import { useSelector } from 'react-redux';
const Nav = () => {
    const {totalQuantities} = useSelector(state => state.cartReducer)
    return (
        <div className="container  align-items-center container-n">
        
            <div className="row mt-2">
                <Link className="col-6 text-decoration-none " to="/"><span className="ff-left" >Mehran</span> </Link>
                 
                <Link className="col-6 text-right text-decoration-none " to="/cart"><span className="ff-right"> <FcPrivacy/></span><span className="span-4">{totalQuantities}</span> </Link>
                
            </div>
             
        </div>
    )
}

export default Nav
