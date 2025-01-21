import React, { useState, useEffect } from 'react'
import { IoMdClose } from 'react-icons/io';
import { IoMdArrowDropdown } from "react-icons/io";

import LanguageLogo from "../../../assets/language-logo.svg"

import CouponType from './CouponType';
import DateRangePicker from './DateRangePicker';
import UsageLimit from './UsageLimit';
import PaymentModsSelector from './PaymentModsSelector';
import OrderTypeSelector from './OrderTypeSelector';

const AddCouponsModal = ({ onClose }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('French');

    const languages = ['French', 'English'];

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setDropdownOpen(false);
    };
    const [isOpen, setIsOpen] = useState(false);

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
            className="fixed top-0 bottom-0 w-full h-full bg-[#000000b3] z-50 left-0 right-0 transition-opacity duration-150 overflow-y-auto overflow-x-hidden"
            style={{ opacity: isOpen ? 1 : 0 }}
            onClick={handleClickOutside}
        >
            <div className='items-center flex m-2 replace-card'>
                <div className={`bg-white max-w-[1120px] rounded-[9px] w-full m-auto transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    {/* Modal Header */}
                    <header className="border-b border-[#dae0ec] p-4 flex items-center justify-between">
                        <h1 className="text-lg capitalize font-semibold">Add</h1>
                        <button
                            onClick={onClose}
                            type="button"
                            aria-label="Close"
                            className="text-lg text-[#869ac0]"
                        >
                            <IoMdClose />
                        </button>
                    </header>

                    {/* body  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 my-3 gap-5 md:gap-0'>
                        {/* Left Side  */}
                        <div className='md:border-r border-[#d3d3d3] px-4'>
                            <fieldset className='mb-4'>
                                <label htmlFor="enter-coupon-name" className='pb-2 block font-medium text-sm'>Enter Coupon Name*</label>
                                <input type="text" placeholder='Enter Coupon Name' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                            </fieldset>

                            <fieldset className='mb-4'>
                                <div className='flex items-center justify-between gap-1'>
                                    <label htmlFor="description" className='pb-2 block font-medium text-sm'>Description</label>

                                    <div className="mb-4 relative">
                                        {/* Button */}
                                        <button
                                            className="flex items-center gap-2 bg-[#c9d2e3] border border-[#c9d2e3] text-[#212837] whitespace-nowrap rounded-md py-[6px] px-3 text-sm"
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                        >
                                            <img src={LanguageLogo} alt="LanguageLogo" className="w-4 h-4" />
                                            {selectedLanguage}
                                            <IoMdArrowDropdown size={16} />
                                        </button>

                                        {/* Dropdown */}
                                        {dropdownOpen && (
                                            <ul className="shadow-1 py-2 text-[#212837] text-sm bg-white rounded-md absolute mt-1 w-full">
                                                {languages.map((language) => (
                                                    <li
                                                        key={language}
                                                        className="py-[6px] px-5 hover:bg-[#f0f2f6] hover:text-[#171c27] transition-all duration-300 cursor-pointer"
                                                        onClick={() => handleLanguageSelect(language)}
                                                    >
                                                        {language}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                <input type="text" placeholder='Enter Description' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                            </fieldset>

                            <fieldset className='mb-8'>
                                <label htmlFor="active" className='pb-2 block font-medium text-sm'>Active</label>
                            <select className="custom-select max-w-[207px] border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md">
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </fieldset>

                            <CouponType />

                            <div className='mb-3 flex justify-between gap-3 items-start'>
                                <div>
                                    <label className='pb-2 block font-medium text-sm'>Minimum Requirement</label>
                                    <p className='text-[#14151680] text-sm max-w-[270px]'>Enter minimum purchase amount for a coupon to work </p>
                                </div>

                                <div className="flex gap-4 md:items-center flex-col md:flex-row">
                                    <p className="text-sm">
                                        $
                                    </p>

                                    <input
                                        type="text"
                                        value={333}
                                        className="border-[.5px] border-[#d2cfcf] text-sm h-7 py-1 px-2 flex-1 w-full max-w-[120px] rounded-[3px]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side  */}
                        <div className='px-4'>
                            <PaymentModsSelector />

                            <OrderTypeSelector />

                            <DateRangePicker />

                            <UsageLimit />
                        </div>
                    </div>

                    {/* footer  */}
                    <div className='p-4 flex justify-end'>
                        <button className="bg-[#0671E3] text-white py-[6px] max-w-[115px] w-full px-3 rounded-md text-[15px] font-normal hover:bg-opacity-90 transition-all duration-200">
                            Save
                        </button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default AddCouponsModal