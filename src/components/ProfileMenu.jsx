import React, { useState } from "react";
import { FaUser, FaUserCircle, FaInfoCircle } from "react-icons/fa";
import EditProfile from "./EditProfile";

const ProfileMenu = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isOpenEditProfileModal, setIsOpenEditProfileModal] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleOpenEditProfileModal = () => {
        setIsOpenEditProfileModal(true)
        setIsDropdownOpen(false);
    }

    const handleCloseEditProfileModal = () => {
        setIsOpenEditProfileModal(false)
    }

    return (
        <div>
            {/* Menu */}
            <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={toggleDropdown}
            >
                <div className="w-9 h-9 rounded-full relative bg-[#3c4e71]">
                    <div className="flex items-center pt-3 justify-center w-full h-full overflow-hidden rounded-full">
                        <FaUser className="text-[#c9d2e3] w-full h-full" />
                    </div>
                    <span className="absolute w-2 h-2 bg-[#1abd36] rounded-full right-[2px] bottom-[2px]"></span>
                </div>

                <span className="text-white ml-1 font-normal text-sm hidden lg:flex">
                    Suneel Kumar
                </span>
            </div>

            {/* Dropdown */}
            {isDropdownOpen && (
                <div className="shadow-1 bg-white min-w-40 py-2 absolute top-[60px] right-1 rounded-md z-50">
                    <button onClick={handleOpenEditProfileModal} className="flex items-center justify-between py-[6px] px-5 hover:bg-[#f0f2f6] transition-all duration-300 text-[#171c27] text-sm w-full">
                        <span>Edit Profile</span>
                        <FaUserCircle className="text-[#a8b6d1]" />
                    </button>

                    <div className="w-full bg-[#dae0ec] h-[1px] my-2"></div>

                    <button className="flex items-center justify-between py-[6px] px-5 hover:bg-[#f0f2f6] transition-all duration-300 text-[#171c27] text-sm w-full">
                        <span>Logout</span>
                        <FaInfoCircle className="text-[#a8b6d1]" />
                    </button>
                </div>
            )}


            {isOpenEditProfileModal && <EditProfile onClose={handleCloseEditProfileModal} />}
        </div>
    );
};

export default ProfileMenu;
