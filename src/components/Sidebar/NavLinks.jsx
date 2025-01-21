import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ to, icon, activeIcon, label, isExpanded }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `flex items-center font-normal p-[10px] text-[14px] leading-[24px] ${isActive ? "bg-[#232222cc] text-white" : "bg-transparent hover:bg-[#232222cc] hover:text-white transition-colors duration-300 text-[#b4b4b4]"
            } rounded-md ${isExpanded ? "mx-0" : "mx-[6px]"}`
        }
    >
        {({ isActive }) => (
            <>
                <img
                    src={isActive ? activeIcon : icon}
                    alt={`${label} Icon`}
                    className="w-[1.25rem] h-[1.25rem]"
                />
                <span
                    className={`ml-[.625rem] font-normal text-sm ${!isExpanded && "hidden"
                        }`}
                >
                    {label}
                </span>
            </>
        )}
    </NavLink>
);

export default NavLinks;
