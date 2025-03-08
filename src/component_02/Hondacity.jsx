import React from "react";

import Car_overview from "./Car_overview";
import Carousel from "./Carousel";
import Great_things from "./Great_things";
import Car_inspection from "./Car_inspection";
import Book_free from "./Book_free";
import Navbar from "../component_01/Navbar";

const Hondacity = () => {
  return (
    <>
      <div>
        <Navbar/>
        <div className="w-full lg:py-20  bg-[#F5F5F5] lg:px-0 px-4 h-full flex lg:flex-row flex-col justify-center gap-10">
          <div className="flex flex-col gap-10  ">
            <Carousel />
            <Great_things />
            <Car_overview />
            <Car_inspection />
          </div>
          <div className="">
            <Book_free />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hondacity;
