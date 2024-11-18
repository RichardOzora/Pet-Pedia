import { assets } from "../assets/frontend_assets/assets"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faTwitter, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <div className="border-t mt-20">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-4 my-10 mt-16 text-sm px-0 sm:px-[3vw] md:px-[5vw] lg:px-[7vw]">
                <div className="">
                    <img src={assets.logo} alt="" className="mb-5 w-32"/>
                    <p className="w-full md:w-2/3 text-gray-600">Our mission is to connect pet lovers with happy, healthy companions by providing a trusted platform for buying and selling pets. Together, we aim to build a community that celebrates the joy and companionship pets bring to our lives.</p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">Categories</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Pets</li>
                        <li>Foods</li>
                        <li>Others</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">Contact Us</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>+62 895 0691 0277</li>
                        <li>richardozora11@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">Follow Us</p>
                    <ul className="flex flex-row gap-1 text-gray-600">
                        <li className="text-xl"><FontAwesomeIcon icon={faInstagram}/></li>
                        <li className="text-xl"><FontAwesomeIcon icon={faFacebook}/></li>
                        <li className="text-xl"><FontAwesomeIcon icon={faTwitter}/></li>
                        <li className="text-xl"><FontAwesomeIcon icon={faYoutube}/></li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="py-5 text-sm text-center">Copyright - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer