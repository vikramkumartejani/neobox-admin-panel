import React from "react";

const Tab = ({ tabs, activeTab, onTabClick }) => {
    return (
        <div className="flex bg-white rounded-[10px] overflow-hidden w-fit border border-[#c4c4c4]">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabClick(tab)}
                    className={`min-w-[150px] md:min-w-[180px] p-2 rounded-[10px] text-sm border border-transparent ${activeTab === tab
                        ? "bg-[#131516] text-white"
                        : "bg-transparent text-black"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tab;
