import { Link } from "react-router-dom"
import facebookLogo from '../images/facebook.png';
import instagramLogo from '../images/instagram.png';
import youtubeLogo from '../images/youtube.png';
import twitterLogo from '../images/twitter.png';
import pinterestLogo from '../images/pinterest.png'


export default function Footer() {
    
    return (
    <footer className="bg-black text-white">
        {/**Flex-Conatainer */}
        <div className="flex flex-col items-center justify-center w-86% mx-auto py-8 md:flex-row md:justify-between">
            {/**One */}
            <div className="flex flex-col items-center justify-center">
                <h1 className=" text-5xl font-special font-bold">TULOS</h1>
                <p className=" text-3xl font-special">{new Date().toDateString() }</p>
                <div className="flex mt-4">
                    <img src={facebookLogo} className="w-8 mr-3 hover:scale-110 cursor-pointer" />
                    <img src={instagramLogo} className="w-8 mr-3 hover:scale-110 cursor-pointer" />
                    <img src={youtubeLogo} className="w-8 mr-3 hover:scale-110 cursor-pointer" />
                    <img src={twitterLogo} className="w-8 mr-3 hover:scale-110 cursor-pointer" />
                    <img src={pinterestLogo} className="w-8 mr-3 hover:scale-110 cursor-pointer" />
                    
                </div>
            </div>

            {/**Two */}
            <div className="flex justify-between space-x-8 mt-8">
                <div className="flex flex-col">
                    <h1 className="text-md font-medium mb-4">ABOUT</h1>
                    <div className="flex flex-col">
                        <a href="" className="hover:text-orange-500 duration-500">Home</a>
                        <a href="" className="hover:text-orange-500 duration-500">About Us</a>
                        <a href="" className="hover:text-orange-500 duration-500">Contact</a>
                        <a href="" className="hover:text-orange-500 duration-500">Policy</a>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-md font-medium mb-4">CATEGORIES</h1>
                    <div className="flex flex-col">
                        <Link to="/men" className="hover:text-orange-500 duration-500">Men</Link>
                        <Link to="/women" className="hover:text-orange-500 duration-500">Women</Link>
                        <Link to="/electronics" className="hover:text-orange-500 duration-500">Electronic</Link>
                        <Link to="/jewelery" className="hover:text-orange-500 duration-500">Jewelery</Link>
                    </div>
                </div>
            </div>
        </div>
      
    </footer>
  )
}
