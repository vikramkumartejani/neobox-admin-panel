import React from 'react'
import EditIcon from "../../assets/edit-icon.svg";
import DeleteIcon from "../../assets/delete-icon.svg";


const popupsData = [
    {
        id: 1,
        title: "LSSK;SSKLSD",
        type: "fixed",
        location: "xyz",
        frequency: "none",
        status: "pending",
    },
];


const PopupsTable = () => {

    return (
        <div>
            {/* Search Input */}
            <div className="flex gap-4 mb-5">
                <input
                    type="text"
                    placeholder="Search Popups"
                    className="bg-white border border-[#d2cfcf] rounded-md w-full min-w-fit max-w-[482px] px-3 py-[6px] h-10 text-base text-[#3c4e71]"
                />
            </div>

            <div className="overflow-x-auto w-full block bg-white rounded-lg border" >
                <table className="w-full border-collapse">
                    <thead className="bg-[#F9FAFB] w-full">
                        <tr className="w-full">
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold px-[.9rem] py-[.9rem] text-left whitespace-nowrap">
                                Title
                            </th>
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                Type
                            </th>
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                Location
                            </th>
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                Frequency
                            </th>

                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                Status
                            </th>

                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center whitespace-nowrap">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {popupsData.length > 0 ? (
                            popupsData.map((popup) => (
                                <tr key={popup.id} className="hover:bg-tr-hover-bg cursor-pointer">
                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm whitespace-nowrap text-left">
                                        {popup.title}
                                    </td>

                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm whitespace-nowrap text-left">
                                        {popup.type}
                                    </td>

                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm whitespace-nowrap text-left">
                                        {popup.location}
                                    </td>

                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm whitespace-nowrap text-left">
                                        {popup.frequency}
                                    </td>

                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm whitespace-nowrap text-left">
                                        {popup.status}
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

export default PopupsTable