import React from "react";
import Bst from "./Bst";
import { useGlobalContext } from './Context';
import "./basket.css"

const Basket=()=>{
  
    const {state}=useGlobalContext()
    return(
        <div >
         <h1>Kitap Listesi</h1>
        <h2>Sepetteki ürün miktarı:{state.totalAmount}</h2> 
        <h2>Toplam sepet tutarı:{state.totalPrice}</h2>
        <div className="basket">
         {
            state.basket.map((bss)=>{
                return(
                    <Bst bss={bss}/>
                )
            })
         }
         </div>
        </div>
    )
}
export default Basket