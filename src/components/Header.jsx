import React, { useState, useEffect, useRef } from "react";
import ProfileMenu from "./ProfileMenu";
import MobileSidebar from "./Sidebar/MobileSidebar";
import { HiBars3 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";


const Header = ({ toggleSidebar }) => {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsMobileSidebarOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMobileSidebar = () => {
        setIsMobileSidebarOpen(!isMobileSidebarOpen);
    };


    return (
        <div>
            <header className="bg-black text-white h-[60px] px-4 flex items-center justify-between gap-4 z-50 fixed left-0 top-0 w-full">
                <div className="flex flex-1">
                    <div className="flex items-center gap-5 min-w-[220px]">
                        <button onClick={toggleSidebar} className="text-white text-3xl hidden lg:flex">
                            <HiBars3 />
                        </button>
                        <button
                            className="text-white text-3xl block lg:hidden"
                            onClick={toggleMobileSidebar}
                        >
                            <HiBars3 />
                        </button>
                        <h1 className="text-xl font-normal hidden lg:flex">Neobox</h1>
                    </div>

                    <div className="w-full bg-[#181818] rounded-[5px] h-[38px] max-w-[420px] relative hidden lg:flex">
                        <div className="absolute left-0 w-[46px] h-full hidden lg:flex items-center justify-center">
                            <FaSearch className="text-[#4d4d4d]" />
                        </div>

                        <input type="text" placeholder="Search" className="w-full text-[#ebebeb] placeholder:text-[#4d4d4d] h-full py-2 pr-3 pl-[46px] bg-transparent" />
                    </div>
                </div>

                <ProfileMenu />
            </header>
            <div ref={sidebarRef} className="lg:hidden block">
                {isMobileSidebarOpen && <MobileSidebar />}
            </div>
        </div>
    );
};

export default Header;
