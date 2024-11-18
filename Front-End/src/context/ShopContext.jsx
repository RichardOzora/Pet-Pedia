import { createContext, useEffect, useState } from "react";
import {  foodProducts, otherProducts } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const deliveryFee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            cartData[itemId] += 1;
        }else{
            cartData[itemId] = {};
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            try{
                if(cartItems[items] > 0){
                    totalCount += cartItems[items];
                }
            }catch(err){

            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId] = quantity;

        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items);
            try{
                if(cartItems[items]){
                    totalAmount += itemInfo.price * cartItems[items];
                }
            }catch(error){
            }
        }
        return totalAmount;
    }

    const getProductsData = async() => {
        try{
            const response = await axios.get(backendUrl + "/api/product/list");
            if(response.data.success){
                setProducts(response.data.products);
            }else{
                toast.error(response.data.message)
            }
        }catch(error){
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        getProductsData();
    },[])

    useEffect(()=>{
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
        }
    }, [])

    const value = {
        products, currency, deliveryFee, search, setSearch, cartItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate, foodProducts, backendUrl,
        token, setToken, otherProducts
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;