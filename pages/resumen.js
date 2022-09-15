import React from 'react';
//context
import useRestaurant from '../hooks/useRestaurant';
//components
import Header from '../components/Header';
import NumProductos from '../components/NumProductos';
import FormNombre from '../components/FormNombre';
import Custom404 from './404';
import toast, { Toaster } from 'react-hot-toast';

const Resumen = () => {

    const {numPedidos, autorizado, total} = useRestaurant();
    let error = <Custom404 />
    return (
        <div>
            {autorizado ? (
                <>
                    <Header pag={'Resumen'} />
                    <Toaster 
                        position="top-right"
                        reverseOrder={false}
                    />
                    <div>
                        <h1 className=' text-center text-2xl mt-10'>Resumen</h1>
                        
                        {numPedidos.length>0 ? (
                            <>
                                <FormNombre 
                                    numPedidos={numPedidos}
                                />
                                <p className=' text-center text-2xl'>Total: <span className=' font-bold'>${total}</span></p>
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
                </>
            ): <>{error}</>}
            
        </div>
      );
}
 
export default Resumen;