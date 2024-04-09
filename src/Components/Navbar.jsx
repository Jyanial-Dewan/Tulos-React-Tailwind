import { useContext, useState } from "react";
import ProductContext from "../Context/ProductContext";
import { Link} from 'react-router-dom';
import cartImage from '../images/shopping-bags.png'


export default function Navbar() {
    let Links = [
        {name:'Home', link: '/'},
        {name:'About', link: '/about'},
        {name: 'User Form', link: '/user-form'},
        {name: 'User List', link: '/user-list'},
        {name:'All Product', link: '/all-products'},
       
    ];

    let [open, setOpen] =useState(false);
    const context = useContext(ProductContext);
    const {cart} = context;
  return (
    <nav className="bg-black w-full h-24 fixed z-50">
        {/**Flex-Container */}
        <div className="w-86% mx-auto h-full flex justify-between items-center ">
            <h1 className="text-5xl text-white font-special">TULOS</h1>
            <ul className="hidden md:text-white md:flex md:items-center md:space-x-4">
                {Links.map((link)=>(
                    <li key={link.name}>
                        <Link to={link.link} className="duration-500 md:hover:text-orange-500">{link.name}</Link>
                    </li>
                ))}
                <Link to={'/cart-list'} className="flex">
                    <img src={cartImage} className="md:w-10"/>
                    <span className="text-red-600">{cart.length}</span>
                </Link>
            </ul>
            <div className="flex h-full items-center md:hidden">
            <Link to={'/cart-list'} className="flex mr-6">
                <img src={cartImage} className="w-10"/>
                <span className="text-red-600">{cart.length}</span>
            </Link>
            <div onClick={()=>setOpen((prevState)=>(!prevState))} className="text-5xl text-white cursor-pointer">
                <ion-icon name={open? "close": "menu"}></ion-icon>
            </div>
            </div>
            <ul onClick={()=>setOpen((prevState)=>(!prevState))} className={open? "absolute top-[6rem] right-0 w-80 h-[83vh] text-black flex flex-col items-center pt-20 space-y-8 md:hidden bg-white text-2xl duration-500 ease-in-out z-10": 
                                "absolute top-[6rem] right-[-600px] w-80 h-[80vh] text-black flex flex-col items-center pt-6 space-y-8 md:hidden bg-white text-2xl duration-500 ease-in-out"}>
                {Links.map((link)=>(
                    <li key={link.name}>
                        <Link to={link.link} className="duration-500 hover:text-orange-500">{link.name}</Link>
                    </li>
                ))}
            </ul>
            
        </div>
    </nav>
  )
}
