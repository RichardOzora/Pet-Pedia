import { useState, useRef, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { ShopContext } from "../context/ShopContext";

function Header() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const {setSearch, getCartCount, token, setToken, setCartItems} = useContext(ShopContext);
  const navigate = useNavigate();
  const adminUrl = import.meta.env.VITE_ADMIN_URL;

  const handleRedirect = () => {
    window.open(adminUrl, "_blank");
  };
  

  const logout = () => {
    navigate('/login');
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  }

  const toggleSearch = () => {
    setSearchVisible(true);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearch(inputRef.current.value);
      navigate("/products");
      setSearchVisible(false);
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  useEffect(() => {
    if (isSearchVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchVisible]);

  return (
    // px-0 sm:px-[3vw] md:px-[5vw] lg:px-[7vw]
    <div className="relative z-10">
      {isSearchVisible ? (
        <motion.div
          ref={searchRef}
          className="fixed left-0 right-0 top-0 backdrop-blur-xl shadow-sm px-[500px] py-4 flex items-center"
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.2 }}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-md p-2"
            onKeyDown={handleSearch}
          />
          <FontAwesomeIcon icon={faXmark} onClick={() => setSearchVisible(false)} className="pl-[30px] cursor-pointer text-indigo-600"/>
        </motion.div>
      ) : (
        <div className="fixed left-0 right-0 top-0 z-10">
          <div className="mx-[7vw] flex items-center justify-between py-5 font-medium border-b border-white">
            <NavLink to="/">
              <img className="w-36" src={assets.logo} alt="" />
            </NavLink>

            <div className="flex items-center justify-center h-full">
              <img
                src={assets.search_icon}
                alt=""
                className="w-5 cursor-pointer"
                onClick={toggleSearch}
              />
            </div>

            <div className="flex items-center relative gap-7 px-5">
              <img onClick={handleRedirect} src={assets.store} alt="" className="w-7 cursor-pointer"/>
              <div className="group relative">
                <NavLink to="/login"><img className="w-5 cursor-pointer" src={assets.profile_icon} alt=""/></NavLink>
                <div className="group-hover:block hidden absolute dropdown-menu right-0">
                  <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                    <p className="cursor-pointer hover:text-black">My Profile</p>
                    <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                    <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
                  </div>
                </div>
              </div>
              <NavLink to="/cart" className="relative">
                <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
                <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
              </NavLink>
            </div>
          </div>
        </div>
        )}
    </div>
  );
}

export default Header;
