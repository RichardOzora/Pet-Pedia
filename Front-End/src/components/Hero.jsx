import { NavLink } from "react-router-dom";

function Hero(){
    return(
        <div id="hero">
            <h5>FIND YOU PERFECT PET COMPANION</h5>
            <h2><span>Explore a wide</span> variety of pets</h2>
            <h1>And Connect with</h1>
            <p className="text-gray-500">responsible pet owners today.</p>
            <NavLink id="button" to="/products">Shop Now</NavLink>
        </div>
    )
} 

export default Hero;