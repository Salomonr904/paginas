import React, { useState } from 'react';

function CargaMaterial() {
  const [showForm, setShowForm] = useState(false);
  const [materialForm, setMaterialForm] = useState({
    nombre: "",
    listening: "",
    tipo: "",
    archivo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setMaterialForm({
      ...materialForm,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para subir el archivo o guardar los datos
    console.log(materialForm);
    // Reiniciar el formulario y ocultarlo
    setMaterialForm({
      nombre: "",
      listening: "",
      tipo: "",
      archivo: null,
    });
    setShowForm(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Encabezado con botón + verde para alternar el formulario */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Cargar Material</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition"
          title="Agregar nuevo material"
        >
          +
        </button>
      </div>

      {/* Formulario de carga, visible al presionar el botón + */}
      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 border rounded p-4 bg-white shadow">
          {/* Nombre del material */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Nombre del Material</label>
            <input
              type="text"
              name="nombre"
              placeholder="Ej: Listening para nivel 2"
              value={materialForm.nombre}
              onChange={handleChange}
              className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Seleccionar Listening (1 al 5) */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Seleccionar Listening</label>
            <select
              name="listening"
              value={materialForm.listening}
              onChange={handleChange}
              className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">-- Seleccione --</option>
              <option value="listening1">Listening 1</option>
              <option value="listening2">Listening 2</option>
              <option value="listening3">Listening 3</option>
              <option value="listening4">Listening 4</option>
              <option value="listening5">Listening 5</option>
            </select>
          </div>

          {/* Tipo de archivo */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Tipo de Archivo</label>
            <select
              name="tipo"
              value={materialForm.tipo}
              onChange={handleChange}
              className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">-- Seleccione --</option>
              <option value="audio">Audio</option>
              <option value="video">Video</option>
              <option value="pdf">PDF</option>
            </select>
          </div>

          {/* Subir archivo */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Archivo</label>
            <input
              type="file"
              name="archivo"
              onChange={handleChange}
              className="border rounded px-3 py-2"
            />
          </div>

          {/* Botón de envio */}
          <button
            type="submit"
            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
          >
            Subir
          </button>
        </form>
      )}

      {/* Sección de material cargado (ejemplo) */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Material Cargado</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Listening</th>
                <th className="px-4 py-2">Audio</th>
                <th className="px-4 py-2">Video</th>
                <th className="px-4 py-2">PDF</th>
                <th className="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Ejemplo de fila */}
              <tr className="text-center border-t">
                <td className="px-4 py-2">Listening 1</td>
                <td className="px-4 py-2">Cargado</td>
                <td className="px-4 py-2">Cargado</td>
                <td className="px-4 py-2">Cargado</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="text-blue-600 hover:underline">Editar</button>
                  <button className="text-red-600 hover:underline">Eliminar</button>
                </td>
              </tr>
              {/* Puedes agregar más filas dinámicamente */}
              <tr className="text-center border-t">
                <td className="px-4 py-2">Listening 2</td>
                <td className="px-4 py-2">Cargado</td>
                <td className="px-4 py-2">Cargado</td>
                <td className="px-4 py-2">Cargado</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="text-blue-600 hover:underline">Editar</button>
                  <button className="text-red-600 hover:underline">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CargaMaterial;