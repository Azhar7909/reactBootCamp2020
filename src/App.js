import React, { useState,useEffect } from 'react';
import './App.css';
import Lasani from './Lasani';


function App() {
const [isfriday, setIsfriday] = useState(true)
const [isday, setIsday] = useState(true)

useEffect(() => {
  let d =new Date();
  const day = d.getDay();
  if (day === 5) {
    setIsfriday(false);
  }else{
    setIsfriday(true)
  }
  
},[]);
  return (
    <div className={`App ${isday? 'dayLight' : '' }`}>
    <div>
    {
      isfriday? <Lasani />  : <span>Today is Friday Restorant is closed!</span>
    }
    </div><br/>
    <button style={{backgroundColor:'darkgreen',color:'white',cursor:'pointer'}} onClick={()=>setIsday(!isday)}>Color changer</button>
    </div>
  );
}

export default App;
