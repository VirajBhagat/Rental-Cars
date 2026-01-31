import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { RemoveItem, IncreaseQty, DecreaseQty } from '../redux/cartSlice';

function CartCard({ id, name, price, img, qty }) {
    const dispatch = useDispatch();

    return (
        <div className='w-full p-3 shadow-lg flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between border border-slate-300 rounded-lg'>
            <div className='w-full sm:w-[65%] flex gap-3'>
                <div className='w-[90px] sm:w-[120px] h-[90px] sm:h-[100px] overflow-hidden rounded-lg flex-shrink-0'>
                    <img src={img} alt='' className='w-full h-full object-cover' />
                </div>

                <div className='flex flex-col justify-between flex-1'>
                    <div className='text-base sm:text-lg text-gray-600 font-semibold line-clamp-2'>
                        {name}
                    </div>

                    <div className='w-[100px] h-[36px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold'>
                        <button
                            className='cursor-pointer w-[30%] h-full text-orange-400 bg-white flex justify-center items-center text-lg hover:bg-gray-200'
                            onClick={() => qty > 1 && dispatch(DecreaseQty(id))}
                        >
                            -
                        </button>
                        <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-sm'>
                            {qty}
                        </span>
                        <button
                            className='cursor-pointer w-[30%] h-full text-orange-400 bg-white flex justify-center items-center text-lg hover:bg-gray-200'
                            onClick={() => dispatch(IncreaseQty(id))}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-end gap-4'>
                <span className='text-lg sm:text-xl text-orange-400 font-semibold'>
                    Rs. {price} <span className='text-xs sm:text-sm text-slate-500'>(Per Day)</span>
                </span>

                <MdOutlineDelete
                    className='w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] text-red-400 cursor-pointer'
                    onClick={() => dispatch(RemoveItem(id))}
                />
            </div>
        </div>
    );
}

export default CartCard;
