import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Features = () => {
  const [dropDown, setDropDown] = useState(false);

  const PremiumFeatures = [
    {
      name: "Infotainment System",
      checked: false,
      icon: "https://media.cars24.com/india/buy/facets_v4/icons/v2/monitor.svg",
      count: 14,
    },
    {
      name: "Rear AC",
      checked: false,
      icon: "	https://media.cars24.com/india/buy/facets_v4/icons/v2/rear_ac.svg",
      count: 14,
    },
    {
      name: "Sunroof",
      checked: false,
      icon: "https://media.cars24.com/india/buy/facets_v4/icons/v2/solar.svg",
      count: 14,
    },
    {
      name: "Leather Upholstery",
      checked: false,
      icon: "https://media.cars24.com/india/buy/facets_v4/icons/v2/leatherSeats.svg",
      count: 14,
    },
    {
      name: "Alloy Wheels",
      checked: false,
      icon: "	https://media.cars24.com/india/buy/facets_v4/icons/v2/new_tyres.svg",
      count: 14,
    },
    {
      name: "Bluetooth",
      checked: false,
      icon: "https://media.cars24.com/india/buy/facets_v4/icons/v2/bluetooth.svg",
      count: 14,
    },
  ];
  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer py-6"
        onClick={() => setDropDown((prev) => !prev)}
      >
        <p className="text-lg font-semibold">Features</p>
        <ChevronDown
          className={`bg-gray-100 rounded-full p-1 transition-transform duration-300 ${
            dropDown ? "rotate-180" : ""
          }`}
        />
      </div>
      {dropDown ? (
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400">Premium Features</p>
          <div className="flex flex-col gap-4 ">
            {PremiumFeatures.map((item, idx) => (
              <div className="flex justify-between bg-gray-50 rounded-lg p-2 items-center">
                <div className="flex  gap-3 items-center">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    className="size-5 "
                  />
                  <img className="size-6" src={item.icon} alt="" />
                  <p className="text-[#4E5765] font-semibold text-sm">
                    {item.name}
                  </p>
                </div>
                <p className="text-sm text-gray-400">({item.count})</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="border border-b border-gray-200"></div>
      )}
    </div>
  );
};

export default Features;
