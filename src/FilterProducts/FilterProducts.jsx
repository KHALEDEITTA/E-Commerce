import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function FilterProducts() {
    const Products = useSelector((state)=>state.Product.filterproducts) 
    
    const {type } =useParams()
    
    
    
  return (
    
    <div>
        <div className="pt-14 ">
            <div className="pl-14">
            <h3 className='text-gray-600 text-4xl font-inter font-bold tracking-normal leading-none'>{type} </h3>
            </div>
            <div className='grid grid-cols-4 justify-items-center py-8 gap-12 '>
                {
                    Products.filter((product)=>product.type === type )
                    .map((product)=>(
                        <div className="row m-2" key={product.id}>
                            <ProductCard  product={product}  />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
