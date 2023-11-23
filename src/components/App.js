import React, { Component, useState } from "react";
import '../styles/App.css';

function App() {

    const [data, setData]= useState(false);
    const [style, setStyle]= useState(0);
    
    document.addEventListener('keyup', (e)=>{
      if(e.key=='ArrowRight'){
        setStyle(style+5);
      }
    })
    
      return (
        <div className="App"> 
          <div className="playground">
        {!data ?<button className="start" onClick={()=>
         {   setData(true)
          }
          }>click</button> :""}
            {data? <div className="ball" style={{marginLeft:style+"px"}}></div> :""}
          </div>
        </div>
      );
    }
    

export default App;
