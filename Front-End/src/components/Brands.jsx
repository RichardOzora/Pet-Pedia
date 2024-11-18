import { assets } from "../assets/frontend_assets/assets";
import Title2 from "./Title2.jsx";
import Marquee from "react-fast-marquee"


function Brands(){
    return(
        <>
            <div className="text-center py-5 text-3xl">
                <Title2 text1={"OUR"}  text2={"BRANDS"}/>
            </div>
            
            <div>
                <Marquee pauseOnHover="true" direction="right" speed={150} gradient>
                    <div className="mx-[30px] my-0">
                        <img src={assets.whiskas_logo} alt=""/>
                    </div>
                    <div className="mx-[30px] my-0">
                        <img src={assets.royal} alt="" className="w-[80%]"/>
                    </div>
                    <div className="mx-[30px] my-0">
                        <img src={assets.friskies} alt="" className="w-[70%]"/>
                    </div>
                    <div className="mx-[30px] my-0">
                        <img src={assets.bolt} alt="" className="w-[70%]"/>
                    </div>
                    <div className="mx-[30px] my-0">
                        <img src={assets.meo} alt="" className="w-[70%]"/>
                    </div>
                </Marquee>
            </div>
        </>
    )
}

export default Brands;