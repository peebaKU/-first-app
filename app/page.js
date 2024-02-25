import React  from 'react';
import Allproducts from '@/components/Allproduct'
import Show from '@/components/UseState';

const Home = () => {
  const data = ['A', 'B', 'C', 'D']
  return(
    <div className='flex flex-col items-center justify-start min-h-screen'>
      <div className='my-3 text-center w-2/3 text-3xl text-gray-600'>
        All Product List 
      </div>
      <Allproducts/>
      <Show></Show>
    </div>
  )
}

export default Home
