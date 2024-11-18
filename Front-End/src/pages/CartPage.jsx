import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";


function CartPage(){

    const {products, currency, cartItems, updateQuantity, navigate} = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const tempData = [];
        for(const items in cartItems){
            if(cartItems[items] > 0){
                tempData.push({
                    _id: items,
                    quantity: cartItems[items]
                })
            }
        }
        setCartData(tempData);
    }, [cartItems])

    return(
        <div className="px-0 sm:px-[3vw] md:px-[5vw] lg:px-[7vw] border-t pt-24">
            <div className="text-2xl mb-3">
                <Title text1={"YOUR"} text2={"CART"}/>
            </div>
            <div>
                {
                    cartData.map((item, index) => {
                        const productData = products.find((product) => product._id === item._id);

                        return(
                            <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 ">
                                <div className="flex items-start gap-6">
                                    <img src={productData.image[0]} alt="" className="w-16 sm:w-20"/>
                                    <div>
                                        <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                                        <div className="flex items-center gap-5 mt-2">
                                            <p>{currency} {productData.price}</p>

                                        </div>
                                    </div>
                                </div>
                                <input onChange={(e) => e.target.value === ' ' || e.target.value === '0' ? null : updateQuantity(item._id, Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"/>
                                <img onClick={() => updateQuantity(item._id, 0)} className="w-4 mr-4 sm:w-5 cursor-pointer" src={assets.bin_icon} alt=""/>
                            </div>
                        )
                    })
                }
            </div>

            <div className="flex justify-end my-20">
                <div className="w-full sm:w-[450px]">
                    <CartTotal/>
                    <div className="w-full text-end">
                        <button onClick={() => navigate("/place-order")} className="bg-black text-white text-sm my-8 px-8 py-3">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartPage;