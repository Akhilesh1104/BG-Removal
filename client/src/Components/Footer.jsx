import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
      <img className="w-[150px]" src={assets.logo} alt="" />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-700 max-sm:hidden">
        Copyright @BG Removal.dev | All right reserved.
      </p>

      <div className="flex gap-1">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.google_plus_icon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
