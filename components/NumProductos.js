import React from 'react';
import Image from 'next/image';
//constext
import useRestaurant from '../hooks/useRestaurant';


const NumProductos = ({producto}) => {
    const{handleEliminarProPedido} = useRestaurant();
    const {cantidad, precio, nombre, imagen} = producto;
    return (  
        <div className='flex flex-col justify-center w-72 sm:w-52 h-auto  m-3 color-marron shadow-2xl p-3 rounded text-white'>
            <div className='flex justify-center'>
                <Image 
                    src={`/static/img/${imagen}.jpg`}
                    width={120}
                    height={150}
                    className=' rounded'
                />
            </div>
            <p className=' text-center py-1'>{nombre}</p>
            <p className=' text-center text-2xl font-semibold'>$ {precio}</p>
            <p className=' text-center text-2xl'>Cantidad: <span className=' font-bold'>{cantidad}</span></p>
            <button
                className=" bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-4 py-2 rounded my-2 w-full"
                onClick={() => handleEliminarProPedido(producto.id)}
            >Eliminar</button>
        </div>

    );
}
 
export default NumProductos;