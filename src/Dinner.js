import React from 'react'

export default function Dinner(props) {
   
    return (
        <div>
            <h3>Customer serves: <span style={{color:'red', marginRight:'25px'}}>{props.counter1}</span> Rs.<span style={{color:'blue'}} > {props.price1} </span></h3>
            <h4>1) Today servings <span style={{color:"darkgreen"}}> {props.dish1} </span> and <span style={{color:"darkred"}}> {props.sweet1} </span></h4><hr/>
            
            <h3>Customer serves: <span style={{color:'red', marginRight:'25px'}}>{props.counter2}</span> Rs.<span style={{color:'blue'}}> {props.price2} </span></h3>
            <h4>2) Today servings <span style={{color:"darkgreen"}}> {props.dish2} </span> and <span style={{color:"darkred"}}> {props.sweet2} </span></h4><hr/>
            
            <h3>Customer serves: <span style={{color:'red', marginRight:'25px'}}>{props.counter3}</span> Rs.<span style={{color:'blue'}}> {props.price3} </span></h3>
            <h4>3) Today servings <span style={{color:"darkgreen"}}> {props.dish4} </span> and <span style={{color:"darkred"}}> {props.sweet3} </span></h4><hr/>
            <h3>Total sale in Serve <span style={{color:'red', marginRight:'25px'}}> {props.totalServing}</span> Total sale in Rs.<span style={{color:'blue'}}>{props.totalPrice}</span></h3><hr/>
        </div>
    )
}
