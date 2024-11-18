import { Routes, Route, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Header from "./components/Header"
import ProductPage from "./pages/ProductPage"
import SingleProductPage from "./pages/SingleProductPage"
import { useEffect, useState } from "react"
import CartPage from "./pages/CartPage"
import PlaceOrder from "./pages/PlaceOrder"
import OrdersPage from "./pages/OrdersPage.jsx"
import Footer from "./components/Footer.jsx"

function App() {

  const location = useLocation();
  const noHeader = ["/login", "/register"];
  const noFooter = ["/login", "/register"];;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setIsLoggedIn(true);
    }
  }, [])

  console.log(location.pathname);

  return(
    <div>
      {!noHeader.includes(location.pathname) && <Header isLoggedIn={isLoggedIn} setIsLoggedIn={isLoggedIn}/>}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/product/:productId" element={<SingleProductPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/orders" element={<OrdersPage/>}/>
      </Routes>
      {!noFooter.includes(location.pathname) && <Footer/>}
    </div>
  )
}

export default App
