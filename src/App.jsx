import React, { useState } from 'react';
import PanelDeControl from './componentes/PanelDeControl';
import VistaUsuarios from './componentes/VistaUsuarios';
import GestionDeNotas from './componentes/GestionDeNotas';
import VistaMaterial from './componentes/VIstaMaterial';

function App() {
  const [vista, setVista] = useState('usuarios');

  return (
    <div className="app-layout">
      <PanelDeControl onNavigate={setVista} />
      <main className="contenido-principal">
        {vista === 'usuarios' && <VistaUsuarios />}
        {vista === 'notas' && <GestionDeNotas />}
        {vista === 'material' && <VistaMaterial />}
        {/* Agrega otras vistas si las necesitas */}
      </main>
    </div>
  );
}

export default App;
