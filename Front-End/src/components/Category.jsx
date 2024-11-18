import { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { ShopContext } from "../context/ShopContext.jsx";
import Title2 from "./Title2.jsx";

function Category(){

    const {navigate} = useContext(ShopContext);
    const customStyle = {
        fontFamily: "'Sour Gummy', sans-serif",
        fontWeight: 450
    };

    return(
        <div className="px-0 sm:px-[3vw] md:px-[5vw] lg:px-[7vw]">
            <div className="text-center py-8 text-3xl">
                <Title2 text1={"TOP"}  text2={"CATEGORIES"}/>
            </div>
            <div className="flex justify-center gap-[150px]">
                <div onClick={() => navigate('/products')} className="w-[20%] min-w-[250px] p-[10px_12px] border border-[#cce7d0] rounded-[25px] cursor-pointer shadow-[20px_20px_30px_rgba(0,0,0,0.02)] my-[15px] relative transition duration-300 ease-out hover:shadow-[20px_20px_30px_rgba(0,0,0,0.06)]">
                    <div>
                        <img src={assets.pets} alt="" className="w-full rounded-[20px]"/>
                    </div>
                    <h2 style={customStyle} className="text-2xl font-semibold text-center py-2">Pets</h2>
                </div>
                <div className="w-[20%] min-w-[250px] p-[10px_12px] border border-[#cce7d0] rounded-[25px] cursor-pointer shadow-[20px_20px_30px_rgba(0,0,0,0.02)] my-[15px] relative transition duration-300 ease-out hover:shadow-[20px_20px_30px_rgba(0,0,0,0.06)]">
                    <div>
                        <img src={assets.food} alt="" className="w-full rounded-[20px]"/>
                    </div>
                    <h2 style={customStyle} className="text-2xl font-semibold text-center py-2">Foods</h2>
                </div>
                <div className="w-[20%] min-w-[250px] p-[10px_12px] border border-[#cce7d0] rounded-[25px] cursor-pointer shadow-[20px_20px_30px_rgba(0,0,0,0.02)] my-[15px] relative transition duration-300 ease-out hover:shadow-[20px_20px_30px_rgba(0,0,0,0.06)]">
                    <div>
                        <img src={assets.toys} alt="" className="w-full rounded-[20px]"/>
                    </div>
                    <h2 style={customStyle} className="text-2xl font-semibold text-center py-2">Toys and Others</h2>
                </div>
            </div>
        </div>
    )
}

export default Category;