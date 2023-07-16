import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Basket from './Basket';
import { useGlobalContext } from './Context';
import { useEffect } from 'react';
function App() {

  const {tpa,state}=useGlobalContext()
  useEffect(()=>{
    tpa()
  },[state.basket])
  return (
    <div className="App">

      <h1>ÜRÜNLER</h1>
      <Product/>
      <Basket/>
    </div>
  );
}

export default App;
