import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";


import Layout from '../../../components/Layout'




const CreateSegmentation = () => {
    const [filters, setFilters] = useState([]); // State to manage filters
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
    const dropdownRef = useRef(null);

    const filterOptions = [
        "Total Number Of Orders",
        "Total Orders Completed",
        "Total Orders Cancelled",
        "Total Completed Orders Value",
        "Average Completed Orders Value",
        "Total Cancelled Orders Value",
        "Average Cancelled Orders Value",
        "Total Tip Value",
        "Total Coupons Applied",
        "Merchant IDs",
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Add a new filter when an option is selected
    const handleAddFilter = (filterTitle) => {
        setFilters((prevFilters) => [...prevFilters, { title: filterTitle, condition: "greater_than", value: "" }]);
        setIsDropdownOpen(false); // Close dropdown
    };

    // Update filter value or condition
    const handleUpdateFilter = (index, key, value) => {
        setFilters((prevFilters) =>
            prevFilters.map((filter, i) => (i === index ? { ...filter, [key]: value } : filter))
        );
    };

    // Remove a filter
    const handleDeleteFilter = (index) => {
        setFilters((prevFilters) => prevFilters.filter((_, i) => i !== index));
    };

    return (
        <Layout>
            <section className='md:pt-[60px] pb-72'>
                {/* header  */}
                <div className='py-[10px] px-5 lg:px-[50px] w-full sticky top-0 md:top-[60px] z-30 left-0 bg-white flex items-center justify-between shadow-2 h-[60px] mb-6'>
                    <div className='flex items-center gap-4'>
                        <Link to="/customers" className='bg-[#E5E5E5] rounded-md w-11 h-10 flex items-center justify-center text-[#C2C2C2]'>
                            <BsArrowLeft size={22} />
                        </Link>
                        <h1 className='text-xl font-medium capitalize'>Create Segment</h1>
                    </div>

                    <button className="bg-[#0671E3] text-white py-[6px] px-3 rounded-md text-[15px] max-w-[110px] w-full font-normal hover:bg-opacity-90 transition-all duration-200">
                        Save
                    </button>
                </div>

                <div className='px-5 lg:px-[50px]'>
                    <div className='max-w-[1200px] w-full mx-auto'>
                        <div className='border border-[#dae0ec] rounded-lg shadow-shadow-1'>
                            <div className='bg-[#f8f9fa] border-b border-[#dae0ec] p-5 text-base text-[#444] font-semibold rounded-t-lg'>
                                Segment Details
                            </div>

                            <div className='p-5 flex flex-col md:flex-row gap-4 bg-white'>
                                <div className='w-full md:w-[70%]'>
                                    <fieldset className='mb-4'>
                                        <label htmlFor="segment_name" className='pb-1 block font-medium text-sm'>Segment Name</label>
                                        <input type="text" placeholder='Enter Segment Name' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full flex-1 rounded-md' />
                                    </fieldset>
                                </div>
                                <div className='w-full md:w-[30%]'>
                                    <fieldset className='mb-4'>
                                        <label htmlFor="segment_type" className='pb-1 block font-medium text-sm'>Segment Type</label>
                                        <select disabled className="custom-select z-0 w-full border-[0.5px] bg-[#f8f9fa] opacity-80 border-[#ced4da] h-10 py-[6px] px-3 text-[#3c4e71] rounded-md">
                                            <option value="user">User</option>
                                        </select>
                                    </fieldset>
                                </div>
                            </div>

                            <div className='pb-10 bg-white w-full'>
                                <div className="flex justify-center items-center flex-col p-4">
                                    {filters.length > 0 && (
                                        <div className="border-2 border-[#e9ecef] p-4 mb-4 rounded-lg w-full">
                                            {filters.map((filter, index) => (
                                                <React.Fragment key={index}>
                                                    {/* Individual Filter Block */}
                                                    <div className="p-4 border border-[#ced4da] rounded-lg bg-[#f8f9fa]">
                                                        <div className="flex flex-wrap items-center gap-2 flex-col md:flex-row">
                                                            <div className="text-lg font-semibold flex-1 md:max-w-[25%] w-full">{filter.title}</div>
                                                            <div className="md:max-w-[33.3%] w-full">
                                                                <select
                                                                    className="custom-select w-full border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md"
                                                                    value={filter.condition}
                                                                    onChange={(e) => handleUpdateFilter(index, "condition", e.target.value)}
                                                                >
                                                                    <option value="greater_than">is greater than</option>
                                                                    <option value="less_than">is less than</option>
                                                                    <option value="equal">is equal to</option>
                                                                </select>
                                                            </div>

                                                            <div className="md:max-w-[41.67%] w-full flex">
                                                                <input
                                                                    type="number"
                                                                    placeholder="Enter Value"
                                                                    className="border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md"
                                                                    value={filter.value}
                                                                    onChange={(e) => handleUpdateFilter(index, "value", e.target.value)}
                                                                />
                                                                <button
                                                                    className="ml-2 py-[6px] px-3 text-lg"
                                                                    onClick={() => handleDeleteFilter(index)}
                                                                >
                                                                    <RiDeleteBin6Line />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Add "AND" condition between filters */}
                                                    {index < filters.length - 1 && <div className="text-center font-semibold my-4">AND</div>}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    )}



                                    {/* Dropdown to Add New Filter */}
                                    <div className="relative mt-4" ref={dropdownRef}>
                                        <button
                                            className="px-4 py-2 max-w-[193px] w-full mx-auto flex items-center justify-center gap-1 rounded-md bg-[#212837] text-white text-center text-lg hover:bg-[#13171f] transition-all duration-300"
                                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                                        >
                                            <FiPlus />
                                            Add Filter
                                        </button>

                                        {isDropdownOpen && (
                                            <ul className="absolute shadow-shadow-2 min-w-[275px] w-full py-2 text-[#212837] text-xs bg-white bg-clip-padding rounded-md left-0 top-12">
                                                {filterOptions.map((option, index) => (
                                                    <li
                                                        key={index}
                                                        className="py-[6px] px-5 cursor-pointer hover:bg-[#f0f2f6]"
                                                        onClick={() => handleAddFilter(option)}
                                                    >
                                                        {option}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                            </div>

                            <div className='bg-[#f8f9fa] p-5 rounded-b-lg'>
                                <div className='py-2 flex justify-end text-lg gap-1'>
                                    Contacts in Segment : <span> 0</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default CreateSegmentation