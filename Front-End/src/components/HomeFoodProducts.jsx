import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title2 from "./Title2.jsx"
import OtherProductItem from "./OtherProductItem.jsx";


function HomeFoodProducts(){
    const { foodProducts } = useContext(ShopContext);
    const [homeProducts, setHomeProducts] = useState([]);

    useEffect(() => {
        setHomeProducts(foodProducts.slice(0, 10));
    }, [foodProducts])
    
    return(
        <div className="my-10 px-0 sm:px-[3vw] md:px-[5vw] lg:px-[7vw]">
            <div className="text-center py-8 text-3xl">
                <Title2 text1={"TRENDING"}  text2={"FOODS"}/>
            </div> 

            {/* Rendering Products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md-grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                homeProducts.map((item, index) => (
                    <OtherProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
            </div>
        </div>
    )
}

export default HomeFoodProducts;