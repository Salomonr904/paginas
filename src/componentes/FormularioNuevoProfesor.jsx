import React, { useState } from 'react';

function FormularioNuevoProfesor() {
  const [form, setForm] = useState({
    nombre: '',
    especialidad: '',
    telefono: '',
    correo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setForm({ nombre: '', especialidad: '', telefono: '', correo: '' });
  };

  const handleSave = () => {
    // Aquí puedes integrar tu API o validaciones
    console.log('Profesor guardado:', form);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded">
      {/* Header con título y botones */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Registro de Profesor</h2>
        <div className="flex space-x-2">
          <button
            onClick={handleCancel}
            className="flex items-center px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            ✖ Cancelar
          </button>
          <button
            onClick={handleSave}
            className="flex items-center px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            ✔ Guardar
          </button>
        </div>
      </div>

      {/* Formulario */}
      <form className="mt-6 space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-4">Datos del Profesor</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Nombre Completo</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Ej: Ana Martínez"
                className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Especialidad</label>
              <input
                type="text"
                name="especialidad"
                value={form.especialidad}
                onChange={handleChange}
                placeholder="Ej: Inglés Avanzado"
                className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Teléfono</label>
              <input
                type="text"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="0412-1234567"
                className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Correo Electrónico</label>
              <input
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                placeholder="ana@mail.com"
                className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default FormularioNuevoProfesor;