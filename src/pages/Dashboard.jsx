import React, { useContext, useEffect, useState } from "react";
import { Gem, Sparkles } from "lucide-react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import AllCars from "./AllCars";
import { dataContext } from "../context/UserContext";
import { useSelector } from "react-redux";
import RentCart from "../components/RentCart";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Dashboard = () => {
  let items = useSelector((state) => state.cart);
  
  let { category, setCategory, input, showCart, setShowCart } = useContext(dataContext);
  const [creations, setCreations] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getToken } = useAuth();

  return (
    <div className="h-full overflow-y-scroll p-6 bg-slate-200">
      <div className="w-full flex flex-wrap justify-start items-center">
        <div
          className="flex justify-between items-center w-72 p-4 px-6 rounded-xl bg-white
           border border-white/40 ring-1 ring-gray-200/60
           shadow-2xl"
        >
          <div className="text-slate-600">
            <p className="text-sm">Total Cars Available</p>
            <h2 className="text-xl font-semibold">{creations.length}</h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#dc6911] to-[#eeb737] text-white flex justify-center items-center">
            <Sparkles className="w-5 text-white" />
          </div>
        </div>
      </div>

      <AllCars />
      <RentCart items={items} />
    </div>
  );
};

export default Dashboard;
