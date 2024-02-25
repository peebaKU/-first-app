import React from 'react'

const Product = ({data, rowNumber}) =>{
    const bgColor = (Number(rowNumber) % 2 === 0)? 'bg-gray-100':'bg-gray-200'
    return(
        <div className={`flex items-center h-10 w-full ${bgColor}`}>
            <div className='text-center w-5/12'>Product Name: </div>
                <div className='w-4/12 ml-3 text-left'>{data.ProductName}
                </div>
            <div className='w-2/12 text-left'>Prive: </div>
            <div className='w-2/12 text-left '>{data.price}</div>
        </div>
    )
}

export default Product