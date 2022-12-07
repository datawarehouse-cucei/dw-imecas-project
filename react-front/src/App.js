// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function Component() {
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/dw") // ⬅️ 1) llamada a la API, el resultado es una Promise
      .then((response) => response.json()) // ⬅️ 2) cuando la petición finalice, transformamos la respuesta a JSON (response.json() también es una Promise)
      .then((obj) => {
        console.log(obj);
        setMsg(obj.message);
      });
  }, []);

  if(msg === null)
  {
    return(
      <div>
        <h1>Component</h1>
        <p>Mensaje no cargado</p>      
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
