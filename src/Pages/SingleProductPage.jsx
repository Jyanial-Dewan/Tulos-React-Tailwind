import { useParams, } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingImage from '../images/loading.png'


export default function SingleProductPage() {
    const[product, setProduct] = useState(null);
    const[loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(()=>{
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();

                setProduct(data);
            } catch(error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();

    }, [id]);
    

    return (
        <section className="flex justify-center pt-[6rem]">
            {/**Flex-container */}
            {loading? (<div>
                        <img src={LoadingImage} className="w-60"/>
                       </div>): 
                       (<div className="flex flex-col items-center m-8 w-86%">
                            <img src={product.image} className="w-[400px] h-[500px]"/>
                            <div>
                            <p className="text-xl font-bold font-special max-w-[400px] mt-1">{product.title}</p>
                            <p className="text-md font-normal max-w-[400px] my-1">{product.description}</p>
                            <p className="text-xl font-bold font-special mb-1">${product.price}</p>
                            <p className="text-lg font-special">{product.rating.rate}({product.rating.count})</p>
                            </div>

                       </div>)
                      }
        </section>
      )
    }