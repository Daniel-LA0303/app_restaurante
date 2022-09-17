import React from 'react';
//context
import useRestaurant from '../hooks/useRestaurant';
//components
import Header from '../components/Header';
import Custom404 from './404';
import Table from '../components/Table';
import Image from 'next/image';

const Ordenes = () => {

  const {ordenes, autorizado} = useRestaurant();
  let error = <Custom404 />
  return (
    <div>
      {autorizado ? (
        <>
          <Header pag={'Ordenes'}/>
          {ordenes.length>0 ? (
            <Table />
          ):(
            <p className='mt-8 text-center text-xl font-bold text-red-600'>Aun no no hay nunguna orden</p>
          )}
          
        </>
      ): <>{error}</>}
     
    </div>
  );
}
 
export default Ordenes;