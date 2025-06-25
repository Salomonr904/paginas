import React, { useState } from 'react';
import FormularioNuevoEstudiante from './FormularioNuevoEstudiante';
import FormularioNuevoProfesor from './FormularioNuevoProfesor';

function VistaUsuarios() {
  const [activo, setActivo] = useState(null);

  return (
    <div>
      <h2>Registrar Usuario</h2>
      <div className="botones-registro">
        <button onClick={() => setActivo('estudiante')}>Estudiante</button>
        <button onClick={() => setActivo('profesor')}>Profesor</button>
      </div>
      {activo === 'estudiante' && <FormularioNuevoEstudiante />}
      {activo === 'profesor' && <FormularioNuevoProfesor />}
    </div>
  );
}

export default VistaUsuarios;
