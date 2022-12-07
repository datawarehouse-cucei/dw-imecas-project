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

  if(msg === null)
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

function Control(props) {
  const [result, setResult] = useState("No llevado a cabo aún");
  const [isExecuted, setIsExecuted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/"+ props.task)
    .then((response) => response.json()) 
    .then((obj) => {
      setResult(obj.message);
    });
  }, [isExecuted]);
  
  return ( 
    <div>
      <button onClick={()=>{setIsExecuted(true)}}>{props.label}</button>
      <p>{result}</p>
    </div>
   );
}

// export default Control;

function MainPanel() {
  return ( 
    <div>
      <Control label='Limpiar MySQL DB' task='mysql-db-cleaning'/>
      <Control label='Limpiar Postgres DB' task='posgresql-db-cleaning'/>
    </div>
   );
}

// export default MainPanel;

function App() {
  return (
    <div className="App">
      <Component />
      <MainPanel></MainPanel>
    </div>
  );
}

export default App;
