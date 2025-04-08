import { Link } from 'react-router-dom';
import clothe from '../dataSlice/clothes.jpg'
import { useDispatch } from 'react-redux';
import { filterproducts } from '../features/counter/ProductSlice';


export default function NavBarButton() {

    const buttons = [
        "Hoodies",
        "Dresses",
        "Suits",
        "Shoes",
        "T-Shirts",
        "Jeans",
        "Jackets",
        "Bags",
      ];
    
      const dispatch = useDispatch()
  return (
    
    <div>
        <div className="flex justify-center items-center p-3">
            {buttons.map((button ,index)=>(
                <div key={index} className="mr-4">

                    <Link 
                    to={'/filteredProducts/'+button}
                    className="btn btn-outline-dark"
                    onClick={()=>dispatch(filterproducts(button))}
                    >{button}
                    </Link>
                </div> 
            ))}
        </div>
        <div className="bg-sky-800 w-[55%] mx-auto rounded-md">
            <h3 className="text-zinc-200 text-center text-lg ">SALES UP TO 50%</h3>
        </div>
        <div className="flex justify-center items-center py-4">
            <img src={clothe} alt="clothes"
            className='h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600'
            />
        </div>
    </div>
  )
}
