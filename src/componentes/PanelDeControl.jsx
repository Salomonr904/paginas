import React from 'react';
import ImagenEjemplo from '../img/33b051ec3f47009a721ec8b98f34ca1a4d29244e.png';

function PanelDeControl({ onNavigate }) {
  return (
    <aside className="panel-control">
      <div><img src={ImagenEjemplo} alt="logo" /></div>
      <h3>Panel De Control</h3>
      <button onClick={() => onNavigate('usuarios')}> Nuevo Usuario</button>
      <button onClick={() => onNavigate('consultas')}>Consultas</button>
      <button onClick={() => onNavigate('notas')}>Gestión de Notas</button>
      <button onClick={() => onNavigate('material')}>Cargar Material</button>
      <h3>Configuracion</h3>

      <button onClick={() => onNavigate('gestion')}> Gestión de Usuarios </button>
      
      <button style={{ marginTop: 'auto' }}>Cerrar Sesión</button>
    </aside>
  );
}

export default PanelDeControl;
