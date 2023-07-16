import React from "react";
import { useGlobalContext } from './Context';
import "./basket.css"
const Bst=({bss})=>{
    const {artma,azalt,atma}=useGlobalContext()
    return(
       <div className="bst">
        <img src={bss.image}/>
        <h1>{bss.name}</h1>
        <p>Fiyat:{bss.price}</p>
        <p>Toplam:{bss.amount*bss.price}</p>
        <p>Sepetinizde bu kitaptan toplam {bss.amount}adet var</p>
        <button onClick={()=>azalt(bss)} className="one">-</button>
        <button onClick={()=>atma(bss)} className="two">Sepetten Çıkar</button>
        <button onClick={()=>artma(bss)} className="one">+</button>

       </div>
    )
}


export default Bst