import React from 'react';

//components
import Header from '../components/Header';
import NavIcons from '../components/NavIcons';
import Producto from '../components/Producto';
//context
import useRestaurant from '../hooks/useRestaurant';

const Menu = () => {

    const {productosActual} = useRestaurant();
    return (
        <div>
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
        </div>
      );
}
 
export default Menu;