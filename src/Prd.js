import React from "react";
import { useGlobalContext } from './Context';
import "./product.css"
const Prd=({pr})=>{
    const {ekle}=useGlobalContext()
    return(
        <div className="prd">
            <img src={pr.image}/>
            <h1>{pr.name}</h1>
            <p>Yazar:{pr.author}</p>
            <p>Fiyat:{pr.price}</p>
            <button onClick={()=>ekle(pr)}>Sepete Ekle</button>
        </div>
    )
}

export default Prd