import React, { useState } from "react"
import NavLinks from "./NavLinks";

import OrderIcon from "../../assets/nav-icons/orders.svg"
import OrderActiveIcon from "../../assets/nav-icons/orders-a.svg"
import DashboardIcon from "../../assets/nav-icons/dashbaord.svg"
import DashboardActiveIcon from "../../assets/nav-icons/dashboard-a.svg"
import CustomerIcon from "../../assets/nav-icons/customer.svg"
import CustomerActiveIcon from "../../assets/nav-icons/customer-a.svg"
import MerchantsIcon from "../../assets/nav-icons/merchants.svg"
import MerchantsActiveIcon from "../../assets/nav-icons/merchants-a.svg"
import CouponsIcon from "../../assets/nav-icons/coupons.svg"
import AnalyticsIcon from "../../assets/nav-icons/analytics.svg"
import BusinessAnalyticsIcon from "../../assets/nav-icons/business-analytics.svg"
import BusinessAnalyticsActiveIcon from "../../assets/nav-icons/business-analytics-a.svg"
import ReviewsIcon from "../../assets/nav-icons/review.svg"
import ReviewsActiveIcon from "../../assets/nav-icons/reviews-a.svg"
import ReportsIcon from "../../assets/nav-icons/reports.svg"
import ReportsActiveIcon from "../../assets/nav-icons/reports-a.svg"
import SettingsIcon from "../../assets/nav-icons/settings.svg"
import SettingsActiveIcon from "../../assets/nav-icons/settings-a.svg"
import PromotionActiveIcon from "../../assets/nav-icons/promotion-a.svg"
import UserGuideIcon from "../../assets/nav-icons/user-quide.svg"
import StoreIcon from "../../assets/nav-icons/store.svg"
import { FaCaretDown } from "react-icons/fa";


const MobileSidebar = ({ isExpanded, setIsExpanded }) => {
    const [isAnalyticsDropdownOpen, setAnalyticsDropdownOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsExpanded((prev) => !prev);
    };

    const toggleAnalyticsDropdown = () => {
        if (!isExpanded) {
            handleSidebarToggle();
        } else {
            setAnalyticsDropdownOpen((prev) => !prev);
        }
    };


    return (
        <div>
            <div
                className={`h-full flex sidebar-behind top-0 left-0 ${isExpanded ? "lg:w-[240px] w-[65px]" : "min-w-[65px]"
                    }`}
            ></div>
            <aside
                className={`fixed top-0 left-0 bg-black pt-16 h-screen transition-all duration-200 overflow-hidden overflow-y-auto ${isExpanded
                    ? "lg:w-[240px] w-[220px]"
                    : "w-[65px]"
                    } flex flex-col justify-between z-[30]`}
            >
                <div>
                    <nav className="mt-[16px] px-[6px]">
                        <ul>

                            {/* Dashboard NavLInk  */}
                            <li>
                                <NavLinks
                                    to="/"
                                    icon={DashboardIcon}
                                    activeIcon={DashboardActiveIcon}
                                    label="Dashboard"
                                    isExpanded={isExpanded}
                                />
                            </li>

                            {/* Orders NavLInk  */}
                            <li>
                                <NavLinks
                                    to="/orders"
                                    icon={OrderIcon}
                                    activeIcon={OrderActiveIcon}
                                    label="Orders"
                                    isExpanded={isExpanded}
                                />
                            </li>

                            {/* Merchants NavLInk  */}
                            <li>
                                <NavLinks
                                    to="/merchants"
                                    icon={MerchantsIcon}
                                    activeIcon={MerchantsActiveIcon}
                                    label="Merchants"
                                    isExpanded={isExpanded}
                                />
                            </li>

                            {/* Customers NavLInk  */}
                            <li>
                                <NavLinks
                                    to="/customers"
                                    icon={CustomerIcon}
                                    activeIcon={CustomerActiveIcon}
                                    label="Customers"
                                    isExpanded={isExpanded}
                                />
                            </li>

                            {/* Promotions NavLInk  */}
                            <li>
                                <NavLinks
                                    to="/coupons"
                                    icon={CouponsIcon}
                                    activeIcon={PromotionActiveIcon}
                                    label="Promotions"
                                    isExpanded={isExpanded}
                                />
                            </li>

                            {/* Business Analytics Dropdown */}
                            <li>
                                <div
                                    onClick={toggleAnalyticsDropdown}
                                    className={`flex items-center font-normal p-[10px] cursor-pointer text-[14px] leading-[24px] hover:bg-[#232222cc] hover:text-white transition-colors duration-300 text-[#b4b4b4] rounded-md ${isExpanded ? "mx-0" : "mx-[6px]"}`}
                                >
                                    <img
                                        src={AnalyticsIcon}
                                        alt="Business Analytics Icon"
                                        className="w-[1.25rem] h-[1.25rem]"
                                    />
                                    <span
                                        className={`ml-[.625rem] font-normal text-sm flex-1 ${!isExpanded && "hidden"
                                            }`}
                                    >
                                        Analytics
                                    </span>

                                    <span className={`font-normal text-sm text-[#b4b4b4] ${!isExpanded && "hidden"}`}>
                                        <FaCaretDown />
                                    </span>
                                </div>

                                <ul
                                    className={`pl-4 mt-1 space-y-1 overflow-hidden transition-[max-height] duration-300 ${isExpanded ? (isAnalyticsDropdownOpen ? "max-h-[500px]" : "max-h-0") : "hidden"}`}
                                >

                                    {/* Business Analytics Navlink */}
                                    <li>
                                        <NavLinks
                                            to="/analytics/business-analytics"
                                            icon={BusinessAnalyticsIcon}
                                            activeIcon={BusinessAnalyticsActiveIcon}
                                            label="Business Analytics"
                                            isExpanded={isExpanded}
                                        />
                                    </li>

                                    {/* Review NavLink  */}
                                    <li>
                                        <NavLinks
                                            to="/analytics/reviews"
                                            icon={ReviewsIcon}
                                            activeIcon={ReviewsActiveIcon}
                                            label="Reviews"
                                            isExpanded={isExpanded}
                                        />
                                    </li>

                                    {/* Reports NavLink  */}
                                    <li>
                                        <NavLinks
                                            to="/analytics/reports"
                                            icon={ReportsIcon}
                                            activeIcon={ReportsActiveIcon}
                                            label="Reports"
                                            isExpanded={isExpanded}
                                        />
                                    </li>
                                </ul>
                            </li>



                            {/* Settings NavLInk  */}
                            <li>
                                <NavLinks
                                    to="/settings"
                                    icon={SettingsIcon}
                                    activeIcon={SettingsActiveIcon}
                                    label="Settings"
                                    isExpanded={isExpanded}
                                />
                            </li>

                        </ul>
                    </nav>
                </div>


                <div className="bg-black p-[6px] w-full mt-1">
                    <button className="flex items-center font-[500] p-[10px] text-[14px] leading-[24px] gap-[10px] rounded-md text-[#b4b4b4] hover:bg-[#232222cc] hover:text-white transition-colors duration-300 w-full">
                        <img src={UserGuideIcon} alt="User Guide Icon" className="h-6" />
                        <span className={`font-normal text-sm ${!isExpanded && "hidden"
                            }`}>User Guide</span>
                    </button>

                    <button className="flex items-center font-[500] p-[10px] text-[14px] leading-[24px] gap-[10px] rounded-md text-[#b4b4b4] hover:bg-[#232222cc] hover:text-white transition-colors duration-300 w-full">
                        <img src={StoreIcon} alt="Store icon" className="h-6" />
                        <span className={`font-normal text-sm ${!isExpanded && "hidden"
                            }`}>Visit My Store</span>
                    </button>
                </div>
            </aside>
        </div>
    );
};

export default MobileSidebar;
