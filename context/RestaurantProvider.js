import { createContext, useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";

import iconosNav from "../helpers/iconos";
import { formatearFecha } from "../helpers/funciones";
import { generarId } from "../helpers/funciones";
import toast, { Toaster } from 'react-hot-toast';

const RestaurantContext = createContext();

const RestaurantProvider = ({children}) => {

    const[productos, setProductos] = useState([]);
    const[iconos, setIconos] = useState([iconosNav]);
    const[productosActual, setProductosActual] = useState([]);
    const[catActual, setCatActual]=useState('cafe');
    //
    const[numPedidos, setNumPedidos] = useState([]);
    const[ordenes, setOrdenes]=useState([]);
    const[producto, setProducto]=useState({});
    const[total, setTotal] = useState(0);
    const[totalOrdenes, setTotalOrdenes]=useState(0);
    //
    const[autorizado, setAutorizado]=useState(false);

    
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

    useEffect(() => {
        const nuevoTotal = numPedidos.reduce((total, producto) => (producto.precio * producto.cantidad ) + total, 0)
        setTotal(nuevoTotal);
    }, [numPedidos]);

    useEffect(() => {
        setTotalOrdenes(totalOrdenes + total)
    }, [ordenes]);

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

    const handleEliminarProPedido = (id) => {
        const nuevoPedido= numPedidos.filter( ped => ped.id !== id );
        setNumPedidos(nuevoPedido);
        toast.success('Producto Eliminado', {
            style: {
              border: '1px solid #FC4C4C',
              padding: '16px',
              color: '#FC4C4C',
            },
            iconTheme: {
              primary: '#FC4C4C',
              secondary: '#fff',
            },
          });
    }
    const handleProducto = (producto) => {
        setProducto(producto);
    }
    const handleNuevaOrden = (orden) => {
        const fecha = new Date();
        orden.fecha = formatearFecha(fecha);
        orden.id = generarId();
        orden.total = total
        setOrdenes([
            ...ordenes, orden
        ]);
        setNumPedidos([]);
        setProducto({});
        setTimeout(() => {
            setTotal(0)    
        }, 1000);
        
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
                numPedidos,
                handleEliminarProPedido,
                handleNuevaOrden,
                ordenes,
                producto,
                handleProducto,
                autorizado,
                setAutorizado,
                total,
                totalOrdenes
            }}
        >
            {children}
        </RestaurantContext.Provider>
    )
}

export {RestaurantProvider}
export default RestaurantContext;