import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AsignacionZonas = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColaboradores, setSelectedColaboradores] = useState([]);

  // Datos de ejemplo
  const colaboradores = [
    { id: 1, nombre: "Gisela rivera", cel: "3133490202", rol: "Colaborador", selected: false },
    { id: 2, nombre: "María Camila Uribe", cel: "3133490202", rol: "Colaborador", selected: false },
    { id: 3, nombre: "Jhoam sebastian", cel: "3133490202", rol: "Colaborador", selected: false },
    { id: 4, nombre: "Estefania Nieto Gonzalez", cel: "3133490202", rol: "Colaborador", selected: false },
    { id: 5, nombre: "María Camila", cel: "3133490202", rol: "Colaborador", selected: false },
    { id: 6, nombre: "Estefania Nieto Gonzalez", cel: "3133490202", rol: "Colaborador", selected: false },
  ];

  const [colaboradoresList, setColaboradoresList] = useState(colaboradores);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === "") {
      setColaboradoresList(colaboradores);
    } else {
      const filteredColaboradores = colaboradores.filter(colaborador => 
        colaborador.nombre.toLowerCase().includes(value.toLowerCase())
      );
      setColaboradoresList(filteredColaboradores);
    }
  };

  const handleSelectColaborador = (id) => {
    const updatedList = colaboradoresList.map(colaborador => {
      if (colaborador.id === id) {
        return { ...colaborador, selected: !colaborador.selected };
      }
      return colaborador;
    });
    
    setColaboradoresList(updatedList);
    
    const selected = updatedList.filter(colaborador => colaborador.selected).map(c => c.id);
    setSelectedColaboradores(selected);
  };

  const handleAsignar = () => {
    if (selectedColaboradores.length > 0) {
      console.log("Colaboradores asignados:", selectedColaboradores);
      alert("Colaboradores asignados con éxito a Zona Norte Armenia");
    } else {
      alert("Por favor seleccione al menos un colaborador");
    }
  };

  // Función para agrupar colaboradores en filas de 3
  const chunkedColaboradores = () => {
    const result = [];
    for (let i = 0; i < colaboradoresList.length; i += 3) {
      result.push(colaboradoresList.slice(i, i + 3));
    }
    return result;
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="bg-purple-600 text-white p-4 flex items-center justify-between">
        <button 
          onClick={() => navigate("/gestion-zonas")} 
          className="text-white flex items-center justify-center rounded-full bg-white bg-opacity-30 h-10 w-10"
        >
          <span className="text-2xl">&#8592;</span>
        </button>
        <span className="text-xl font-medium">Zona Norte Armenia</span>
        <div className="w-10"></div> {/* Espacio para equilibrar el header */}
      </div>
      
      {/* Search bar */}
      <div className="px-6 pt-4 pb-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar colaborador"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 pl-4 pr-10 border rounded-full text-sm"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Asignar button */}
      <div className="px-6 py-2">
        <button 
          onClick={handleAsignar}
          className="bg-purple-500 text-white py-1.5 px-6 rounded-full text-sm"
        >
          Asignar
        </button>
      </div>
      
      {/* Colaboradores list */}
      <div className="p-4 flex-grow overflow-auto">
        {chunkedColaboradores().map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row gap-4 mb-4">
            {row.map((colaborador) => (
              <div 
                key={colaborador.id} 
                className="flex-1 border rounded-lg p-4 flex flex-row items-start"
              >
                <div className="mr-2 mt-1">
                  <input
                    type="checkbox"
                    checked={colaborador.selected}
                    onChange={() => handleSelectColaborador(colaborador.id)}
                    className="w-4 h-4 rounded-sm border-purple-500 text-purple-600 focus:ring-purple-500"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-1">
                    <span className="font-medium text-sm">Nombre:</span> {colaborador.nombre}
                  </div>
                  <div className="mb-1">
                    <span className="font-medium text-sm">Cel:</span> {colaborador.cel}
                  </div>
                  <div>
                    <span className="font-medium text-sm">Rol:</span> {colaborador.rol}
                  </div>
                </div>
                <div className="h-full flex items-center">
                  <div className="w-6 h-6 bg-purple-800 rounded-md"></div>
                </div>
              </div>
            ))}
            {/* Añadir divs vacíos para mantener la alineación en filas incompletas */}
            {row.length < 3 && Array(3 - row.length).fill().map((_, i) => (
              <div key={`empty-${i}`} className="flex-1"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsignacionZonas;