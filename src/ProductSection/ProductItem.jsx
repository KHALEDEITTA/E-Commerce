import { useDispatch } from "react-redux";
import { AddToCart } from "../features/counter/CartSlice";



export default function ProductItem(props) {
  const {product} = props ;

  const dispatch =useDispatch()
  return (
    
      <div className="card bg-base-100 w-90 " key={product.id} >
  <figure className="px-4 pt-4">
    <img
      src={product.img}
      alt={product.name}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product.type}</h2>
    <p>{product.text}</p>
    <div className="flex justify-between items-center p-3 shadow-sm mb-2">
            <div  className="font-medium  " >
              Price : {product.price} $
                
            </div>
            <div color="gray" className="font-medium" >
              Color: 
              {product.color.map((item)=>(
                <span 
                className="px-2  rounded-full ml-2"
                style={{ backgroundColor: item }}
              ></span>
              ))}
              
            </div>
          </div>
    <div className="card-actions  mt-3">
      <button className="bg-sky-900 text-white px-6 py-2 rounded-lg hover:bg-sky-950 no-underline w-[50%]"
      onClick={()=>dispatch(AddToCart(product))}
      >Add To Cart</button>
    </div>
  </div>
</div>
    
  )
}
