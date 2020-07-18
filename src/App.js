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
    {
      isfriday? <Lasani />  : <span>Today is Friday Restorant is closed!</span>
    }
      
    </div>
  );
}

export default App;
