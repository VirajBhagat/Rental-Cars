import React, { useContext } from "react";
import { dataContext } from "../context/UserContext";

const RentedCars = () => {
  const { category } = useContext(dataContext);

  return (
    <div className="h-full w-full px-3 sm:px-4 pt-5 pb-8 bg-slate-200">
      {category.length > 0 ? (
        <>
          <div className="hidden md:block w-full overflow-x-auto border rounded-lg shadow-sm bg-white">
            <table className="w-full min-w-[700px] border-collapse">
              <thead className="bg-white border-b border-black">
                <tr className="text-gray-700">
                  <th className="px-4 py-5 text-left font-semibold w-[25%]">Car Name</th>
                  <th className="px-4 py-5 text-left font-semibold w-[20%]">Image</th>
                  <th className="px-4 py-5 text-left font-semibold w-[15%]">Type</th>
                  <th className="px-4 py-5 text-left font-semibold w-[15%]">Price</th>
                  <th className="px-4 py-5 text-center font-semibold w-[25%]">Action</th>
                </tr>
              </thead>
            </table>

            <div className="max-h-[80vh] overflow-y-auto bg-white">
              <table className="w-full min-w-[700px] border-collapse">
                <tbody className="divide-y">
                  {category.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition border-gray-400">
                      <td className="px-4 py-1 font-medium w-[25%]">{item.car_name}</td>

                      <td className="px-4 py-1 w-[20%]">
                        <img
                          src={item.car_image}
                          alt={item.car_name}
                          className="w-[110px] h-[65px] object-cover rounded-md"
                        />
                      </td>

                      <td className="px-4 py-1 w-[15%]">{item.car_type}</td>

                      <td className="px-4 py-1 w-[15%] font-semibold text-orange-500">
                        ₹ {item.price}
                      </td>

                      <td className="px-4 py-1 w-[25%] text-center">
                        <button className="cursor-pointer px-4 py-1.5 mx-1 bg-green-500 text-white rounded-md hover:bg-green-600">
                          Booked
                        </button>
                        <button className="cursor-pointer px-4 py-1.5 mx-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-4 md:hidden">
            {category.map((item, idx) => (
              <div
                key={`mobile-car-${idx}`}
                className="border rounded-lg p-4 shadow-sm bg-white flex flex-col gap-3"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg">{item.car_name}</h3>
                  <span className="font-semibold text-orange-500">
                    ₹ {item.price}
                  </span>
                </div>

                <img
                  src={item.car_image}
                  alt={item.car_name}
                  className="w-full h-[180px] object-cover rounded-md"
                />

                <div className="text-sm text-gray-600">
                  Type: <span className="font-medium">{item.car_type}</span>
                </div>

                <button className="mt-2 w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                  Book
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-10 text-center">
          <span className="text-2xl sm:text-3xl font-semibold text-green-400">
            No search found...
          </span>
        </div>
      )}
    </div>
  );
};

export default RentedCars;
