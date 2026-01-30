import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import { Car, CarFront, BadgeCheck, Handshake, SwatchBook, Cable } from 'lucide-react'
import logo from "./logo.png";

export const assets = {
    logo,
    star_icon,
    star_dull_icon,
    arrow_icon,
};

export const CarsData = [
  {
    title: "Buy Cars",
    description:
      "Browse a wide range of verified cars available for purchase with transparent pricing and complete details.",
    Icon: Car,
    bg: { from: "#F76C1C", to: "#F04A3C" },
    path: "/cars/buy",
  },
  {
    title: "Rent Cars",
    description:
      "Rent cars at affordable prices with flexible plans and hassle-free booking options.",
    Icon: CarFront,
    bg: { from: "#F76C1C", to: "#F04A3C" },
    path: "/cars/rent",
  },
  {
    title: "Verified Vehicles",
    description:
      "All cars are thoroughly verified and inspected to ensure safety, quality, and reliability.",
    Icon: BadgeCheck,
    bg: { from: "#F76C1C", to: "#F04A3C" },
    path: "/cars/verified",
  },
  {
    title: "Best Deals",
    description:
      "Discover the best deals and offers on car buying and rentals with no hidden charges.",
    Icon: Handshake,
    bg: { from: "#F76C1C", to: "#F04A3C" },
    path: "/cars/deals",
  },
  {
    title: "Easy Booking",
    description:
      "Book your desired car in just a few clicks with a smooth and secure booking process.",
    Icon: SwatchBook,
    bg: { from: "#F76C1C", to: "#F04A3C" },
    path: "/cars/booking",
  },
  {
    title: "Customer Support",
    description:
      "Get dedicated support throughout your car buying or renting journey whenever you need help.",
    Icon: Cable,
    bg: { from: "#F76C1C", to: "#F04A3C" },
    path: "/support",
  },
];