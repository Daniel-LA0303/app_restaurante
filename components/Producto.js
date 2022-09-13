import React, {useState} from 'react';
import Image from 'next/image';
import useRestaurant from '../hooks/useRestaurant';

const Producto = ({producto}) => {

    const {handleNuevoPedido, handleProducto} = useRestaurant();
    const[cantidad, setCantidad] = useState(0);

    const {imagen, nombre, precio} = producto;

    const click = () => {
        // if(cantidad === 0){
        //     alert('El producto no puede ir con la cantidad de 0');
        //     return;
        // }
        // alert('Producto agregado');
        // const totalProducto = cantidad * precio;
        handleNuevoPedido({...producto, cantidad});
        handleProducto({...producto, cantidad})
        setCantidad(0);
    }

    return (  
        <div className='flex flex-col justify-center w-60 sm:w-72 h-auto  m-3 color-marron shadow-2xl p-3 rounded text-white'>
            <div>
                <Image 
                    src={`/static/img/${imagen}.jpg`}
                    width={300}
                    height={350}
                    className=' rounded'
                />
            </div>
            <p className=' text-center py-1'>{nombre}</p>
            <p className=' text-center text-2xl font-semibold'>$ {precio}</p>
            <div className="custom-number-input w-32">
                <label className="w-full text-gray-700 text-sm font-semibold">Counter Input</label>
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                    <button 
                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        onClick={() => {
                              if (cantidad <= 1) return;
                              setCantidad(cantidad - 1);
                            }}
                    >
                        <span className="m-auto text-2xl font-thin">−</span>
                    </button>
                    <label className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center justify-center text-gray-700  outline-none">{cantidad}</label>
                    <button 
                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                        onClick={() => setCantidad(cantidad+1)}
                    >
                        <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>
            </div>
            <button
                className=' bg-amber-600 hover:bg-amber-700 transition-all duration-300  py-2 px-5 my-2 rounded text-white'
                onClick={() => click()}
            >Add</button>
                
            
        </div>
    );
}
 
export default Producto;