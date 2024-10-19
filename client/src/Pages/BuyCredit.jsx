import React from "react";
import { assets, plans } from "../assets/assets";

const BuyCredit = () => {
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-500 px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-950 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10">
        Choose the plan that's right for you
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-md border rounded-lg py-12 px-8 text-gray-900 hover:scale-105 transition-all duration-500"
          >
            <img className="w-[40px]" src={assets.logo_icon} alt="" />
            <p className="mt-3 text-lg font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">${item.price} </span>/{" "}
              {item.credits} credits
            </p>
            <button className="w-full bg-gray-900 text-white mt-8 text-sm min-w-52 py-2.5 rounded-md">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
