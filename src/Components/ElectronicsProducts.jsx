import { useContext } from "react";
import ProductContext from "../Context/ProductContext";
import Card from "./Card";
import Loading from "./Loading";

export default function ElectronicsProducts() {
    const context = useContext(ProductContext);
    const {products, loading} = context;

    const electronicsProducts = products.filter((products)=>{
        return products.category === `electronics`
    })
  
    return (
        <section className="bg-gray-300 py-10 flex justify-center">
            {/**Flex-container */}
            {loading? (<Loading/>) : 
                      (<div className="flex flex-wrap w-86% mx-auto">
                      {electronicsProducts.map((product)=>(
                          <Card key={product.id} product={product}/>
                      ))}
                      
                  </div>)
            }
          
        </section>
      )
    }


