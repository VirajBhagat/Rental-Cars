import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { AddItem } from "../redux/cartSlice";

function Car({ name, image, id, price_per_day, type }) {
  let items = useSelector((state) => state.cart);
  
  let dispatch = useDispatch();

  const addItemInCart = () => {
    if(items.length < 1){
      dispatch(
        AddItem({
          id: id,
          name: name,
          price_per_day: price_per_day,
          img: image,
          qty: 1,
          days: 1,
          persons: 1,
        }),
      );
      toast.success("Item added in cart.");
    }else{
      toast.error("Only one car rent allowed at time.");
    }
  };

  return (
    <div className="w-[330px] bg-white p-4 rounded-lg flex flex-col gap-3 hover:border-2 border-orange-300">
      <div className="w-full aspect-[3/2] overflow-hidden rounded-lg shadow-lg">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col gap-2 flex-grow">
        <div className="text-xl font-semibold">{name}</div>

        <div className="w-full flex justify-between items-center flex-wrap gap-2">
          <div className="text-base sm:text-lg font-bold text-orange-500">
            Rs. {price_per_day}{" "}
            <span className="text-sm text-slate-500">{"(Per Day)"}</span>
          </div>
          <div className="flex justify-center items-center gap-2 text-sm sm:text-lg font-semibold text-orange-500">
            <FaLocationDot />
            <span className="text-blue-300">
              {type === "veg" ? "Mumbai" : "Banglore"}
            </span>
          </div>
        </div>

        <button
          className="w-full p-3 bg-gradient-to-br from-[#dc6911] to-[#eeb737] text-white hover:opacity-80 transition rounded-lg cursor-pointer font-bold"
          onClick={() => {
            addItemInCart()
          }}
        >
          Rent Car
        </button>
      </div>
    </div>
  );
}

export default Car;
