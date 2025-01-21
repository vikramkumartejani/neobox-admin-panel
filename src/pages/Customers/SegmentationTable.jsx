import React from 'react'
import { FiPlus } from "react-icons/fi";

import EditIcon from "../../assets/edit-icon.svg";
import DeleteIcon from "../../assets/delete-icon.svg";
import { Link } from 'react-router-dom';


const data = [
    { name: " Xyzdsdsdsds " },
];


const SegmentationTable = () => {

    return (
        <div>
            {/* Search INput &  Create Segment btn  */}
            <div className='flex items-center gap-6 justify-between mb-8 flex-col md:flex-row'>
                <input type="text" placeholder='Search Segmentation' className='bg-white border border-[#d2cfcf] rounded-md w-full min-w-full md:min-w-[330px] max-w-[330px] px-3 py-[6px] h-9 text-base text-[#3c4e71]' />

                <div className='flex justify-end w-full md:w-auto'>
                    <Link to="/segmentation/create" className='px-3 py-[6px] flex items-center gap-1 rounded-md bg-[#212837] text-white text-center text-sm hover:bg-[#13171f] transition-all duration-300'>
                        <FiPlus />
                        Create Segment
                    </Link>
                </div>
            </div>

            <div>
                {data.length > 0 ? (
                    <div className="overflow-x-auto w-full block shadow-3 rounded-[5px] bg-white">
                        <table className="w-full border-collapse">
                            <thead className="bg-[#f9fafb] rounded-2xl">
                                <tr>
                                    <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left">
                                        Name
                                    </th>

                                    <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className='cursor-pointer'>
                                        <td tabIndex="0" aria-colindex="1" aria-sort='none' role='columnheader' className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] font-medium text-[#212837] text-sm whitespace-nowrap">{item.name}</td>

                                        <td scope="col" aria-colindex="2" role='columnheader' className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm text-center">
                                            <div className="flex gap-2 justify-center">
                                                <button
                                                    title="Edit"
                                                    className="bg-[#f2f2f2] w-9 h-[30px] rounded flex items-center justify-center"
                                                >
                                                    <img src={EditIcon} alt="Edit Icon" />
                                                </button>

                                                <button
                                                    title="Delete"
                                                    className="bg-[#f2f2f2] w-9 h-[30px] rounded flex items-center justify-center"
                                                >
                                                    <img src={DeleteIcon} alt="Delete Icon" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className='flex items-center justify-center flex-wrap text-center w-full text-sm'>
                        There are no records to show
                    </div>
                )}
            </div>
        </div >
    )
}

export default SegmentationTable