import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartCardItem from "../components/CartCardItem";
import { useState} from "react";
import { NavLink } from "react-router";


function Cart({setCurrentpage}){

    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(null);
    console.log(cart);

    useEffect(() => {
        let cost =0;
        cart.forEach((item) => {
            cost+=item.price;
        })

        setTotalAmount(cost);
    },[cart])

    return(
        // <div className="flex justify-center items-center text-[#03081F] font-extrabold text-3xl h-full">
        //     Your Cart
        // </div>
        <div className='max-w-6xl p-2 mx-auto min-h-[80vh] mt-8 mb-10'>
      {
        cart.length > 0 ?
        (
          <div className='flex gap-x-[200px] max-w-[1200px]'>

            <div className='flex flex-col gap-y-5 w-[60%] p-2'>
              {
                cart.map((item, index) => (
                  <CartCardItem key={item.id} item={item} itemIndex={index} />
                ))
              }
            </div>

            <div className='w-[40%] flex flex-col justify-between p-2 mt-10 '>

                <div className='flex flex-col'>
                  <p className='text-green-600 uppercase font-semibold text-xl'>Your Cart</p>
                  <p className='text-green-700 uppercase font-extrabold text-5xl'>Summary</p>
                  <p className='mt-6'>
                    <span className='text-gray-700 font-semibold text-xl'>Total Item: {cart.length}</span>
                  </p>
                </div>

                <div className='flex flex-col w-full mb-3'>
                  <p className='text-gray-700 text-xl font-semibold'>Total Amount:<span className='text-xl font-bold pl-2'>${totalAmount}</span> </p>
                  <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl'>
                    Checkout Now
                  </button>
                </div>
            </div>

        </div>
        ) 
        :
        (
          <div className='flex flex-col items-center mt-[230px]'>
            <h1 className='text-gray-700 font-semibold text-xl mb-2'>Your Cart is Empty !</h1>
            <NavLink to='/menu'>
              <button 
                onClick={ () => {
                    setCurrentpage('menu');
                }}
               className='bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider'>
                Shop Now
              </button>
            </NavLink>
          </div>
        )
      }
        </div>
    )
}

export default Cart;