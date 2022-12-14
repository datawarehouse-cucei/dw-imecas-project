// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";


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
function TopBar() {
  const stls = {
    'background-color': 'gray',
    'height': '50px'
  };
  return ( 
    <div style={stls}>

    </div>
  );
}

// export default TopBar;

function ExternalLinksPanel() {
  const stls = {
    'background-color': 'gray'
    
  };
  const stlsL = {
    color: 'white',
    padding: '3em'
  };
  const stlsUL = {
    'list-style': 'none'
  };

  return ( 
    <div style={stls}>
      <ul style={stlsUL}>
        <li><a style={stlsL} href="https://www.inegi.org.mx/sistemas/olap/proyectos/bd/continuas/transporte/accidentes.asp">Accidentes de Tráfico</a></li>
        <li><a style={stlsL} href="http://www.aire.cdmx.gob.mx/default.php?opc='aKBh'">Calidad del Aire</a></li>
        <li><a style={stlsL} href="https://www.ibm.com/docs/es/db2/11.1?topic=miner-data-mining-process"></a></li>
      </ul>
    </div>
  );
}

// export default ExternalLinksPanel;

function Control(props) {
  const [result, setResult] = useState("No llevado a cabo aún");
  const [isExecuted, setIsExecuted] = useState(false);

  const stls = {
    display: 'block'
  };

  useEffect(() => {
    if(isExecuted){
      fetch("http://localhost:8000/"+ props.task)
      .then((response) => response.json()) 
      .then((obj) => {
        setResult(obj.message);
      });
    }
    
  }, [isExecuted]);
  
  return ( 
    <div style={stls}>
      <button onClick={()=>{setIsExecuted(true)}}>{props.label}</button>
      <p>{result}</p>
    </div>
   );
}

// export default Control;

function AutosContainer() {
  return ( 
      <div>
        <h1>Autos</h1>
        <button>Autos</button>
        <Chart
          chartType="Bar"
          data={[ ["33", "104", "13", "106", "54"], [4031, 2007, 1469, 1107, 1035]]}
          width="90%"
          height="400px"
          legendToggle
        />
      </div>
  );
}

// export default AutosContainer;

function ZonasContainer() {
  return ( 
    <div>
      <h1>Zonas</h1>
      <button>Zonas</button>
    </div>    
  );
}

// export default ZonasContainer;

function CalidadDelAireContainer() {
  return ( 
      <div>
        <h1>Calidad del Aire</h1>
        <button>Calidad del Aire</button>
      </div>
  );
}

function ActionsPanel() {
  const stls = {
    // 'border-color': 'black',
    width: '60%',
    margin: 'auto',
    // 'border-style': 'solid',
    display: 'block'
    
  };

  return ( 
    <div style={stls}>
      <h1>Acciones</h1>
      <Control label='Limpiar MySQL DB' task='mysql-db-cleaning'/>
      <Control label='Limpiar Postgres DB' task='postgresql-db-cleaning'/>
      <Control label='Procesar Datos' task='process' />
    </div>
   );
}

// export default ActionsPanel;



function ResultsContainer() {

  
  const stls = {
    width: '60%',
    margin: 'auto',
    // 'border-style': 'solid',
    display: 'block'
    
  };
  return ( 
    <div style={stls}>
      <h1>Resultados</h1>
      <Chart
        chartType="BarChart"
        // data={[["Accidentes", "Contaminación"], [acc, ctmn], [acc, ctmn]]}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>  
  );
}

// export default ResultsContainer;
// export default CalidadDelAireContainer;

function App() {
  return (
    <div className="App">
      <TopBar />
      <h1>Proyecto de Data WareHouse</h1>
      <h1>Cantidad de Imecas en el aire</h1>
      {/* <Component /> */}
      
      <AutosContainer />
      <ZonasContainer />
      <CalidadDelAireContainer />
      <ActionsPanel />
      <ResultsContainer />
      <ExternalLinksPanel />

      
    </div>
  );
}

export default App;
