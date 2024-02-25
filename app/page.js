import React from 'react'
import Allproducts from '@/components/Allproduct'



const Home = () => {
  const data = ['A', 'B', 'C', 'D']
  return(
    <div className='flex flex-col items-center justify-start min-h-screen'>
      <div className='my-3 text-center w-2/3 text-3xl text-gray-600'>
        All Product List
      </div>
      <Allproducts/>
    </div>
  )
}

export default Home
