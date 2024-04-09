import { useEffect, useState } from "react"
import Card from "./Card"

export default function HomeProducts() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();

                setProducts(data);

            } catch(error) {
                console.log('Error fetching data', error)
            }
        }

        fetchProducts();

    }, []);

    const homeProducts = products.slice(0,6);

  return (
    <section className="bg-gray-300 py-10">
        <h1 className="text-center text-5xl mb-4 font-special">FEATURED PRODUCTS</h1>
        {/**Flex-container */}
        <div className="flex flex-wrap w-86% mx-auto">
            {homeProducts.map((product)=>(
                <Card key={product.id} product={product}/>
            ))}
            
        </div>
      
    </section>
  )
}
