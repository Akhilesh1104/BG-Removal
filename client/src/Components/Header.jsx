import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/*-----------------Left Side-----------------*/}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br className="max-md:hidden" />{" "}
          <span className="bg-gradient-to-r from-violet-700 to-fuchsia-500 bg-clip-text text-transparent">
            background
          </span>{" "}
          from <br className="max-md:hidden" /> images for free.
        </h1>
        <p className="my-6 text-[16px] text-gray-800">
          Thanks to remove.bg's clever AI, you can slash editing time - and have
          more fun! <br className="max-sm:hidden" />
          You can do all this and more with remove.bg, the AI background remover
          for professionals.
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label
            className="inline-flex gap-3 rounded-full px-8 py-3.5 cursor-pointer bg-gradient-to-r from-violet-700 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
            htmlFor="upload1"
          >
            <img className="w-[20px]" src={assets.upload_btn_icon} alt="" />
            <p className="text-white text-base">Upload your image</p>
          </label>
        </div>
      </div>

      {/*-----------------Right Side-----------------*/}
      <div>
        <img className="w-full max-w-md" src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
