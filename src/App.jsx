import React from "react";
import "./index.css";
import FiltroOpciones from "./components/molecules/FiltroOpciones";


const App = () => {
  const opcionesFiltro=["Todos", "Por fecha", "Por zona"]
  
  return (
    <div>
     <FiltroOpciones/>
    </div>
  );
};

export default App;
