import React, { useState } from 'react'

import Flag1 from "../../../assets/flag-1.svg"
import Flag2 from "../../../assets/flag-2.png"


const countries = [
    { name: 'Pakistan', code: '+92', flag: Flag1 },
    { name: 'Afghanistan', code: '+93', flag: Flag2 },
    { name: 'India', code: '+91', flag: Flag1 },
    { name: 'United States', code: '+1', flag: Flag2 },
    { name: 'United Kingdom', code: '+44', flag: Flag1 },
    { name: 'United States', code: '+1', flag: Flag2 },
];



const SelectCountryNumber = () => {
    const [selectedCountry, setSelectedCountry] = useState({ code: '+92', flag: Flag1 });
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="relative">
            <div className='flex border border-[#d2cfcf] rounded-md h-10 px-3'>
                <button
                    type="button"
                    className="pr-3 flex items-center"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <img src={selectedCountry.flag} alt={selectedCountry.name} className="h-[14px] w-5 object-cover" />
                    <span className="ml-2 transform scale-y-50 inline-block text-[#666]">
                        ▼
                    </span>
                </button>

                <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="border-none bg-transparent outline-none rounded-r-md py-[6px] w-full h-full text-base"
                />
            </div>

            {/* Dropdown */}
            {isDropdownOpen && (
                <div className="absolute mt-[6px] bg-white shadow-md border rounded z-10 w-full">
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
                                    className="py-1 px-4 gap-2 flex items-center cursor-pointer hover:bg-[#f3f3f3] transition-all duration-300 text-sm"
                                    onClick={() => {
                                        setSelectedCountry(country);
                                        setSearchTerm('');
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    <img src={country.flag} alt={country.name} className="w-5 h-[14px] object-cover" />
                                    <span>{country.name}</span>
                                    <span className='text-[#999]'>({country.code})</span>
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SelectCountryNumber