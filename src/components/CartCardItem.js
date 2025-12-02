import { useDispatch } from "react-redux";
import {remove} from "../redux/slices/CartSlice";
import {MdDelete} from 'react-icons/md';
import toast from 'react-hot-toast'


const CartCardItem = ({item,itemIndex}) => {

    console.log(item);
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Cancle Order");
    }

    return (
        
        <div className='w-[100%] border-b-2 p-4 pb-6 border-slate-700'>
            <div className='flex gap-x-10 w-full'>
                
                <div className='w-[60%]'>
                    <img src={item.img} className='w-full'/>
                </div>
                <div className='w-[60%] flex flex-col justify-between'>
                    <div className='flex flex-col gap-5'>
                    <h1 className='text-xl underline text-slate-700 font-semibold'>{item.title}</h1>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-[#03081F] pt-2 font-bold text-lg'>₹{item.price}</p>
                        <div onClick={removeFromCart} className="flex justify-center gap-x-2 bg-red-200 group hover:bg-red-400  transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
                                <span class="text-red-700 font-semibold group-hover:text-white">Cancle Order</span>
                                <MdDelete className='text-red-700  relative top-1 group-hover:text-white '/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 


export default CartCardItem;