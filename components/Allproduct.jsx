import React from 'react'
import Product from '@/components/Product'

const Allproducts = () =>{
    const data = [
        {id: '1', ProductName:'Product A', price: 199},
        {id: '2', ProductName:'Product B', price: 299},
        {id: '3', ProductName:'Product C', price: 399},
        {id: '4', ProductName:'Product D', price: 499},
    ]

    return(
        <div className='flex flex-col boder border-gray-400 my-3 w-2/3 rounded-sm shadow-md'>
        {
            data.map((item, index) => {
                return(
                    <Product key={item.id} data={item} rowNumber={index}/>
                )
            })
        }
        </div>
    )
}

export default Allproducts