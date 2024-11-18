import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title2 from "./Title2.jsx"
import ProductItem from "./ProductItem.jsx";

function HomeProducts(){

    const { products } = useContext(ShopContext);
    const [homeProducts, setHomeProducts] = useState([]);

    useEffect(() => {
        setHomeProducts(products.slice(0, 10));
    }, [products])
    
    return(
        <div className="px-0 sm:px-[3vw] md:px-[5vw] lg:px-[7vw]">
            <div className="text-center py-8 text-3xl">
                <Title2 text1={"TRENDING"}  text2={"PETS"}/>
            </div> 

            {/* Rendering Products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md-grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                homeProducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
            </div>
        </div>
    )
}

export default HomeProducts;