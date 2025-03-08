import React from "react";
import Card_Cars from "./Card_Cars";
import Makemodel from "./Makemodel";
import { Link } from "react-router-dom";
import ModelYear from "./ModelYear";
import Fule from "./Fule";
import BodyType from "./BodyType";
import Transmission from "./Transmission";
import Features from "./Features";
import Owners from "./Owners";
import Color from "./Color";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="w-full lg:pl-12 h-full flex  lg:flex-row flex-col lg:justify-center  gap-6 py-10">
          <div className="lg:w-[270px] py-8  max-h-screen overflow-y-scroll shadow rounded-lg px-2   ">
            <Makemodel />
            <ModelYear />
            <Fule />
            <BodyType />
            <Color />
            <Transmission />
            <Features />
            <Owners />
          </div>
          <div className="lg:w-[1000px] ">
            <Link to="/detail">
              <Card_Cars />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
