'use client'
import {useState}  from 'react';

const Home = () => {
const productData = [
  {id: '1', ProductName:'Kphone mini', price: 199},
  {id: '2', ProductName:'Kphone Pro', price: 299},
  {id: '3', ProductName:'Kphone Ultra', price: 399},
  {id: '4', ProductName:'Kphone Pad', price: 379},
  {id: '5', ProductName:'Kphone Pad Pro', price: 499},
]
  const [products, setProducts] = useState(productData)
  
  const deleteHandler = (id) => {
    const index = products.findIndex(item => item.id === id);

    if(index !== -1){
      console.log(...products);
      const updatedProducts = [...products];
      updatedProducts.splice(index, 1);
      setProducts(updatedProducts);
    }
  }

  if(products.length === 0){
    return(
      <div className='flex flex-col items-center justify-start p-20'>
              <div className='my-5 text-3xl text-gray-400'>
              Empty Products
              </div>
      </div>
    )
  }
  return(
    <div className='flex flex-col items-center justify-start p-10'>
      <div className='my-5 text-3xl text-gray-400'>Product Lists</div>
      {
        productData.map((item, index)=>{
          const rowStyle = (index % 2 === 0)? 'bg-gray-200':'bg-gray-100'
          return(
            <div key={item.id} className={`flex justify-between w-7/12 p-3 ${rowStyle}`}>
                <div>{item.ProductName}</div>
                <button 
                  onClick={deleteHandler.bind(this, item.id)} 
                  className='py-1 px-2 ring-1 ring-gray-700 rounded-md hover:bg-gray-300 active:bg-red-500 active:text-white'>
                  Delete
                </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home
