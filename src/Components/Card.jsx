import { Link } from "react-router-dom";
import ProductContext from "../Context/ProductContext";
import { useContext } from "react";


export default function Card({product}) {
  const context = useContext(ProductContext);
  const {handleClick} = context;

  return (
    <div className="bg-white flex flex-col items-center justify-center flex-grow py-4 px-6 m-2 rounded-2xl">
        <img src={`${product.image}`} className="w-[250px] h-[300px]"/>
        <h1 className="text-md max-w-[250px]">{product.title.substring(0,25) + ' ....'}</h1>
        <h1 className="text-lg">${product.price}</h1>
        <div className="flex justify-around space-x-4 mt-2">
            <Link to={`/all-products/${product.id}`} className="bg-black text-white px-4 py-1 rounded-lg hover:bg-gray-700">
              See Details
            </Link>
            
            <div className="bg-black text-white px-4 py-1 rounded-lg hover:bg-gray-700 cursor-pointer"
                     onClick={()=>handleClick(product)}>
               Add to Cart
            </div>
        
        </div>
    </div>
  )
}
