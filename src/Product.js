import React from "react";
import { useGlobalContext } from './Context';
import Prd from "./Prd";
import "./product.css"
const Product=()=>{
    const {state}=useGlobalContext()
    return(
        <div className="product">
            
            {
                state.product.map((pr)=>{
                    return(
                     <Prd pr={pr}/>
                    )
                })
            }
        </div>
    )
}

export default Product