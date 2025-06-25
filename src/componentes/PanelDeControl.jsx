import React, { useState } from 'react';
import {
  FiUserPlus, FiHelpCircle, FiCheckSquare, FiUpload, FiUsers, FiLogOut, FiMenu, FiX
} from 'react-icons/fi';

import ImagenLogo from '../img/logo.png'; // <-- ¡Asegúrate que esta sea la ruta correcta a tu logo!

/**
 * Este es el componente del Panel Lateral modificado.
*/
function PanelDeControl({ onNavigate, menuAbierto }) {
  // Clases de Tailwind para controlar la visibilidad y la animación:
  // - Por defecto (móvil): está posicionado de forma fija, ocupa toda la altura, y está fuera de la pantalla a la izquierda ('-translate-x-full').
  // - 'transition-transform ...': para una animación suave de deslizamiento.
  // - En pantallas medianas y más grandes ('md:'): se vuelve parte del flujo normal ('relative') y se posiciona correctamente ('translate-x-0').
  // - Lógica final: si menuAbierto es true, se aplica 'translate-x-0' para que se muestre en móviles.
  const clasesDelPanel = `
    w-64 bg-gray-50 flex flex-col p-4 z-20
    fixed
    transform transition-transform duration-300 ease-in-out
    md:relative md:translate-x-0
    ${menuAbierto ? 'translate-x-0' : '-translate-x-full'}
  `;

  return (
    <aside className={clasesDelPanel}>
      <div className="mb-10 px-4">
        <img src={ImagenLogo} alt="Wenglish Logo" />
      </div>

      <div className="px-4 mb-2">
        <span className="text-xs font-semibold text-gray-500 uppercase">Panel de Control</span>
      </div>
      <hr className="border-gray-200 mx-4 mb-4" />

      <nav className="flex-grow">
        <button onClick={() => onNavigate('usuarios')} className="w-full flex items-center text-gray-700 hover:bg-gray-200 rounded-md p-2 mb-2 text-left">
          <FiUserPlus className="mr-3 flex-shrink-0" size={20} />
          <span>Nuevo Usuario</span>
        </button>
        <button onClick={() => onNavigate('consultas')} className="w-full flex items-center text-gray-700 hover:bg-gray-200 rounded-md p-2 mb-2 text-left">
          <FiHelpCircle className="mr-3 flex-shrink-0" size={20} />
          <span>Consultas</span>
        </button>
        <button onClick={() => onNavigate('notas')} className="w-full flex items-center text-gray-700 hover:bg-gray-200 rounded-md p-2 mb-2 text-left">
          <FiCheckSquare className="mr-3 flex-shrink-0" size={20} />
          <span>Gestión de Notas</span>
        </button>
        <button onClick={() => onNavigate('material')} className="w-full flex items-center text-gray-700 hover:bg-gray-200 rounded-md p-2 mb-2 text-left">
          <FiUpload className="mr-3 flex-shrink-0" size={20} />
          <span>Cargar Material</span>
        </button>
      </nav>

      <div className="px-4 mt-8 mb-2">
        <span className="text-xs font-semibold text-gray-500 uppercase">Configuración</span>
      </div>
      <hr className="border-gray-200 mx-4 mb-4" />

      <nav>
        <button onClick={() => onNavigate('gestion')} className="w-full flex items-center text-gray-700 hover:bg-gray-200 rounded-md p-2 mb-2 text-left">
          <FiUsers className="mr-3 flex-shrink-0" size={20} />
          <span>Gestión de Usuarios</span>
        </button>
      </nav>

      <div className="mt-auto">
        <button className="w-full flex items-center bg-red-500 text-white font-semibold hover:bg-red-600 rounded-md p-2 text-left">
          <FiLogOut className="mr-3 flex-shrink-0" size={20} />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}


/**
 * Este es el componente principal que organiza tu página.
 * Contiene la lógica para mostrar/ocultar el panel en móviles.
 */
export default function DashboardLayout({ children, onNavigate }) {
  // 1. El estado para saber si el menú móvil está abierto o cerrado.
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="relative min-h-screen md:flex">
      {/* Panel Lateral: Le pasamos el estado para que sepa si mostrarse o no */}
      <PanelDeControl onNavigate={onNavigate} menuAbierto={menuAbierto} />

      {/* Contenido principal y botón de menú */}
      <div className="flex-1">
        {/* Encabezado que solo aparece en móviles para mostrar el botón */}
        <header className="md:hidden flex justify-end bg-white shadow-md">
          
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="p-4 text-gray-600 focus:outline-none"
            aria-label="Abrir menú"
          >
            {/* Cambia el ícono dependiendo de si el menú está abierto o cerrado */}
            {menuAbierto ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </header>

        {/* Overlay que oscurece el fondo cuando el menú está abierto en móviles */}
        {menuAbierto && (
          <div
            onClick={() => setMenuAbierto(false)}
            className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          ></div>
        )}
        
        {/* Aquí es donde se renderizará el contenido de tu página (ej. la sección de 'Nuevo Usuario', 'Consultas', etc.) */}
        <main className="p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}