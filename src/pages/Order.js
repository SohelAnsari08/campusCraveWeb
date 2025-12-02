import React from 'react'
import img from '../assets/menu/burgerImg/burger1.jpg'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {add, remove} from '../redux/slices/CartSlice'

const Order = ({data}) => {

  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const {cart} = useSelector((state) => state)
  const dispatch = useDispatch();

  function orderBtn(){
    dispatch(add(data));
    toast.success("Ordered Successfully")
    navigate(-1);
  }

  let total;
  if(count>0){
    total = count*data.price;
  }
  else{
    total = data.price;
  }
  
  return (
    <div className='w-full bg-slate-50 pt-5 pb-5'>
        <div className='flex flex-col gap-2 w-[450px] mx-auto p-2 shadow-2xl rounded-lg'>
        
            <div className='flex w-full gap-2'>
                <img src={data.img} className='w-[50%]'></img>
                <div className='flex flex-col gap-2'>
                    <p className='text-[25px] text-[#03081F] font-bold poppins '>
                        {data.name}
                        <span className='bg-green-500 rounded-md p-[2px] ml-2 text-white text-[14px]'>{data.rating}</span>
                    </p>
                    <p className='text-[15px] text-[#03081F] poppins opacity-70'>{data.incredients}</p>
                    <p className='text-[30px]'>{`₹${data.price}`}</p>
                </div>
            </div>

            <div className='flex justify-between text-[#03081F] text-[30px]'>
                <p>Total</p>
                <p>
                   {
                    `₹ ${total}`
                   }
                </p>
            </div>

            <div className="bg-slate-100  flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">

                <button className="border-r-2 text-center w-20 border-[#bfbfbf] text-3xl" onClick={() => setCount(count-1)}>-</button>

                <div className="forn-bold gap-12 text-3xl">
                    {
                        count>0 ? `${count}` : `${setCount(1)}`
                    }
                </div>

                <button className="border-l-2 text-center w-20 border-[#bfbfbf] text-3xl" onClick={() => setCount(count+1)}>+</button>

            </div>

            <button 
                onClick={() => orderBtn()}
                className="rounded-[8px] w-[90%] mx-auto text-center font-medium bg-[#ffd60a] px-6 py-[8px] mt-6 hover:scale-110 hover:shadow-lg transition-all duration-200">
                Order Now
            </button>

        </div>
    </div>
  )
}

export default Order
