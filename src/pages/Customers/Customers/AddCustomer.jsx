import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Flag1 from "../../../assets/flag-1.svg"
import Flag2 from "../../../assets/flag-2.png"

const AddCustomer = ({ onClose }) => {
    const [selectedCountry, setSelectedCountry] = useState({ code: '+92', flag: Flag1 });
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const countries = [
        { name: 'Pakistan', code: '+92', flag: Flag1 },
        { name: 'Afghanistan', code: '+93', flag: Flag2 },
        { name: 'India', code: '+91', flag: Flag1 },
        { name: 'United States', code: '+1', flag: Flag2 },
        { name: 'United Kingdom', code: '+44', flag: Flag1 },
        { name: 'United States', code: '+1', flag: Flag2 },
    ];

    return (
        <div
            className="fixed top-0 bottom-0 w-full p-2 h-screen bg-[#000000b3] z-50 left-0 right-0 transition-opacity duration-100 flex justify-center items-center"
            style={{ opacity: 'unset' }}
        >
            <div className="bg-white max-w-[500px] rounded-[9px] w-full mx-auto transition-transform duration-300 ease-out">
                {/* Modal Header */}
                <header className="border-b border-[#dae0ec] p-4 flex items-center justify-between">
                    <h1 className="text-lg capitalize font-semibold">Add Customer</h1>
                    <button
                        onClick={onClose}
                        type="button"
                        aria-label="Close"
                        className="text-lg text-[#869ac0]"
                    >
                        <IoMdClose />
                    </button>
                </header>

                {/* Modal Body */}
                <div className="p-4">
                    <form className='px-2'>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">First Name*</label>
                            <input
                                type="text"
                                placeholder="Enter First Name"
                                className="border border-[#d2cfcf] text-[#3c4e71] rounded-md h-[38px] text-sm px-3 py-[6px] w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Last Name*</label>
                            <input
                                type="text"
                                placeholder="Enter Last Name"
                                className="border border-[#d2cfcf] text-[#3c4e71] rounded-md h-[38px] text-sm px-3 py-[6px] w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Email Address*</label>
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                className="border border-[#d2cfcf] text-[#3c4e71] rounded-md h-[38px] text-sm px-3 py-[6px] w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Mobile Number*</label>
                            <div className="relative">
                                <div className='flex border border-[#d2cfcf] rounded-md'>
                                    <button
                                        type="button"
                                        className="bg-[#0000001a] rounded-l-md p-[7px] flex items-center "
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        <img src={selectedCountry.flag} alt={selectedCountry.name} className="h-[14px] w-5 object-cover" />
                                        <span className="ml-2 transform scale-y-50 inline-block text-[#666]">
                                            ▼
                                        </span>
                                    </button>

                                    <input
                                        type="tel"
                                        placeholder="Enter Mobile Number"
                                        className="border-none bg-transparent text-sm outline-none rounded-r-md px-3 py-[6px] w-full h-full"
                                    />
                                </div>

                                {/* Dropdown */}
                                {isDropdownOpen && (
                                    <div className="absolute left-0 top-12 bg-white shadow-md border rounded z-10 w-full">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="border-b border-gray-200 px-3 py-2 w-full"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                        <ul className="overflow-y-auto max-h-40">
                                            {countries
                                                .filter(country =>
                                                    country.name.toLowerCase().includes(searchTerm.toLowerCase())
                                                )
                                                .map((country, index) => (
                                                    <li
                                                        key={index}
                                                        className="py-1 px-4 gap-1 flex items-center cursor-pointer hover:bg-[#f3f3f3] transition-all duration-300 text-sm"
                                                        onClick={() => {
                                                            setSelectedCountry(country);
                                                            setSearchTerm('');
                                                            setIsDropdownOpen(false);
                                                        }}
                                                    >
                                                        <img src={country.flag} alt={country.name} className="w-5 h-[14px]" />
                                                        {country.name} ({country.code})
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                        </div>
                    </form>
                </div>

                {/* Modal Footer */}
                <footer className="p-4 flex justify-end gap-2">
                    <button onClick={onClose} className='rounded py-[6px] px-3 text-sm min-w-[115px]'>Cancel</button>
                    <button className='bg-[#0671e3] text-white rounded text-sm py-[6px] px-3 min-w-[115px] hover:bg-[#0671e3] transition-all duration-300'>Save</button>
                </footer>
            </div>
        </div>
    );
};

export default AddCustomer;
