import { useState } from "react"
import { assets } from "../assets/assets"
import axios from "axios"
import { backendUrl } from "../App";
import { toast } from "react-toastify";

function Add({token}){

    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [gender, setGender] = useState("Male");
    const [location, setLocation] = useState("");
    const [contact, setContact] = useState("");
    const [age, setAge] = useState("");
    const [breed, setBreed] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try{
            const formData = new FormData();

            formData.append("name", name);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("category", category);
            formData.append("gender", gender);
            formData.append("location", location);
            formData.append("contact", contact);
            formData.append("age", age);
            formData.append("breed", breed);
            image1 && formData.append("image1", image1);
            image2 && formData.append("image2", image2);
            image3 && formData.append("image3", image3);
            image4 && formData.append("image4", image4);

            const response = await axios.post(backendUrl + "/api/product/add", formData, {headers:{token}});
            
            if(response.data.success){
                toast.success(response.data.message);
                setName("");
                setDescription("");
                setImage1(false);
                setImage2(false);
                setImage3(false);
                setImage4(false);
                setPrice("");
                setCategory("");
                setLocation("");
                setBreed("");
                setContact("");
                setAge("");
            }else{
                toast.error(response.data.message);
            }
        }catch(error){
            console.log(error);
            toast(error.message);
        }
    }

    return(
        <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
            <div>
                <p className="mb-2">Upload Image</p>
                <div className="flex gap-2">
                    <label htmlFor="image1">
                        <img className="w-20" src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt=""/>
                        <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden/>
                    </label>
                    <label htmlFor="image2">
                        <img className="w-20" src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt=""/>
                        <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden/>
                    </label>
                    <label htmlFor="image3">
                        <img className="w-20" src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt=""/>
                        <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden/>
                    </label>
                    <label htmlFor="image4">
                        <img className="w-20" src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt=""/>
                        <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden/>
                    </label>
                </div>
            </div>

            <div className="w-full">
                <p className="mb-2">Product Name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Type Here" required/>
            </div>
            <div className="w-full">
                <p className="mb-2">Product Description</p>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Write Content Here" required/>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
                <div>
                    <p className="mb-2">Product Category</p>
                    <input onChange={(e) => setCategory(e.target.value)} value={category} className="w-full max-w-[200px] px-3 py-2" type="text" placeholder="Ex: Dog, Cat" required/>
                </div>

                <div>
                    <p className="mb-2">Product Price</p>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} className="w-full sm:w-[120px] px-3 py-2" type="Number" placeholder="25" required/>
                </div>

                <div>
                    <p className="mb-2">Gender</p>
                    <select onChange={(e) => setGender(e.target.value)} value={gender} className="w-full px-3 py-2">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
                <div>
                    <p className="mb-2">Location</p>
                    <input onChange={(e) => setLocation(e.target.value)} value={location} className="w-full sm:w-[230px] px-3 py-2" type="text" placeholder="Ex: Bali, Bandung" required/>
                </div>
                <div>
                    <p className="mb-2">Contact</p>
                    <input onChange={(e) => setContact(e.target.value)} value={contact} className="w-full sm:w-[230px] px-3 py-2" type="tel" placeholder="08" required/>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
                <div>
                    <p className="mb-2">Age</p>
                    <input onChange={(e) => setAge(e.target.value)} value={age} className="w-full sm:w-[230px] px-3 py-2" type="text" placeholder="Ex: Two Months, One Year" required/>
                </div>

                <div>
                    <p className="mb-2">Breed</p>
                    <input onChange={(e) => setBreed(e.target.value)} value={breed} className="w-full sm:w-[230px] px-3 py-2" type="text" placeholder="Ex: Alaskan Malamute" required/>
                </div>
            </div>

            <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">ADD</button>
            
        </form>
    )
}

export default Add