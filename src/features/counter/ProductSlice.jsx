import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../dataSlice/DataSlice";


export const productSlice = createSlice({
    name : 'Product',
    initialState :{
        filterproducts:
            JSON.parse(sessionStorage.getItem('filterData')) || storeData,   // يتم ارجاع البيانات بواسطه getItem
        singleproducts : 
        JSON.parse(sessionStorage.getItem('OneProduct')) || storeData,
    },
    reducers :{
        filterproducts(state , action){
            try{
                const filter = storeData.filter(
                    (product)=>product.type ===action.payload
                );
                state.filterproducts = filter ;
                state.error = false ;
                const savedState = JSON.stringify(filter)
                sessionStorage.setItem("filterData" ,savedState )      //يخزن البيانات في sessionStorage بحيث يمكن استرجاعها بعد إعادة تحميل الصفحة
            }
            catch(err){
                return err
            }
        },
        singleproducts (state ,action){
            try{
                const oneproduct = storeData.filter(
                    (product)=>product.id === action.payload
                );
                state.singleproducts = oneproduct ;
                state.error = false ;
                const saveproduct = JSON.stringify(oneproduct)
                sessionStorage.setItem("OneProduct",saveproduct)
                console.log('Singleproduct' , oneproduct);
                
            }
            catch(err){
                return err
            }
        }
    }
    
})

export const {filterproducts , singleproducts} = productSlice.actions
export default productSlice.reducer
