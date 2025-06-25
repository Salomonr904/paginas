import React from 'react';

function FormularioNota() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-2xl mx-auto my-6"> {/* Main container with responsive max-width */}
      <div className="bg-blue-800 text-white p-3 rounded-t-lg flex justify-between items-center mb-4"> {/* Header with flexbox for title and icons */}
        <h3 className="text-lg font-semibold">CARGAR NOTAS</h3>
        <div className="flex space-x-2"> {/* Icons container */}
          <button className="text-white hover:text-red-400 focus:outline-none">
            {/* Close Icon (X) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button className="text-white hover:text-green-400 focus:outline-none">
            {/* Checkmark Icon (V) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"> {/* Responsive grid for top inputs */}
        <input 
          type="text" 
          placeholder="Evaluación" 
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <select 
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Tipo de evaluación</option>
          {/* Add more options here as needed */}
          <option value="examen">Examen</option>
          <option value="trabajo">Trabajo</option>
          <option value="participacion">Participación</option>
        </select>
        <input 
          type="date" 
          placeholder="Fecha" 
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"> {/* Responsive grid for middle inputs */}
        <input 
          type="text" 
          placeholder="Valor" 
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <input 
          type="text" 
          placeholder="Nota" 
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
      </div>

      <textarea 
        placeholder="Observación" 
        className="w-full p-2 border border-gray-300 rounded resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 mb-4" 
      ></textarea>

      {/* The image doesn't show a "Registrar Nota" button, so I'm omitting it to match the visual. 
          If you need it, you can uncomment and style it here. 
      <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Registrar Nota
      </button>
      */}
    </div>
  );
}

export default FormularioNota;