import React from "react";

const SubTab = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="flex px-5 border-b-2 border-[#dae0ec] bg-white overflow-x-auto no-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabClick(tab)}
          className={`py-4 px-2 mr-7 border-b-[3px] text-left capitalize text-sm whitespace-nowrap ${activeTab === tab
            ? "border-[#0671e3] text-[#0e0e0e]"
            : "border-transparent text-[#838487] hover:text-[#0e0e0e] transition-all duration-300"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SubTab;
