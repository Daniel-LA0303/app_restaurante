import { createContext, useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";

import iconosNav from "../helpers/iconos";

const RestaurantContext = createContext();

const RestaurantProvider = ({children}) => {

    const[productos, setProductos] = useState([]);
    const[iconos, setIconos] = useState([iconosNav]);
    const[productosActual, setProductosActual] = useState([]);
    const[catActual, setCatActual]=useState('cafe');
    //
    const[numPedidos, setNumPedidos] = useState([]);

    
    //obtiene todos los productos desde la api
    useEffect(() => {
        const obtenerProductos = async () => {
            const data = await axios.get('https://daniel-la0303.github.io/json-restaurante/db.json')
            setProductos(data.data.productos); 
        }
        obtenerProductos();
    }, []);
    useEffect(() => {
        const nuevoProducto= productos.filter( pro => pro.categoriaId === catActual );
        setProductosActual(nuevoProducto);
    }, [productos]);

    //functions
    const handleClickIcon = (id) => {
        const nuevoProducto= productos.filter( pro => pro.categoriaId === id );
        setProductosActual(nuevoProducto);
        setCatActual(id);
    }
    const handleNuevoPedido = (pro) => {
        // console.log(pro);
        if(numPedidos.some(productoPe => productoPe.id === pro.id)){
            const numPedidosUpdate = numPedidos.map(productoPe => productoPe.id === pro.id ? pro : productoPe);
            setNumPedidos(numPedidosUpdate);
        }else{
            setNumPedidos([
                ...numPedidos, pro
            ]);
        }
    }


    return(
        <RestaurantContext.Provider
            value={{
                productos,
                iconos,
                catActual,
                productosActual,
                handleClickIcon,
                handleNuevoPedido,
            }}
        >
            {children}
        </RestaurantContext.Provider>
    )
}

export {RestaurantProvider}
export default RestaurantContext;