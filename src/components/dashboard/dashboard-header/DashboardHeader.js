import React, { useState } from "react";
import { settingsTabs } from "../../../constants/settings.constants";

function DashboardHeader({ title, subtitle }) {
  const [activeTab, setActiveTab] = useState(5);
  return (
    <section className="w-full md:fixed sticky top-0 bg-gray-50 pb-6 pt-8 z-40">
      <h1 className="text-gray-900 text-4xl">{title}</h1>
      <p className="text-gray-500 text-sm font-light mt-1">{subtitle}</p>

      <div class="flex overflow-x-auto">
        <div className="mt-6 rounded-lg flex">
          {settingsTabs.map((tab, i) => (
            <div
              key={i}
              onClick={(e) => setActiveTab(i)}
              className={`border px-4 py-2 text-[14px] text-gray-800 cursor-pointer whitespace-nowrap
                ${i === 0 ? "rounded-l-xl" : ""} 
                ${i === settingsTabs.length - 1 ? "rounded-r-xl" : ""}
                ${activeTab === i ? "bg-gray-50" : "bg-white"}
                `}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DashboardHeader;
