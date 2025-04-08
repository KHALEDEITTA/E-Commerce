import { storeData } from "../dataSlice/DataSlice"
import ProductItem from "./ProductItem"


export default function AllProduct() {
  
  return (
    <div>
        <div className="bg-sky-800 w-[55%] mx-auto rounded-md">
            <h3 className="text-zinc-200 text-center text-lg ">All product </h3>
        </div>
        <div className="grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl">
          {storeData.map((product)=>(
            <div key={product.id}>
              <ProductItem product={product} />
            </div>
          ))}
        </div>
    </div>
  )
}
