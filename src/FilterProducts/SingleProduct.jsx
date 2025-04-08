import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../features/counter/CartSlice';


export default function SingleProduct() {

  
  const Product = useSelector((state)=>state.Product.singleproducts)

  const productsize = Product[0].size ? Product[0].size[0] : "" ;
  const [Size , setSize] = useState(productsize)
  const [color , setColor] = useState(productsize)
  
  const dispatch =useDispatch()
  const addcard = useSelector((state)=>state.Cart)
  console.log('addcard', addcard);
  

  return (
    <div>
      {Product
      .map((item )=>{
        return (
          <div key={item.id} className="flex justify-center items-center py-10">
          <div className="pl-44 grow-[2] mr-4">
            <img
              className="h-[850px] rounded-lg"
              src={item.img}
              alt={item.name}
            ></img>
          </div>
          <div className="grow-[3]">
            <div className="max-w-lg">
              <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-4">
                {item.name}
              </h5>
              <p className="text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                15% OFF
              </p>
              <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                {item.text}
              </p>
              <div className="pb-4">
                {item.size ? (
                  <div>
                    <label
                      htmlFor="size"
                      className="block mb-2 text-md font-medium text-gray-900"
                    >
                      Pick a size
                    </label>
                    <select
                      id="size"
                      name="size"
                      value={Size}
                      onChange={(e) => setSize(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {item.size.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                ) : (
                  <div>
                    <label
                      htmlFor="size"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Pick a size
                    </label>
                    <select
                      id="size"
                      disabled={true}
                      name="size"
                      value={Size}
                      onChange={(e) => setSize(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {item?.size?.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                )}
              </div>

              <div className="pb-4">
                <label
                  htmlFor="color"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Pick a color
                </label>
                <select
                  id="color"
                  name="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {item.color.map((color, index) => {
                    return (
                      <option key={index} value={color}>
                        {color}
                      </option>
                    );
                  })}
                </select>
              </div>
              
                    <button
                      className='bg-slate-100 p-3 rounded-lg border-2 border-zinc-400 hover:bg-zinc-400 hover:text-white flex' 
                      onClick={()=>dispatch(AddToCart(item))}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg> Add to Cart
                    </button>
                  
                
              
            </div>
          </div>
        </div>
        )
      })}
    </div>
  )
}
