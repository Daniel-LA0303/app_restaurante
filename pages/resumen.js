import React from 'react';
//context
import useRestaurant from '../hooks/useRestaurant';
//components
import Header from '../components/Header';
import NumProductos from '../components/NumProductos';
import FormNombre from '../components/FormNombre';

const Resumen = () => {

    const {numPedidos} = useRestaurant();

    return (
        <div>
            <Header pag={'Resumen'} />
            <div>
                <h1 className=' text-center text-2xl mt-10'>Resumen</h1>
                {numPedidos.length>0 ? (
                    <>
                         <FormNombre 
                            numPedidos={numPedidos}
                        />
                        <div className=' flex justify-around flex-wrap'>
                            {numPedidos.map(producto => (
                                <NumProductos 
                                    producto={producto}
                                    key={producto.id}
                                />
                            ))}                    
                        </div>
                    </>
                ): (
                    <p className='mt-8 text-center text-xl font-bold text-red-600'>Aun no hay pedidos en esta orden</p>
                )}
               
            </div>
        </div>
      );
}
 
export default Resumen;