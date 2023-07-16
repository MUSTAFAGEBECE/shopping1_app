import { useContext, useReducer,  createContext } from 'react';
import data from "./data";


const AppContext = createContext();
const initialState={
    product:data,
    basket:[],
    totalPrice:0,
    totalAmount:0

}

const reducer=(state,action)=>{
    if(action.type==="EKLE"){
        const bas=state.basket.find((bf)=>bf.id===action.payload.id)?
        state.basket.map((bm)=>bm.id===action.payload.id?{...bm,amount:bm.amount+1}:bm):
        [...state.basket,{...action.payload,amount:1}]
        return{...state,basket:bas}
    }
    if(action.type==="ARTIR"){
        const bask=state.basket.map((arm)=>arm.id===action.payload.id?{...arm,amount:arm.amount+1}:arm)
        return{...state,basket:bask}
    }
    if(action.type==="AZALT"){
        const baske=state.basket.map((azm)=>azm.id===action.payload.id?{...azm,amount:azm.amount-1}:azm).filter((ff)=>ff.amount>0)
        return {...state,basket:baske}
    }
    if(action.type==="ATMA"){
        const bassk=state.basket.filter((abf)=>abf.id!==action.payload.id)
        return{...state,basket:bassk} 
    }
    if(action.type==="PRICE"){
        const price=state.basket.reduce((acc,current)=>(acc+current.amount*current.price),0)
        const amt=state.basket.reduce((acc,current)=>(acc+current.amount),0)
        return{...state,totalPrice:price,totalAmount:amt}
    }
}

export const AppProvider=({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const ekle=(el)=>{
        dispatch({type:"EKLE",payload:el})
    }
    const artma=(art)=>{
        dispatch({type:"ARTIR",payload:art})
    }
    const azalt=(azl)=>{
        dispatch({type:"AZALT",payload:azl})
    }
    const atma=(atm)=>{
        dispatch({type:"ATMA",payload:atm})
    }
    const tpa=(apt)=>{
        dispatch({type:"PRICE",payload:apt})
    }

    return(
        <AppContext.Provider value={{state:state,ekle,artma,azalt,atma,tpa}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext);
  };
