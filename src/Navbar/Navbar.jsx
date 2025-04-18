import { Link, useNavigate } from 'react-router-dom'
import logo from '../dataSlice/logo.png'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../LogIn/firebaseConfig';

function Navbar() {
  const carts = useSelector((state) => state.Cart);
  const totalQuantity = carts.reduce((acc, cart) => {
    acc +=  cart.quantity ;
    return acc;
}, 0);


  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // التحقق مما إذا كان المستخدم مسجّل دخول عند تحميل الصفحة
  useEffect(() => {
    const user = auth.currentUser;
    setIsLoggedIn(!!user);
}, []);

  // تسجيل خروج المستخدم
  const handleLogout = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
    navigate("/login");
};

  return (
    <div>
        <div className="bg-black p-2 w-full flex justify-center items-center ">
            <h3 className="text-white font-inter text-center font-bold text-2xl tracking-normal leading-none">Welcome</h3>
        </div>
        <div className="flex justify-around items-center">
            <div>
                <img className='h-28 w-full' src={logo} alt="logo" />
            </div>
            <div className='flex flex-row items-center'>
              {isLoggedIn ? (<button 
                onClick={handleLogout}
                className='btn btn-outline-dark font-medium text-center mr-2'>LogOut</button>) : 
                (<Link 
                to={"/login"}
                className='btn btn-outline-dark font-medium text-center mr-2'>LogIn</Link>
                )}
                
                <div className='flex flex-row items-center'>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#000"
                    className="w-6 h-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                    </svg>
                    <p className=" font-inter text-base font-medium tracking-normal leading-none text-center mr-2 mt-3">
                    Whish List
                    </p>
                </div>
                <Link to={"/cart"} className='no-underline text-black ' key={carts.id}>
                <div 
            className="flex flex-row items-center cursor-pointer no-underline"

          >
              
              <span className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1">
                {totalQuantity}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>


            <p className=" font-inter text-base font-medium tracking-normal leading-none text-center mt-3 no-underline">
              Shopping bag
            </p>
           
          </div>
          </Link>
            </div>
        </div>
        <div className="bg-black p-2 w-full flex items-center justify-center mx-auto">
        <p className="text-white font-inter text-base font-medium ">50& OFF</p>
        <p className="text-white font-inter text-base font-medium mx-96">
          Free shipping and returns
        </p>
        <p className="text-white font-inter text-base font-medium ">
          Diffrent payment methods
        </p>
      </div>
    </div>
  )
}

export default Navbar
