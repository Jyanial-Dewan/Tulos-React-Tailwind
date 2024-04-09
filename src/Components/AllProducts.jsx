import { useContext } from "react";
import ProductContext from "../Context/ProductContext";
import Card from "./Card";
import Loading from "./Loading";

export default function AllProducts() {
    

    const context = useContext(ProductContext);
    const {products, loading} = context;
    
    return (
        <section className="bg-gray-300 py-10 flex justify-center">
            {/**Flex-container */}
            {loading? (<Loading/>): 
                      (<div className="flex flex-wrap w-86% mx-auto">
                          {products.map((product)=>(
                          <Card key={product.id} product={product}/>
                      ))
            }
                  </div>)}
        </section>
      )
    }
