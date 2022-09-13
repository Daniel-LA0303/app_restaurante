import React from 'react';

//components
import Header from '../components/Header';
import NavIcons from '../components/NavIcons';
import Producto from '../components/Producto';
import Custom404 from './404';
//context
import useRestaurant from '../hooks/useRestaurant';

const Menu = () => {

    const {productosActual, autorizado} = useRestaurant();

    let error = <Custom404 />
    return (
        <div>
            {autorizado ? (
                <>
                    <Header pag={'Menu'} />
                    <NavIcons />
                    <div className="flex flex-wrap justify-evenly">
                        {productosActual.map(producto => (
                            <Producto 
                                key={producto.id}
                                producto={producto}
                            />
                        ))}
                    </div>
                </>
            ): <>{error}</>}

        </div>
      );
}
 
export default Menu;