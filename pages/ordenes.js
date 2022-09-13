import React from 'react';
//context
import useRestaurant from '../hooks/useRestaurant';
//components
import Header from '../components/Header';

const Ordenes = () => {

  const {ordenes} = useRestaurant();
  return (
    <div>
      <Header pag={'Ordenes'}/>
      {ordenes.map(orden => (
        <div
          key={orden.id}
        >
          {orden.nombre}
          {orden.fecha}
          <button
            className=' bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-4 py-2 rounded my-2 w-full'
          >Eliminar</button>
        </div>
      ))}
    </div>
  );
}
 
export default Ordenes;