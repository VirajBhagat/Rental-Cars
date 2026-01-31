import React, { useContext } from "react";
import Car from "./Car";
import { dataContext } from "../context/UserContext";

const AllCars = () => {
  let { category, setCategory, input, showCart, setShowCart } = useContext(dataContext);

  return (
    <div className="w-full flex flex-wrap justify-evenly items-center gap-10 pt-8 pb-8">
      {category.length > 0 ? (
        category.map((item, idx) => (
          <Car
            key={`Car-car-${idx}`}
            name={item.car_name}
            image={item.car_image}
            price={item.price}
            id={item.id}
            type={item.car_type}
          />
        ))
      ) : (
        <div className="mt-5">
          <span className="text-4xl fw-semibold text-green-400">
            No search found...
          </span>
        </div>
      )}
    </div>
  );
};

export default AllCars;
