import React, { useState } from 'react'
import EditIcon from "../../assets/edit-icon.svg";
import DeleteIcon from "../../assets/delete-icon.svg";


const couponsData = [
    {
        id: 1,
        couponcode: "LSSK;SSKLSD",
        discounttype: "fixed",
        discountvalue: "0",
        usagelimit: "0",
        usagecount: "0",
        startdate: "28 Aug 2024 12:00 AM",
        enddate: "4 Sep 2024 11:59 PM",
    },

    {
        id: 2,
        couponcode: "124233200",
        discounttype: "fixed",
        discountvalue: "0",
        usagelimit: "0",
        usagecount: "0",
        startdate: "28 Aug 2024 12:00 AM",
        enddate: "4 Sep 2024 11:59 PM",
    },
];


const CouponsTable = () => {
    const [toggleStates, setToggleStates] = useState(
        couponsData.reduce((acc, products) => {
            acc[products.id] = true;
            return acc;
        }, {})
    );


    const toggleSwitch = (id) => {
        setToggleStates((prevStates) => ({
            ...prevStates,
            [id]: !prevStates[id],
        }));
    };

    return (
        <div>
            {/* Search Input */}
            <div className="flex gap-4 mb-5">
                <input
                    type="text"
                    placeholder="Search Coupons"
                    className="bg-white border border-[#d2cfcf] rounded-md w-full min-w-fit max-w-[482px] px-3 py-[6px] h-10 text-base text-[#3c4e71]"
                />
            </div>

            {/* Table  */}
            <div className="overflow-x-auto w-full block bg-white rounded-lg border" >
                <table className="w-full border-collapse">
                    <thead className="bg-[#F9FAFB] w-full">
                        <tr className="w-full">
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold px-[.9rem] py-[.9rem] text-left whitespace-nowrap">
                                Coupon Code
                            </th>
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                Discount Type
                            </th>
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                Discount Value
                            </th>
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                Usage Limit
                            </th>

                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center whitespace-nowrap">
                                Usage Count
                            </th>

                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center whitespace-nowrap">
                                Status
                            </th>

                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                Start Date
                            </th>

                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                End Date
                            </th>

                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center whitespace-nowrap">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {couponsData.length > 0 ? (
                            couponsData.map((coupons) => (
                                <tr key={coupons.id} className="hover:bg-tr-hover-bg cursor-pointer">
                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm whitespace-nowrap text-left">
                                        {coupons.couponcode}
                                    </td>

                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm whitespace-nowrap text-left">
                                        {coupons.discounttype}
                                    </td>

                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm whitespace-nowrap text-left">
                                        {coupons.discountvalue}
                                    </td>

                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm whitespace-nowrap text-left">
                                        {coupons.usagelimit}
                                    </td>

                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm whitespace-nowrap text-center">
                                        {coupons.usagecount}
                                    </td>

                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 whitespace-nowrap text-center">
                                        <div
                                            className={`w-7 h-4 flex items-center mx-auto rounded-full p-[2px] cursor-pointer transition-all duration-300 ${toggleStates[coupons.id]
                                                ? "bg-[#0671E3]"
                                                : "bg-gray-300"
                                                }`}
                                            onClick={() => toggleSwitch(coupons.id)}
                                        >
                                            <div
                                                className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${toggleStates[coupons.id]
                                                    ? "translate-x-3"
                                                    : ""
                                                    }`}
                                            ></div>
                                        </div>
                                    </td>

                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 font-medium text-[#212837] text-sm whitespace-nowrap text-left">
                                        {coupons.startdate}
                                    </td>

                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 font-medium text-[#212837] text-sm whitespace-nowrap text-left">
                                        {coupons.enddate}
                                    </td>

                                    {/* Action Column */}
                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-5 font-medium text-[#0671E3] text-sm whitespace-nowrap text-center">
                                        <div className="flex gap-2 justify-center">
                                            <button title="Edit" className="bg-[#f2f2f2] w-8 h-8 rounded flex items-center justify-center">
                                                <img src={EditIcon} alt="Edit Icon" />
                                            </button>

                                            <button title="Delete" className="bg-[#f2f2f2] w-8 h-8 rounded flex items-center justify-center">
                                                <img src={DeleteIcon} alt="Delete Icon" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="border-t border-[#f2f2f2] px-[.9rem] py-5 text-center text-[#212837] text-sm"
                                >
                                    There are no records to show
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CouponsTable