import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import Footer from "../components/Footer";

function ProductPage(){

    const { products, search } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [showProducts, setShowProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [gender, setGender] = useState([]);

    const toggleCategory = (e) => {
        const { value } = e.target;
        if(category.includes(value)){
            setCategory(prev => prev.filter(item => item !== value));
        }else{
            setCategory(prev => [...prev, value]);
        }
    }

    const toogleGender = (e) => {
        const { value } = e.target;
        if(gender.includes(e.target.value)){
            setGender(prev => prev.filter(item => item !== value));
        }else{
            setGender(prev => [...prev, value]);
        }
    }

    const applyFilter = () => {
        let productsCopy = products.slice();

        if (search) {
            const searchLower = search.toLowerCase();
            productsCopy = productsCopy.filter((item) =>
                item.name.toLowerCase().includes(searchLower) ||
                item.breed.toLowerCase().includes(searchLower) ||
                item.category.toLowerCase().includes(searchLower)
            );
        }

        if(category.length > 0){
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        if(gender.length > 0){
            productsCopy = productsCopy.filter(item => gender.includes(item.gender));
        }

        setShowProducts(productsCopy);
    }

    useEffect(() => {
        applyFilter();
    }, [category, gender, search, products])

    useEffect(() => {
        console.log(category);
        console.log(gender);
    }, [category, gender])

    return(
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-0 sm:px-[3vw] md:px-[5vw] lg:px-[7vw]">
            <div className="min-w-60">
                <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2 pt-24">FILTERS
                <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt=""/></p>
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={"Dog"} onChange={toggleCategory}/>Dog
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={"Cat"} onChange={toggleCategory}/>Cat
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={"Bird"} onChange={toggleCategory}/>Bird
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={"Other"} onChange={toggleCategory}/>Other
                        </p>
                    </div>
                </div>

                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className="mb-3 text-sm font-medium">GENDER</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={"Male"} onChange={toogleGender}/>Male
                        </p>
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={"Female"} onChange={toogleGender}/>Female
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4 pt-24">
                    <Title text1={"ALL"} text2={"PRODUCTS"}/>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {
                        showProducts.map((item, index) => (
                            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductPage;