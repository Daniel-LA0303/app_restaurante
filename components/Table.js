import React from 'react';
import useRestaurant from '../hooks/useRestaurant';
import Orden from './Orden';

const Table = () => {
    const {ordenes, totalOrdenes} = useRestaurant();
    return (  
        <div className='table-container'>
            <p className=' text-center text-2xl my-4'>Ventas totales del dia: <span className=' font-bold'>${totalOrdenes.toFixed(2)}</span></p>
            <table className='table'>
                <caption>Ordenes</caption>
                <thead> 
                    <tr>
                        <th>Gasto</th>
                        <th>Fecha</th>
                        <th>Nombre</th>
                        {/* <th>Acciones</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        ordenes.map(orden => (
                            <Orden
                                key={orden.id}
                                orden = {orden}
                            />
                        ))

                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default Table;