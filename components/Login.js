import React, {useState} from 'react';
import { useRouter } from 'next/router';

const Login = () => {

    // const {setAutorizado} = useRestaurant();

    const[inicio, setInicio] = useState({
        usuario: '',
        password: ''
    });
    const {usuario, password} = inicio;
    const navigate = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if([usuario, password].includes('')){
            alert('Es necesario llenar los dos campos');
            return;
        }
        if(usuario === 'admin' && password === 'admin'){
            navigate.push('/menu');
            console.log('ha iniciado sesion');
        }else{
            alert('El usuario o la contraseña son necesarios');
        }
    }   

    const handleChange = (e) => {
        setInicio({
            ...inicio,
            [e.target.name] : e.target.value
        })
    }

    return (  
        <div className=' h-auto sm:w-4/6 md:w-4/6 lg:w-3/6 xl:w-2/6 w-full '>
            <form 
                className=' py-10 px-8 color-marron rounded '
                onSubmit={handleSubmit}
            >
                <h3 className='mb-5 text-center text-4xl text-white'>Iniciar Sesión</h3>
                <div className='flex flex-col justify-center'>
                    <label className='block mb-2 text-2xl text-center text-white'>Usuario</label>
                    <div className='flex justify-center'>
                        <input 
                            className='input-form h-10 mb-5  rounded-sm'
                            type="text"
                            placeholder='Usuario'
                            value={usuario}
                            name='usuario'
                            onChange={handleChange}
                        />
                    </div>

                </div>
                <div className='flex flex-col justify-center'>
                    <label className='block mb-2 text-2xl text-center text-white'>Password</label>
                    <div className='flex justify-center'>
                        <input 
                            className='input-form h-10 mb-5  rounded-sm'
                            type="password"
                            placeholder='Password'
                            value={password}
                            name='password'
                            onChange={handleChange}
                        />
                    </div>

                </div>
                <div
                    className='flex justify-center'
                >
                    <input
                        type="submit"
                        value="Iniciar"
                        className='bg-orange-500 text-xl py-3 px-8 w-40 rounded text-white hover:bg-amber-600'
                    />
                </div>

            </form>
        </div>
    );
}
 
export default Login;