// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function Component() {
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/dw") 
      .then((response) => response.json()) 
      .then((obj) => {
        console.log(obj);
        setMsg(obj.message);
      });
      setIsLoading(false);
  }, []);

  if(isLoading)
  {
    return(
      <div>
        <h1>Component</h1>
        <p>Cargando mensaje...</p>      
      </div>  
    );
  }else{
    return (
      <div>
        <h1>Component</h1>      
        <p>{msg}</p>
      </div>
    );
  }  
}

function App() {
  return (
    <div className="App">
      <Component />
    </div>
  );
}

export default App;
