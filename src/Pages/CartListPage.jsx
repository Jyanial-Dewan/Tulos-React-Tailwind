import { useContext } from "react"
import ProductContext from "../Context/ProductContext"

export default function CartListPage() {
    const context = useContext(ProductContext);
    const {cart, handleRemove} = context;

    const amounts = cart.map(product=>product.price);
    const totalAmount = amounts.reduce((acc, item) => (acc += item))

  return (
    <div className="pt-[6rem] ">
      <div className="flex justify-center flex-wrap w-86% mx-auto my-8 ">
      {
        cart.map((product)=>
        <>
        <div className="flex-grow-1 bg-gray-100 mr-4 mb-4 px-3 py-2 rounded-xl" key={product.id}>
        <img src={product.image} alt="" className="w-20 h-24"/>
        <h1 className="">Price: {product.price}</h1>
        <button className="bg-black text-white px-2 py-1 rounded-xl hover:bg-slate-700" onClick={()=>handleRemove(product.id)}>
            Remove
        </button>
        </div>
        </>)
      }

      
      </div>

      <h1 className="text-xl text-center font-special font-semibold">
        Total Amount is: <span className="text-red-600">${totalAmount.toFixed(2)}</span>
      </h1>
      <h1 className="text-xl text-center font-special font-semibold mb-8">
        Thank You Shopping From Tulos!
      </h1>
    </div>
  )
}
