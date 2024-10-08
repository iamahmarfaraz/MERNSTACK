import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import "./Cart.css"




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="flex items-start justify-center max-w-6xl mx-auto p-8 ">
  {
    cart.length > 0  ? 
    (<div className="flex flex-row w-full">


      <div className="flex-1 lg:max-h-screen overflow-y-auto no-scrollbar pr-4">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="min-h-[400px]">

        <div className="">
          <div className="font-semibold uppercase text-sm text-green-700">Your Cart</div>
          <div className="text-4xl uppercase -mt-1 text-green-700 font-bold">Summary</div>
          <p className="text-lg mt-3 text-[16px]">
            <span className="fomt-semibold text-gray-700">Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <div className="text-lg text-gray-700 font-semibold">
            <p className="mb-1">Total Amount: <strong className="text-black">
            ${totalAmount.toFixed(2)}</strong></p>
          </div>
          <button className="mt-4 bg-green-600 text-white py-2 px-4 w-full rounded hover:bg-green-700
          transition duration-300">
            Checkout Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-gray-500 font-bold">Cart Empty</h1>
        <Link to={"/"}>
          <button className="border border-gray-300 py-2 px-6 text-[14px] rounded-md text-white 
          font-semibold mt-4 bg-green-600">
            Shop Now
          </button>
        </Link>
      </div>
    </div>)
  }
    </div>
  );
};

export default Cart;
