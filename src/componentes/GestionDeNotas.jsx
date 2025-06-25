import React, { useState } from 'react';
import DatosEstudiante from './DatosEstudiante';
import FormularioNota from './FormularioNota';
import HistorialNotas from './HistorialNotas';

function GestionDeNotas() {
  const [estudiante, setEstudiante] = useState(null);
  const [vista, setVista] = useState('nota'); // 'nota' o 'historial'

  return (
    <div className=''>
      <h2>Gestión de Notas</h2>

      {/* 🔍 Buscador */}
      <div className="relative">
        <input type="text" placeholder="Cédula del estudiante" />
        <button>Buscar</button>

        {/* 🧭 Botones de vista */}
        <button onClick={() => setVista('nota')}
        className='bg-blue-400 text-white font-stretch px-6 py-2 rounded-md shadow-md hover:bg-blue-500 transition'
        >Nota</button>
        <button onClick={() => setVista('historial')}>Historial</button>
      </div>

      {/* 👤 Datos del estudiante */}
      <DatosEstudiante estudiante={estudiante} />

      {/* 📑 Contenido dinámico */}
      {vista === 'nota' && <FormularioNota />}
      {vista === 'historial' && <HistorialNotas />}
    </div>
  );
}

export default GestionDeNotas;

