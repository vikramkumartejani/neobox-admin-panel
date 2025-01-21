import React from 'react'
import TickMarkIcon from "../../assets/titmark-circle.svg";
import DeleteIcon from "../../assets/delete-icon.svg";

const campaignData = [
    {
        id: 1,
        campaign: "dsfsd",
        datecreated: "Nov 23, 2024",
    },
];


const NotificationCampaignsTable = () => {

    return (
        <div>
            {/* Search Input */}
            <div className="flex gap-4 mb-5">
                <input
                    type="text"
                    placeholder="Search Campaigns"
                    className="bg-white border border-[#d2cfcf] rounded-md w-full min-w-fit max-w-[482px] px-3 py-[6px] h-10 text-base text-[#3c4e71]"
                />
            </div>

            {/* Table  */}
            <div className="overflow-x-auto w-full block bg-white rounded-lg border" >
                <table className="w-full border-collapse">
                    <thead className="bg-[#F9FAFB] w-full">
                        <tr className="w-full">
                            <th className="border-b border-[#dae0ec] xl:w-[500px] uppercase text-[#707275] text-xs font-semibold px-[.9rem] py-[.9rem] text-left whitespace-nowrap">
                                Campaign
                            </th>
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                Date Created
                            </th>
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                Status
                            </th>
                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-end whitespace-nowrap">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {campaignData.length > 0 ? (
                            campaignData.map((campaign) => (
                                <tr key={campaign.id} className="hover:bg-tr-hover-bg">
                                    <td className="border-t border-[#f2f2f2] flex-1 px-[.9rem] py-[.7rem] text-[#212837] text-sm whitespace-nowrap text-left">
                                        {campaign.campaign}
                                    </td>

                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm whitespace-nowrap text-left">
                                        {campaign.datecreated}
                                    </td>

                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-[#212837] text-sm whitespace-nowrap text-left">
                                        <div className='flex items-center gap-1'>
                                            <img src={TickMarkIcon} alt="TickMarkIcon" loading='lazy' />
                                            <span>Completed Jan 19, 2025, 12:00 AM </span>
                                        </div>
                                    </td>

                                    <td className="border-t border-[#f2f2f2] px-[1.2rem] py-[.7rem] text-center">
                                        <div className="flex justify-end">
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
                                    className="border-t border-[#f2f2f2] px-[.9rem] py-[.7rem] text-center text-[#212837] text-sm"
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

export default NotificationCampaignsTable