import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaEyeSlash, FaEye } from "react-icons/fa";

const EditProfile = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        setTimeout(onClose, 300);
    };

    const handleClickOutside = (e) => {
        if (e.target.id === 'modal-overlay') {
            handleClose();
        }
    };

    return (
        <div
            id="modal-overlay"
            className="fixed top-0 bottom-0 w-full h-full bg-[#000000b3] z-50 left-0 right-0 p-4 transition-opacity duration-150 overflow-y-auto overflow-x-hidden"
            style={{ opacity: isOpen ? 1 : 0 }}
            onClick={handleClickOutside}
        >
            <div className="mt-4 replace-card">
                <div
                    className={`bg-white max-w-[798px] rounded-[9px] w-full m-auto transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : '-translate-y-full'
                        }`}
                >
                    {/* Modal Header */}
                    <header className="border-b border-[#dae0ec] p-4 flex items-center justify-between">
                        <h1 className="text-lg capitalize font-semibold">Edit Profile</h1>
                        <button
                            onClick={handleClose}
                            type="button"
                            aria-label="Close"
                            className="text-lg text-[#869ac0]"
                        >
                            <IoMdClose />
                        </button>
                    </header>

                    {/* Body */}
                    <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
                            <div>
                                <label htmlFor="first_name" className="font-medium pb-2 block text-sm text-black">
                                    Enter First Name
                                </label>
                                <input
                                    type="text"
                                    value="Suneel"
                                    placeholder="Enter First Name"
                                    className="border border-[#d2cfcf] h-[38px] py-[6px] px-3 rounded-md text-sm text-[#3c4e71] w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="last_name" className="font-medium pb-2 block text-sm text-black">
                                    Enter Last Name
                                </label>
                                <input
                                    type="text"
                                    value="kumar"
                                    placeholder="Enter Last Name"
                                    className="border border-[#d2cfcf] h-[38px] py-[6px] px-3 rounded-md text-sm text-[#3c4e71] w-full"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
                            <div>
                                <label htmlFor="new_password" className="font-medium pb-2 block text-sm text-black">
                                    Enter Confirm New Password
                                </label>
                                <div className="flex">
                                    <input
                                        type={showNewPassword ? 'text' : 'password'}
                                        placeholder="Enter Confirm New Password"
                                        className="border border-[#d2cfcf] h-[38px] py-[6px] px-3 rounded-l-md text-sm text-[#3c4e71] w-full"
                                    />
                                    <button
                                        onClick={() => setShowNewPassword((prev) => !prev)}
                                        className="bg-[#dae0ec] border text-[#3c4e71] border-[#c9d2e3] rounded-r-md h-[38px] w-11 flex items-center justify-center"
                                    >
                                        {showNewPassword ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="confirm_password" className="font-medium pb-2 block text-sm text-black">
                                    Confirm Password
                                </label>
                                <div className="flex">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder="Confirm Password"
                                        className="border border-[#d2cfcf] h-[38px] py-[6px] px-3 rounded-l-md text-sm text-[#3c4e71] w-full"
                                    />
                                    <button
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                        className="bg-[#dae0ec] border text-[#3c4e71] border-[#c9d2e3] rounded-r-md h-[38px] w-11 flex items-center justify-center"
                                    >
                                        {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
                            <div>
                                <label htmlFor="email" className="font-medium pb-2 block text-sm text-black">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="inputEmail"
                                    disabled
                                    value="suneeldeveloper11@gmail.com"
                                    className="border border-[#d2cfcf] bg-[#dae0ec] h-[38px] py-[6px] px-3 rounded-md text-sm text-[#3c4e71] w-full"
                                />
                            </div>

                        </div>


                        <div className="flex justify-end gap-2 pt-4">
                            <button className="bg-[#0671e3] h-9 min-w-[115px] border border-[#0671e3] text-white py-1 px-3 text-sm rounded-md">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
