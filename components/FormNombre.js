import React, {useState} from 'react'
import { useRouter } from 'next/router';

import useRestaurant from '../hooks/useRestaurant';
import toast, { Toaster } from 'react-hot-toast';
const FormNombre = ({numPedidos}) => {

    const navigate = useRouter();

    const {handleNuevaOrden} = useRestaurant();
    const[nombre, setNombre] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if([nombre].includes('')){
            console.log('El nombre es obligatorio');
            return;
        }

        setNombre('');
        handleNuevaOrden({numPedidos, nombre});
        toast.success('Orden agregada',{
            duration: 2000,
        });
        setTimeout(() => {
            navigate.push('/menu')            
        }, 3000);
        
    }   

    return (  
        <div className="flex justify-center">
            <Toaster 
                position="top-right"
                reverseOrder={false}
            />
            <form 
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/3 sm:w-1/3"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Nombre
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        placeholder="Nombre del cliente" 
                        name='nombre'
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                </div>
                <input
                    type="submit"
                    value="Finalizar Orden"
                    className=" bg-lime-600 text-white py-2 px-2 rounded cursor-pointer"
                />
            </form>
        </div>
    );
}
 
export default FormNombre;