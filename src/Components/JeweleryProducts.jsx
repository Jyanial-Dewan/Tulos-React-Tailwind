import { useContext } from "react";
import ProductContext from "../Context/ProductContext";
import Card from "./Card";
import Loading from "./Loading";

export default function JeweleryProducts() {
    const context = useContext(ProductContext);
    const {products, loading} = context;

    const jeweleryProducts = products.filter((products)=>{
        return products.category === `jewelery`
    })
  
    return (
        <section className="bg-gray-300 py-10 flex justify-center">
            {/**Flex-container */}
            {loading? (<Loading/>) : 
                      (<div className="flex flex-wrap w-86% mx-auto">
                      {jeweleryProducts.map((product)=>(
                          <Card key={product.id} product={product}/>
                      ))}
                      
                  </div>)
            }
          
        </section>
      )
    }

