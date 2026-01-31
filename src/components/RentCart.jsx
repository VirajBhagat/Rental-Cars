import { useContext, useState } from "react";
import { dataContext } from "../context/UserContext";
import { GiCancel } from "react-icons/gi";
import CartCard from "./CartCard";
import { useDispatch } from "react-redux";
import { RemoveAllOrder } from "../redux/cartSlice";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

const commonClass =
  "input input-lg border-0 border-b-2 focus:outline-none focus:placeholder:text-picto-primary placeholder:text-[15px] md:placeholder:text-lg focus:border-picto-primary border-[#E6E8EB] w-full rounded-none px-0";

const RentCart = ({ items }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let dispatch = useDispatch();
  let { category, setCategory, input, showCart, setShowCart } =
    useContext(dataContext);

  let subTotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  );
  let deliveryFee = 20;
  let taxes = Math.floor((subTotal * 0.5) / 100);
  let allTotal = Math.floor(subTotal + deliveryFee + taxes);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAIL_PUBLIC_ID,
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            number: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send message. Try again.");
        },
      );

    dispatch(RemoveAllOrder());
    toast.success("Order place successfully.");
  };

  return (
    <div
      className={`p-5 w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl ${
        showCart ? "translate-x-0" : "translate-x-full"
      } transition-all duration-300 flex flex-col items-center overflow-auto`}
    >
      <header className="w-[100%] flex justify-between items-center">
        <span className="text-orange-400 text-[18px] font-semibold">
          Rent Car
        </span>
        <GiCancel
          className="w-[25px] h-[25px] text-orange-400 text-[18px] font-semibold cursor-pointer hover:text-orange-700"
          onClick={() => setShowCart(false)}
        />
      </header>

      {items.length > 0 ? (
        <>
          <div className="w-full mt-8 flex flex-col gap-5">
            {items.map((item, idx) => (
              <CartCard
                key={`cartcard_${idx}`}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                qty={item.qty}
              />
            ))}
          </div>

          {/* Cart Price Section */}
          <div className="w-full mt-7 border-t-2 border-b-2 border-gray-400 flex flex-col gap-3 p-4">
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold text-lg text-gray-600">
                Subtotal
              </span>
              <span className="font-semibold text-md text-orange-400">
                Rs. {subTotal}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold text-lg text-gray-600">
                Delivery Fee
              </span>
              <span className="font-semibold text-md text-orange-400">
                Rs. {deliveryFee}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold text-lg text-gray-600">Taxes</span>
              <span className="font-semibold text-md text-orange-400">
                Rs. {taxes}/-
              </span>
            </div>
          </div>

          {/* Grand Total */}
          <div className="w-full flex justify-between items-center p-4">
            <span className="font-semibold text-lg text-gray-600">Total</span>
            <span className="font-semibold text-lg text-orange-400">
              Rs. {allTotal}/-
            </span>
          </div>

          <div className="w-full mt-4 p-3 shadow-lg flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between border border-slate-300 rounded-lg">
            <form onSubmit={sendEmail} className="w-full flex flex-col gap-7 mt-4">
              <input
                name="name"
                type="text"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                className={`${commonClass}`}
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className={`${commonClass}`}
                required
              />

              <input
                name="number"
                type="text"
                placeholder="Phone No.*"
                value={formData.number}
                onChange={handleChange}
                className={`${commonClass}`}
                required
              />

              <input
                name="date"
                type="date"
                placeholder="When do you want?*"
                value={formData.date}
                onChange={handleChange}
                className={`${commonClass}`}
                required
              />

              <textarea
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
                className={`${commonClass} h-28 resize-none`}
                required
              />

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="cursor-pointer w-[50%] p-3 bg-orange-400 text-white hover:bg-orange-500 transition rounded-lg cursor-pointer font-bold"
                >
                  Rent Car
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="mt-6 text-xl fw-semibold text-orange-400">
            No car added for rent
          </div>
        </>
      )}
    </div>
  );
};

export default RentCart;
