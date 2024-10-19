import React from "react";
import { assets } from "../assets/assets";

const Upload = () => {
  return (
    <div className="pb-16">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-950 to-gray-400 bg-clip-text text-transparent py-6 md:py-16">
        See the magic. Try now
      </h1>

      <div className="text-center mb-24 ">
        <input type="file" name="" id="upload2" hidden />
        <label
          className="inline-flex gap-3 rounded-full px-8 py-3.5 cursor-pointer bg-gradient-to-r from-violet-700 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
          htmlFor="upload2"
        >
          <img className="w-[20px]" src={assets.upload_btn_icon} alt="" />
          <p className="text-white text-base">Upload your image</p>
        </label>
      </div>
    </div>
  );
};

export default Upload;
