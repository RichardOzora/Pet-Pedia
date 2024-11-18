import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";


function SingleProductPage(){

    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');

    const fetchProductData = async () => {

        products.map((item) => {
            if(item._id === productId){
                setProductData(item);
                setImage(item.image[0]);
                return null;
            }
        })

    }

    useEffect(() => {
        fetchProductData();
    }, [productId, products])

    return productData ? (
        <div className="border-t-2 transition-opacity ease-in duration-500 opacity-100 pt-24 px-0 sm:px-[3vw] md:px-[5vw] lg:px-[7vw]">
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                        {
                            productData.image.map((item, index) => (
                                <img onClick={() => setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"/>
                            ))
                        }
                    </div>
                    <div className="w-full sm:w-[80%]">
                        <img  className="w-full h-auto" src={image} alt=""/> 
                    </div>
                </div>

                <div className="flex-1">
                    <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
                    <div className="flex items-center gap-1 mt-2">
                        <img src={assets.star_icon} alt="" className="w-3 5"/>
                        <img src={assets.star_icon} alt="" className="w-3 5"/>
                        <img src={assets.star_icon} alt="" className="w-3 5"/>
                        <img src={assets.star_icon} alt="" className="w-3 5"/>
                        <img src={assets.star_dull_icon} alt="" className="w-3 5"/>
                        <p className="pl-2">(122)</p>
                    </div>
                    <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
                    <div className="flex flex-col text-base gap-1 mt-3">
                        <p>Gender : {productData.gender}</p>
                        <p>Age: {productData.age}</p>
                        <p>Location: {productData.location}</p>
                    </div>
                    <p className="mt-3 text-gray-500 md:w-4/5">{productData.description}</p>
                    <button onClick={() => addToCart(productData._id)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mt-5">ADD TO CART</button>
                    <hr className="mt-8 sm:w-4/5"/>
                    <div className="text-sm text-gray-500 mt-5 flex flex-col gap-2">
                        <p>For more information contact number : {productData.contact}</p>
                        <p>Cash on delivery is available for this product</p>
                        <p>100% safe on delivery</p>
                    </div>
                </div>

            </div>

        </div>
    ) : <div className="opacity-0"></div>
}

export default SingleProductPage;