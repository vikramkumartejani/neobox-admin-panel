import React, { useState } from 'react'
import { FaUserLarge } from "react-icons/fa6";
import { IoIosCheckmarkCircle, IoIosArrowDown } from "react-icons/io";



const CustomerTab = () => {
    const [activeTab, setActiveTab] = useState('orders');

    const [isOpen, setIsOpen] = useState(false)

    const toggleTable = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div>
            <div className='mb-10 flex items-center gap-1 p-5'>
                <div className='max-w-fit sm:max-w-[192px] w-full flex items-center justify-center'>
                    <div className='mx-2 w-[90px] h-[90px] bg-[#C9D2E3] rounded-md flex items-center justify-center text-[#212837]'>
                        <FaUserLarge size={32} />
                    </div>
                </div>

                <div>
                    <h6 className='mb-1 text-sm font-semibold'>Seb</h6>
                    <p className='text-[13px]'>
                        <span className='text-[#13151680]'>Contact: </span> +15143214565
                    </p>

                    <p className='text-[13px]'>
                        <span className='text-[#13151680]'>Email: </span> test@gmail.com
                    </p>

                    <p className='text-[13px]'>
                        <span className='text-[#13151680]'>Joining date: </span> 24 May 2024
                    </p>
                </div>
            </div>

            <div>
                <div className='px-5'>
                    <div className="border border-[#c4c4c4] rounded-[10px] max-w-[300px] mx-auto w-full grid grid-cols-2 my-5">
                        {/* Product Tab */}
                        <button
                            onClick={() => setActiveTab('orders')}
                            className={`w-full capitalize rounded-[10px] py-2 ${activeTab === 'orders'
                                ? 'bg-black text-white'
                                : 'bg-white text-[#131516]'
                                }`}
                        >
                            Orders
                        </button>

                        {/* Category Tab */}
                        <button
                            onClick={() => setActiveTab('reviews')}
                            className={`w-full capitalize rounded-[10px] py-2 ${activeTab === 'reviews'
                                ? 'bg-black text-white'
                                : 'bg-white text-[#131516]'
                                }`}
                        >
                            Reviews
                        </button>
                    </div>
                </div>

                <div className='mt-8 w-full'>
                    {activeTab === 'orders' && (
                        <div>
                            {/* Button */}
                            <button
                                onClick={toggleTable}
                                className="bg-[#0b12230d] border-y border-black/10 py-[6px] px-3 flex justify-between w-full"
                            >
                                {/* Left Section */}
                                <div className="flex gap-2 items-start">
                                    <IoIosCheckmarkCircle size={18} className="text-[#008000] mt-[2px]" />

                                    <div>
                                        <p className="text-[#212837] font-semibold text-sm">donald-foods-products</p>
                                        <p className="text-[#13151680] text-xs text-left">14 Dec 2024 00:13 AM</p>
                                    </div>
                                </div>

                                {/* Right Section */}
                                <div className="text-[#13151680] text-sm flex items-center gap-2">
                                    $100
                                    <IoIosArrowDown className={`${isOpen ? "rotate-180" : ""}`} />
                                </div>
                            </button>

                            {/* Table - Visible when isOpen is true */}
                            {isOpen && (
                                <table className="w-full border-t">
                                    <thead>
                                        <tr>
                                            <th className="px-4 pt-4 pb-2 text-sm font-normal text-left uppercase">Product</th>
                                            <th className="px-4 pt-4 pb-2 text-sm font-normal uppercase text-center">Qty</th>
                                            <th className="px-4 pt-4 pb-2 text-sm font-normal uppercase text-right">Price</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="py-[.7rem] px-[.9rem] text-sm text-left text-[#707275]">bbq sauces</td>
                                            <td className="px-4 pt-4 pb-2 text-sm text-[#707275] text-center">1</td>
                                            <td className="px-4 pt-4 pb-2 text-sm text-[#707275] text-right">$100</td>
                                        </tr>
                                    </tbody>
                                </table>
                            )}
                        </div>
                    )}
                    {activeTab === 'reviews' && (
                        <div className='text-center text-sm'>
                            No Recent Reviews
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default CustomerTab