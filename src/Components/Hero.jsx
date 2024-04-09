import bgImage from '../images/banner-1.jpg';
import { Link } from 'react-router-dom';

export default function Hero() {
    
  return (
    <section style={{backgroundImage: `linear-gradient(to right,rgba(39,39,39,0.4), rgba(39,39,39,0.4)),url(${bgImage})`}}
     className='w-full h-[80vh] bg-cover bg-center'> 
        {/**Flex-Container */}
        <div className='flex w-86% h-[100%] mx-auto justify-between items-end text-white'>
            <div className='max-w-[60%] mb-8'>
                <h1 className="text-5xl font-special">
                    TULOS NEW COLLECTION
                </h1>
                <p className='text-md'>
                    Find out our best collection. Offering best quality products in our New Collection.
                </p>
            </div>
            <Link to="/all-products" className='bg-white text-black px-7 py-3 mb-8 rounded-2xl hover:bg-gray-300'>
                Buy Now
            </Link>
        </div>
    </section>
  )
}
