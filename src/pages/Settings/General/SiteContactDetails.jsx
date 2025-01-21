import React, { useState } from 'react';

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


const SiteContactSettings = () => {
    const [selectedCountry, setSelectedCountry] = useState({ code: '+92', flag: Flag1 });
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div>
            <div className="flex gap-5 items-start justify-between flex-col xl:flex-row">
                <div className='max-w-[33%] w-full'>
                    <h2 className="text-xl font-medium mb-2 text-wrap">Site Contact Details</h2>
                    <p className="text-sm text-[#606060]">
                        Customers will use these details to contact you.
                    </p>
                </div>

                <div className="w-full shadow-6 p-3 md:p-5 bg-white rounded-md xlmax-w-[66%]">
                    <fieldset className='mb-4'>
                        <label htmlFor="business_name" className='pb-2 block font-medium text-sm'>Business Name</label>
                        <input type="text" placeholder='Business Name' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                    </fieldset>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                        <fieldset>
                            <label htmlFor="merchant_contact_number" className='pb-2 block font-medium text-sm'>Store Contact Phone</label>

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
                                        placeholder="Store Contact Phone"
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
                        </fieldset>

                        <fieldset>
                            <label htmlFor="store_contact_email" className='pb-2 block font-medium text-sm'>Store Contact Email</label>
                            <input type="email" placeholder='Store Contact Email' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                        </fieldset>
                    </div>

                    <fieldset className='mb-4'>
                        <label htmlFor="store_street" className='pb-2 block font-medium text-sm'>Store Street</label>
                        <input type="text" placeholder='Store Street' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                    </fieldset>

                    <fieldset className='mb-4'>
                        <label htmlFor="apartment_suite_etc" className='pb-2 block font-medium text-sm'>Apartment, Suite etc.</label>
                        <input type="text" placeholder='Apartment, Suite etc.' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                    </fieldset>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                        <fieldset>
                            <label htmlFor="city" className='pb-2 block font-medium text-sm'>City</label>
                            <input type="text" placeholder='City' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="zip-code" className='pb-2 block font-medium text-sm'>Postal/Zip Code</label>
                            <input type="text" placeholder='Postal/Zip Code' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                        </fieldset>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                        <fieldset>
                            <label htmlFor="country" className='pb-2 block font-medium text-sm'>Country/Region</label>
                            <input type="text" placeholder='Country/Region' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="state" className='pb-2 block font-medium text-sm'>State</label>
                            <input type="text" placeholder='State' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                        </fieldset>
                    </div>


                </div>
            </div>
        </div >
    );
};

export default SiteContactSettings;
