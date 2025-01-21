import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";

import UpdateStatusModal from './UpdateStatusModal';
import AddCustomer from './AddCustomer';
import CustomerDetails from './CustomerDetails';
import DeleteCustomer from './DeleteCustomer';



const data = {
    Customers: {
        All: [
            { name: "John Doe", email: "john@example.com", phone: "+123456789", status: "Block", },
            { name: "Jane Smith", email: "jane@example.com", phone: "+987654321", status: "Active", },
            { name: "Jane Smith", email: "jane@example.com", phone: "+987654321", status: "Active", },
            { name: "Jane Smith", email: "jane@example.com", phone: "+987654321", status: "Active", },
            { name: "Jane Smith", email: "jane@example.com", phone: "+987654321", status: "Active", },
            { name: "Jane Smith", email: "jane@example.com", phone: "+987654321", status: "Active", },
            { name: "Jane Smith", email: "jane@example.com", phone: "+987654321", status: "Active", },
            { name: "Jane Smith", email: "jane@example.com", phone: "+987654321", status: "Active", },
            { name: "Jane Smith", email: "jane@example.com", phone: "+987654321", status: "Active", },
            { name: "Jane Smith", email: "jane@example.com", phone: "+987654321", status: "Active", },
            { name: "Jane Smith", email: "jane@example.com", phone: "+987654321", status: "Active", },
        ],
        Pending: [],
        Active: [
            { name: "John Doe", email: "john@example.com", phone: "+123456789", status: "Block", },
            { name: "Jane Smith", email: "jane@example.com", phone: "+987654321", status: "Active", },
            { name: "Jane Smith", email: "jane@example.com", phone: "+987654321", status: "Active", },
        ],
        Block: [],
    },
};


const CustomerTable = () => {
    const [activeMainCategory, setActiveMainCategory] = useState("Customers");
    const [activeSubCategory, setActiveSubCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [isOpenStatusModal, setIsOpenStatusModal] = useState(false)
    const [isOpenAddCustomerModal, setIsOpenAddCustomerModal] = useState(false)
    const [isOpenDeleteCustomerModal, setIsOpenDeleteCustomerModal] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);


    const rowsPerPage = 10;


    const handleSubCategoryChange = (subcategory) => {
        setActiveSubCategory(subcategory);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Get filtered data based on subcategory
    const getFilteredData = () => {
        const categoryData = data[activeMainCategory]?.All || [];
        if (activeSubCategory === "All") return categoryData;
        return categoryData.filter(item => item.status === activeSubCategory);
    };

    const currentData = getFilteredData();
    const totalPages = Math.ceil(currentData.length / rowsPerPage);
    const paginatedData = currentData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    // Function for open & close Update Status Modal 
    const handleOpenStatusModal = () => {
        setIsOpenStatusModal(true)
    }

    const handleCloseStatusModal = () => {
        setIsOpenStatusModal(false)
    }


    // Function for open & close Add Customer Modal 
    const handleOpenAddCustomerModal = () => {
        setIsOpenAddCustomerModal(true)
    }

    const handleCloseAddCustomerModal = () => {
        setIsOpenAddCustomerModal(false)
    }

    // Function for open & close Delete Customer Modal 
    const handleOpenDeleteCustomerModal = () => {
        setIsOpenDeleteCustomerModal(true)
    }

    const handleCloseDeleteCustomerModal = () => {
        setIsOpenDeleteCustomerModal(false)
    }

    // Open Customer Details modal 
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>

            <div>
                {/* Search INput & ADD Customers btn  */}
                <div className='flex items-center gap-6 justify-between mb-8 flex-col md:flex-row'>
                    <input type="text" placeholder='Search Customers' className='bg-white border border-[#d2cfcf] rounded-md w-full min-w-full md:min-w-[330px] max-w-[330px] px-3 py-[6px] h-9 text-base text-[#3c4e71]' />
                    <div className='flex justify-end w-full md:w-auto'>
                        <button onClick={handleOpenAddCustomerModal} className='px-3 py-[6px] flex items-center gap-1 rounded-md bg-[#212837] text-white text-center text-sm hover:bg-[#13171f] transition-all duration-300'>
                            <FiPlus />
                            Add customer
                        </button>
                    </div>
                </div>

                {/* Sub Tabs With Table  */}
                <div>
                    {paginatedData.length > 0 ? (
                        <div>
                            <div className='shadow-3 rounded-[5px] bg-white'>

                                {/* Subcategories */}
                                <div className="flex gap-2 px-[1.2rem] border-b-2 border-[#dae0ec]">
                                    {["All", "Pending", "Active", "Block"].map((subcategory) => (
                                        <button
                                            key={subcategory}
                                            className={`p-[1.2rem] outline-none bg-transparent font-normal border-b-[3px] ${activeSubCategory === subcategory
                                                ? "border-b-[#0671e3] text-[#0e0e0e]"
                                                : "text-[#838487] border-b-transparent"
                                                }`}
                                            onClick={() => handleSubCategoryChange(subcategory)}
                                        >
                                            {subcategory}
                                        </button>
                                    ))}
                                </div>

                                {/* Table */}
                                <div className="overflow-x-auto w-full block">
                                    <table className="w-full border-collapse">
                                        <thead className="bg-[#f9fafb] rounded-2xl">
                                            <tr>
                                                <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left">
                                                    Name
                                                </th>

                                                <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left">
                                                    Email
                                                </th>

                                                <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left">
                                                    Phone
                                                </th>

                                                <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center">
                                                    Status
                                                </th>

                                                <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center">
                                                    Actions
                                                </th>

                                                <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center">
                                                    Auto Login
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {/* {paginatedData.length > 0 ? ( */}
                                            {paginatedData.map((item, index) => (
                                                <tr key={index} onClick={toggleModal} className='cursor-pointer'>
                                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] font-medium text-[#212837] text-sm whitespace-nowrap">{item.name}</td>

                                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm">{item.email}</td>
                                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm">{item.phone}</td>

                                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] font-medium text-[#212837] text-sm text-center">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleOpenStatusModal();
                                                            }}
                                                            className={`px-[10px] py-[2px] rounded-[15px] capitalize text-sm text-center mx-auto ${item.status === "Active" ? "bg-[#1ABD364D]" : "bg-[#FF95004D]"}`}>
                                                            {item.status}
                                                        </button>
                                                    </td>

                                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm text-center">
                                                        <button onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleOpenDeleteCustomerModal();
                                                        }}
                                                            className="w-7 h-7 flex items-center justify-center rounded bg-[#f2f2f2] text-[#212837] mx-auto" >
                                                            <FaTrash />
                                                        </button>
                                                    </td>

                                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm text-center">
                                                        <button className="py-[1px] px-[6px] flex items-center justify-center gap-4 mx-auto rounded bg-[#e6f5e4] text-[#105802] border border-[#aadca0] h-8 hover:bg-[#aadca0] transition-all duration-300" >
                                                            Login
                                                            <RiArrowRightSLine className='text-lg' />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            {/* Pagination  */}
                            <div className="flex justify-between items-center mt-4 flex-wrap gap-5 flex-col sm:flex-row">
                                <span className='text-sm'>
                                    Showing {Math.min((currentPage - 1) * rowsPerPage + 1, currentData.length)} to{" "}
                                    {Math.min(currentPage * rowsPerPage, currentData.length)} of {currentData.length} rows
                                </span>

                                <div className="flex gap-2">
                                    <button
                                        className={`px-3 py-1 rounded-md border border-[#C9D2E3] ${currentPage === 1 ? "text-black" : "text-[#0671E3]"
                                            }`}
                                        disabled={currentPage === 1}
                                        onClick={() => handlePageChange(currentPage - 1)}
                                    >
                                        <RiArrowRightSLine className=' rotate-180' />
                                    </button>
                                    {[...Array(totalPages)].map((_, pageIndex) => (
                                        <button
                                            key={pageIndex}
                                            className={`px-3 py-1 rounded-md border ${currentPage === pageIndex + 1 ? "bg-[#0671E3] border-transparent text-white" : "bg-white border-[#C9D2E3]"
                                                }`}
                                            onClick={() => handlePageChange(pageIndex + 1)}
                                        >
                                            {pageIndex + 1}
                                        </button>
                                    ))}
                                    <button
                                        className={`px-3 py-1 rounded-md border border-[#C9D2E3] ${currentPage === totalPages ? "text-black" : "text-[#0671E3]"
                                            }`}
                                        disabled={currentPage === totalPages}
                                        onClick={() => handlePageChange(currentPage + 1)}
                                    >
                                        <RiArrowRightSLine />
                                    </button>
                                </div>
                            </div>

                        </div>
                    ) : (
                        <div className='flex items-center justify-center flex-wrap text-center w-full text-sm'>
                            We couldn't find any results. Why not &nbsp;<span onClick={handleOpenAddCustomerModal} className='text-[#0671e3] cursor-pointer'>add a customer</span>&nbsp;instead?
                        </div>
                    )}
                </div>
            </div>

            {isOpenAddCustomerModal && (
                <AddCustomer onClose={handleCloseAddCustomerModal} />
            )}

            {isOpenStatusModal && (
                <UpdateStatusModal onClose={handleCloseStatusModal} />
            )}

            {isOpenDeleteCustomerModal && (
                <DeleteCustomer onClose={handleCloseDeleteCustomerModal} />
            )}

            <CustomerDetails isOpen={isModalOpen} onClose={toggleModal} />
        </div>
    )
}

export default CustomerTable