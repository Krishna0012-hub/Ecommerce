import React, { useState,createContext } from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    let cart = {};
    for(let i = 0; i<all_product.length+1; i++)
    {
        cart[i] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());
   
   
    const addToCart = (itemId) =>{
        setCartItem((prev) =>({...prev, [itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId) =>{
        setCartItem((prev) =>({...prev, [itemId]:prev[itemId]-1}))
    }
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                totalItem+=  cartItem[item];
            }
        }
        return totalItem;
    }
    const contextValue = { getTotalCartItems, all_product, cartItem, addToCart,  removeFromCart };
    

    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children} 
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
