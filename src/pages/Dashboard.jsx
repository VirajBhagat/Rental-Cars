import React, { useEffect, useState } from "react";
import { Gem, Sparkles } from "lucide-react";
import { Protect } from "@clerk/clerk-react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Dashboard = () => {
  const [creations, setCreations] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getToken } = useAuth();

  const getDashboardData = async () => {
    try {
      const { data } = await axios.get("/api/user/get-user-creations", {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });

      if (data.success) {
        setCreations(data.creations);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex justify-start gap-4 flex-wrap">
        <div
          className="flex justify-between items-center w-72 p-4 px-6 rounded-xl bg-white/30
           border border-white/40 ring-1 ring-gray-200/60
           shadow-2xl"
        >
          <div className="text-slate-600">
            <p className="text-sm">Total Cars Added</p>
            <h2 className="text-xl font-semibold">{creations.length}</h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#dc6911] to-[#eeb737] text-white flex justify-center items-center">
            <Sparkles className="w-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
