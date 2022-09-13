import React from 'react'
import useRestaurant from '../hooks/useRestaurant';

const Orden = ({orden}) => {

    const {nombre, fecha, total, id} = orden;
    const {eliminarOrden} = useRestaurant();
    
    return (  
        <>
             <tr>
                <td data-label="Gasto" className=' font-bold'>$ {total}</td>
                <td data-label="Fecha">{fecha}</td>
                <td data-label="Nombre">{nombre}</td>
                {/* <td data-label="Acciones" className='btns'>
                    <button 
                        className='btn red'
                        onClick={() => eliminarOrden(id)}
                    >Eliminar</button>

                </td> */}
            </tr>
        </>
    );
}
 
export default Orden;