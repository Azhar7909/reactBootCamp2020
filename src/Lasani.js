import React, { useState } from 'react';
import './App.css';
import Dinner from './Dinner';

function Lasani() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  const [price3, setPrice3] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalServing, setTotalServing] = useState(0);
  
  function service1() {
      const pr=110
      const price1 = (counter1+1) * pr;
      setCounter1(counter1+1)
      setPrice1(price1)
      setTotalPrice(price1+price2+price3)
      setTotalServing((counter1+1)+counter2+counter3)
      
  }
  function service2() {
      const pr=110
      const price2 = (counter2+1) * pr;
      setCounter2(counter2+1)
      setPrice2(price2)
      setTotalPrice(price1+price2+price3)
      setTotalServing(counter1+(counter2+1)+counter3)
  }
  function service3() {
      const pr=110
      const price3 = (counter3+1) * pr;
      setCounter3(counter3+1)
      setPrice3(price3)
      setTotalPrice(price1+price2+price3)
      setTotalServing(counter1+counter2+(counter3+1))
  }
  
  
  return (
    <div className="Lasani">
      <div className="container">
        <h2>
          Lasani restorent.<br/><span style={{color:'darkgreen'}}>one serving only <span style={{color:'darkred'}}>Rs.110</span></span>
        </h2><hr/>
        <Dinner 
          dish1="Checken karahi" 
          sweet1="Kheer" 
          dish2="Checken Baryani" 
          sweet2="rice" 
          dish3="Checken kofte" 
          sweet3="rasmaly" 
          counter1={counter1} 
          counter2={counter2} 
          counter3={counter3}
          price1={price1}
          price2={price2}
          price3={price3}
          totalPrice={totalPrice}
          totalServing={totalServing}
        />
        <button style={{marginRight:'10px', cursor:'pointer'}} onClick={()=>{ service1()}}>1) Serve Dinner </button>
        <button style={{marginRight:'10px', cursor:'pointer'}} onClick={()=>{ service2()}}>2) Serve Dinner </button>
        <button style={{marginRight:'10px', cursor:'pointer'}} onClick={()=>{ service3()}}>3) Serve Dinner </button>
        </div>
    </div>
  );
}

export default Lasani;
