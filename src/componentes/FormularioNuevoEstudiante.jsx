import React, { useState } from 'react';

function FormularioNuevoEstudiante() {
  const initialForm = {
    nombreEst: '',
    cedulaEst: '',
    telefonoEst: '',
    fnEst: '',
    nombreRep: '',
    cedulaRep: '',
    telefonoRep: '',
    parentescoRep: ''
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setForm(initialForm);
  };

  const handleSave = () => {
    // Aquí pones tu lógica de envío (API, validaciones…)
    console.log('Guardando datos:', form);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded">
      {/* Header con título y botones a la derecha */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Registro de Estudiante</h2>
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

      <form className="mt-6 space-y-8">
        {/* Datos del Estudiante */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Datos del Estudiante</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Nombre Completo</label>
              <input
                name="nombreEst"
                value={form.nombreEst}
                onChange={handleChange}
                placeholder="Juan Pérez"
                className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Cédula</label>
              <input
                name="cedulaEst"
                value={form.cedulaEst}
                onChange={handleChange}
                placeholder="V-12.345.678"
                className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Teléfono</label>
              <input
                name="telefonoEst"
                value={form.telefonoEst}
                onChange={handleChange}
                placeholder="0412-1234567"
                className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">F. Nacimiento</label>
              <input
                name="fnEst"
                type="date"
                value={form.fnEst}
                onChange={handleChange}
                className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
        </section>

        {/* Datos del Representante */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Datos del Representante</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Nombre Completo</label>
              <input
                name="nombreRep"
                value={form.nombreRep}
                onChange={handleChange}
                placeholder="María Gómez"
                className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Cédula</label>
              <input
                name="cedulaRep"
                value={form.cedulaRep}
                onChange={handleChange}
                placeholder="V-98.765.432"
                className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Teléfono</label>
              <input
                name="telefonoRep"
                value={form.telefonoRep}
                onChange={handleChange}
                placeholder="0414-7654321"
                className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Parentesco</label>
              <input
                name="parentescoRep"
                value={form.parentescoRep}
                onChange={handleChange}
                placeholder="Madre / Padre / Tutor"
                className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default FormularioNuevoEstudiante;