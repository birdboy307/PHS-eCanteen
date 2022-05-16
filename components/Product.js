import Link from "next/link"
import Image from "next/image"

export default function Product(props) {
  return (
    <>
    <div class="bg-white rounded-lg shadow-lg m-10 w-96">
      <div className="">
        <img src={props.productimage} alt="" className="rounded-t-lg translate-x-8 object-scale-down h-64 w-80"/>
      </div>
        <div className="p-6">
          <h2 className="font-bold mb-2 text-2xl text-blue-800">{props.productname}</h2>
          <p className="text-blue-700 mb-2">${props.productprice}</p>
          <a href="#" className="text-blue-600 hover:text-blue-500 underline text-sm">Add To Cart</a>
        </div>
      </div>
    </>
  )
}
