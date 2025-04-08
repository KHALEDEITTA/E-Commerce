import { configureStore} from '@reduxjs/toolkit'
import  SliderReducer from '../features/counter/SliderSlice'
import  productReducer  from '../features/counter/ProductSlice'
import  CartSlice  from '../features/counter/CartSlice'


export default configureStore({
  reducer: {
    Slider : SliderReducer ,
    Product : productReducer ,
    Cart : CartSlice ,
  },
})