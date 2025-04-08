import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { singleproducts } from '../features/counter/ProductSlice';

export default function ProductCard(props) {
    const {product} =props ;

    const dispatch =useDispatch()
    const {type} = useParams()
    
    
  return (
    
    <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
    
        <img className="w-full h-48 object-cover" src={product.img} alt="imag" />

        <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 text-sm mt-1">{product.text}</p>

        
        <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-blue-600">${product.price}</span>
            <div className="flex space-x-2">
            {product.color.map((color, index) => (
                <span
                key={index}
                className="w-5 h-5 rounded-full border"
                style={{ backgroundColor: color }}
                ></span>
            ))}
            </div>
        </div>

        <Link 
        to={`/filteredProducts/${type}/` + product.id}
        onClick={()=> dispatch(singleproducts(product.id))} 
        >
        <button className="mt-4 w-full bg-sky-900 text-white py-2 rounded-lg hover:bg-sky-950 transition">
            Show Product
        </button>
        </Link>
        
      </div>
    </div>
  )
}
