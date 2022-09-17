import React from 'react';
import useRestaurant from '../hooks/useRestaurant';
import Orden from './Orden';
import Image from 'next/image';

const Table = () => {
    const {ordenes, totalOrdenes, handleOnExport} = useRestaurant();
    return (  
        <>
            <div
                className='flex justify-around flex-wrap'
            >
                <p className=' text-center text-2xl'>Ventas totales del dia: <span className=' font-bold'>${totalOrdenes.toFixed(2)}</span></p>
                <button
                className='flex justify-between text-center text-xl font-bold text-white btn-export py-2 px-4 rounded'
                onClick={() => handleOnExport()}
                >
                <p className=' mr-3'>Ecxel</p>
                <Image 
                    src={`/static/img/1.png`}
                    width={30}
                    height={30}

                />
                </button>
            </div>
            <div className='table-container'>
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
        </>
        
    );
}
 
export default Table;