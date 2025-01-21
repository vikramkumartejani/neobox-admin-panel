import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProductImg from "../../../assets/product-1.jpeg";
import EditIcon from "../../../assets/edit-icon.svg";
import DeleteIcon from "../../../assets/delete-icon.svg";
import { RiArrowRightSLine } from "react-icons/ri";

import DeleteMerchant from "./DeleteMerchant";

const merchantsData = [
    { id: 1, name: "Hyper Store Inc.", address: "1234 Elm Street, Cityville" },
];

const rowsPerPage = 10; 

const MerchantTable = () => {
    const [isOpenDeleteMerchant, setIsDeleteMerchant] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [toggleStates, setToggleStates] = useState(
        merchantsData.reduce((acc, merchant) => {
            acc[merchant.id] = true;
            return acc;
        }, {})
    );

    const toggleSwitch = (id) => {
        setToggleStates((prevStates) => ({
            ...prevStates,
            [id]: !prevStates[id],
        }));
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const getFilteredData = () => {
        if (!searchQuery) return merchantsData;
        return merchantsData.filter((merchant) =>
            merchant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            merchant.address.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const currentData = getFilteredData();
    const totalPages = Math.ceil(currentData.length / rowsPerPage);
    const paginatedData = currentData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handleOpenDeleteMerchant = () => setIsDeleteMerchant(true);
    const handleCloseDeleteMerchant = () => setIsDeleteMerchant(false);

    return (
        <div>
            {/* Search Input */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search Merchants"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-white border border-[#d2cfcf] rounded-md w-full min-w-fit max-w-[389px] px-3 py-[6px] h-[38px] text-base text-[#3c4e71]"
                />
            </div>

            <div className="overflow-x-auto w-full block bg-white rounded-lg border">
                <table className="w-full border-collapse">
                    <thead className="bg-[#F9FAFB]">
                        <tr>
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                Name
                            </th>
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center whitespace-nowrap">
                                Featured
                            </th>
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center whitespace-nowrap">
                                Sponsored
                            </th>
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center whitespace-nowrap">
                                Status
                            </th>
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center whitespace-nowrap">
                                Actions
                            </th>
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center whitespace-nowrap">
                                Auto Login
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((merchant) => (
                                <tr
                                    key={merchant.id}
                                    className="hover:bg-tr-hover-bg cursor-pointer text-center"
                                >
                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm whitespace-nowrap text-left">
                                        <div className="flex gap-4 items-center">
                                            <img
                                                src={ProductImg}
                                                alt="Product"
                                                className="rounded w-10 h-10 object-cover"
                                            />
                                            <div className="text-start">
                                                <p className="font-medium">{merchant.name}</p>
                                                <p className="text-[#13151680]">{merchant.address}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 whitespace-nowrap">
                                        <input
                                            type="checkbox"
                                            value="featured"
                                            className="cursor-pointer rounded-[6px] custom-checkbox focus:ring-indigo-500"
                                        />
                                    </td>
                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 whitespace-nowrap">
                                        <input
                                            type="checkbox"
                                            value="sponsored"
                                            className="cursor-pointer rounded-[6px] custom-checkbox focus:ring-indigo-500"
                                        />
                                    </td>
                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 whitespace-nowrap">
                                        <div
                                            className={`w-7 h-4 flex items-center rounded-full mx-auto p-[2px] cursor-pointer transition-all duration-300 ${toggleStates[merchant.id]
                                                ? "bg-[#0671E3]"
                                                : "bg-gray-300"
                                                }`}
                                            onClick={() => toggleSwitch(merchant.id)}
                                        >
                                            <div
                                                className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${toggleStates[merchant.id]
                                                    ? "translate-x-3"
                                                    : ""
                                                    }`}
                                            ></div>
                                        </div>
                                    </td>
                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 whitespace-nowrap">
                                        <div className="flex gap-2 justify-center">
                                            <Link
                                                to="/merchant/create"
                                                title="Edit"
                                                className="bg-[#f2f2f2] w-9 h-[30px] rounded flex items-center justify-center"
                                            >
                                                <img src={EditIcon} alt="Edit Icon" />
                                            </Link>
                                            <button
                                                onClick={handleOpenDeleteMerchant}
                                                title="Delete"
                                                className="bg-[#f2f2f2] w-9 h-[30px] rounded flex items-center justify-center"
                                            >
                                                <img src={DeleteIcon} alt="Delete Icon" />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 whitespace-nowrap">
                                        <button className="py-[1px] px-[6px] flex items-center justify-center gap-4 mx-auto rounded bg-[#e6f5e4] text-[#105802] border border-[#aadca0] h-8 hover:bg-[#aadca0] transition-all duration-300">
                                            Login
                                            <RiArrowRightSLine className="text-lg" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="border-t border-[#f2f2f2] px-[.9rem] py-5 text-center text-[#212837] text-sm"
                                >
                                    No records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-between items-center flex-wrap gap-5 flex-col sm:flex-row bg-[#DAE0EC40] py-3 px-5">
                    <span className="text-sm">
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
                            <RiArrowRightSLine className="rotate-180" />
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

            {isOpenDeleteMerchant && <DeleteMerchant onClose={handleCloseDeleteMerchant} />}
        </div>
    );
};

export default MerchantTable;
