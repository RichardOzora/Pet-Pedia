import { assets } from "../assets/frontend_assets/assets";
import Brands from "../components/Brands.jsx";
import Category from "../components/Category.jsx";
import Hero from '../components/Hero.jsx';
import HomeFoodProducts from "../components/HomeFoodProducts.jsx";
import HomeOthersProducts from "../components/HomeOthersProducts.jsx";
import HomeProducts from "../components/HomeProducts.jsx";
import Policy from "../components/Policy.jsx";
import TestimonialsSection from "../components/Testimoni.jsx";

function HomePage(){
    
    return(
        <div className="w-full bg-no-repeat inset-0 relative" style={{backgroundImage: `url(${assets.banner_orange_background}`, backgroundSize: 'contain'}}>
            <Hero/>
            <Category/>
            <Brands/>
            <HomeProducts/>
            <HomeFoodProducts/>
            <HomeOthersProducts/>
            <Policy/>
            <TestimonialsSection/>
        </div>
    )
}

export default HomePage;