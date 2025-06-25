import React from 'react';

function HistorialNotas() {
  return (
    <div className="p-10">
      <h3 className="bg-blue-800 text-white p-3 rounded-t-lg flex justify-between items-center mb-4">Evaluaciones y Calificaciones</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 whitespace-nowrap">Fecha</th>
              <th className="px-4 py-2 whitespace-nowrap">Evaluación</th>
              <th className="px-4 py-2 whitespace-nowrap">Tipo de Eval.</th>
              <th className="px-4 py-2 whitespace-nowrap">Observ.</th>
              <th className="px-4 py-2 whitespace-nowrap">Nota</th>
              <th className="px-4 py-2 whitespace-nowrap">Valor</th>
              <th className="px-4 py-2 whitespace-nowrap">Edit.</th>
              <th className="px-4 py-2 whitespace-nowrap">Elim.</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border px-4 py-2">--/--/----</td>
              <td className="border px-4 py-2">Ejemplo</td>
              <td className="border px-4 py-2">Parcial</td>
              <td className="border px-4 py-2">Observación breve</td>
              <td className="border px-4 py-2">15</td>
              <td className="border px-4 py-2">20</td>
              <td className="border px-4 py-2"><button>🖉</button></td>
              <td className="border px-4 py-2"><button>🗑️</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HistorialNotas;