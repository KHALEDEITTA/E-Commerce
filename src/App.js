import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Main/Main';
import './index.css'
import FilterProducts from './FilterProducts/FilterProducts';
import SingleProduct from './FilterProducts/SingleProduct';
import Cart from './Cart/Cart';
import Login from './LogIn/Login';
import SignUp from './LogIn/SignUp';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/' element={<Main></Main>} />
      <Route path='/filteredProducts/:type' element={<FilterProducts />} />
      <Route path='/filteredProducts/:type/:id' element={<SingleProduct/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
