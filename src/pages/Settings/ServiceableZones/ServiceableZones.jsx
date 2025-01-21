import React, { useState } from "react";
import Layout from "../../../components/Layout";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import AddZoneModal from "./AddZoneModal";



const zonesData = [
    // {
    //     id: 1,
    //     zonename: "",
    //     zonetype: "",
    //     active: "",
    // }
];

const ServiceableZone = () => {
    const [isOpenAddZoneModal, setIsOpenAddModal] = useState(false)

    const handleOpenAddZoneModal = () => {
        setIsOpenAddModal(true)
    }

    const handleCloseAddZoneModal = () => {
        setIsOpenAddModal(false)
    }


    return (
        <Layout>
            <section className='md:pt-[60px] pb-32'>
                {/* header */}
                <div className='py-[10px] px-4 lg:px-[50px] w-full sticky top-0 md:top-[60px] z-30 left-0 bg-white flex items-center justify-between shadow-2 h-[60px] mb-6'>
                    <div className='flex items-center gap-4'>
                        <Link to="/settings" className='bg-[#E5E5E5] rounded-md w-11 h-10 flex items-center justify-center text-[#C2C2C2]'>
                            <BsArrowLeft size={22} />
                        </Link>
                        <h1 className='text-xl font-medium capitalize'>Serviceable zones</h1>
                    </div>

                    <button className="bg-[#0671E3] text-white py-[6px] max-w-[70px] md:max-w-[110px] w-full px-3 rounded-md text-[15px] font-normal hover:bg-opacity-90 transition-all duration-200">
                        Save
                    </button>
                </div>

                <div className='px-4 lg:px-[50px]'>
                    <div className='mb-16 max-w-[900px] mx-auto w-full'>
                        <div className="flex justify-between w-full gap-2 mb-5">
                            <div>
                                <h2 className="text-xl font-medium">Zones</h2>
                                <p className="text-[#606060] text-sm">List of Serviceable Zones</p>
                            </div>

                            <button onClick={handleOpenAddZoneModal} className="bg-black text-white py-1 max-w-[93px] h-9 w-full px-3 rounded-md text-sm font-normal hover:bg-opacity-90 transition-all duration-200">
                                Add Zone
                            </button>
                        </div>

                        {/* Tabel  */}

                        <div className="overflow-x-auto w-full block bg-white border">
                            <table className="w-full border-collapse">
                                <thead className="bg-black text-white">
                                    <tr>
                                        <th className="border-b border-[#dae0ec] uppercase text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                            Zone name
                                        </th>
                                        <th className="border-b border-[#dae0ec] uppercase text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                            Zone type
                                        </th>
                                        <th className="border-b border-[#dae0ec] uppercase text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                            active
                                        </th>
                                        <th className="border-b border-[#dae0ec] uppercase text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                            action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {zonesData.length > 0 ? (
                                        zonesData.map((zones) => (
                                            <tr key={zones.id} className="hover:bg-tr-hover-bg cursor-pointer">
                                                <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] font-medium text-[#212837] text-sm whitespace-nowrap">
                                                    {zones.zonename}
                                                </td>
                                                <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] text-[#212837] text-sm">
                                                    {zones.zonetype}
                                                </td>
                                                <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] text-[#212837] text-sm">
                                                    {zones.active}
                                                </td>
                                                <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] font-medium text-[#212837] text-sm text-left whitespace-nowrap">
                                                    Active
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] text-center text-[#212837] text-sm">
                                                There are no records to show
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {isOpenAddZoneModal && <AddZoneModal onClose={handleCloseAddZoneModal} />}
            </section>
        </Layout>
    );
};

export default ServiceableZone;
