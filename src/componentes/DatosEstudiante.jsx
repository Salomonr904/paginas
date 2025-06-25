import React from 'react';

function DatosEstudiante({ estudiante }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className='bg-blue-800 text-white p-3 orunded-t-lg mb-4'>
        <h3 className='text-lg font-semibold'>Datos del Estudiante</h3>
      </div>

        <div className='grid grid-cols-2 gap-y-2 gap-x-4 text-gray-800'>
          <p className='fort-medium'>Nombre:</p>
          <p className='fort-medium'>Cédula:</p>
          <p className='fort-medium'>Sexo:</p>
          <p className='fort-medium'>Curso:</p>
          <p className='fort-medium'>Categoría:</p>
          <p className='fort-medium'>Profesor:</p>
        </div>
    </div>
  );
}

export default DatosEstudiante;
