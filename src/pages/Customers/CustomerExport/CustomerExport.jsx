import React, { useState } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import CustomerExportModal from './CustomerExportModal';
import Layout from '../../../components/Layout';


const CustomerExpert = () => {
    const [isOpenExportReportModal, setIsOpenExportReportModal] = useState(false)

    const handleOpenExportReport = () => {
        setIsOpenExportReportModal(true)
    }

    const handleCloseExportReport = () => {
        setIsOpenExportReportModal(false)
    }


    return (
        <Layout>
            <section className='md:pt-[60px] pb-32'>
                {/* header */}
                <div className='py-[10px] px-5 lg:px-[50px] w-full sticky top-0 md:top-[60px] left-0 bg-white flex items-center justify-between shadow-2 h-[60px] mb-6'>
                    <div className='flex items-center gap-4'>
                        <Link to="/customers" className='bg-[#E5E5E5] rounded-md w-11 h-10 flex items-center justify-center text-[#C2C2C2]'>
                            <BsArrowLeft size={22} />
                        </Link>
                        <h1 className='text-xl font-medium capitalize'>Products Expert</h1>
                    </div>
                </div>

                <div className='px-5 lg:px-[50px]'>
                    <div className='mb-16 max-w-[1200px] mx-auto w-full'>
                        <div className='w-full shadow-6 my-4 p-3 md:p-5 bg-white rounded-md mb-20'>
                            <p className='text-sm pb-4'>
                                <span className='mr-2 text-[#0671e3] pb-1'>1</span>
                                Click on export Button
                            </p>

                            <p className='text-sm pb-8'>
                                <span className='mr-2 text-[#0671e3] pb-1'>2</span>
                                After the export is completed you can download it from the table.
                            </p>



                            <div className='border-[3px] border-dashed border-[#eee] py-6 rounded-md w-full flex items-center justify-center'>
                                <button onClick={handleOpenExportReport} className='bg-[#c9d2e3] py-[.375rem] text-[#212837] px-3 rounded-md text-sm font-normal hover:opacity-90 transition-all duration-200'>Export</button>
                            </div>
                        </div>


                        {/* Table */}
                        <div className="overflow-x-auto w-full block bg-white rounded-xl border">
                            <table className="w-full border-collapse">
                                <thead className="bg-[#F9FAFB]">
                                    <tr>
                                        <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                            Date
                                        </th>
                                        <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                            Export ID
                                        </th>
                                        <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                            Number of Records
                                        </th>
                                        <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                            Status
                                        </th>
                                        <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                            Download
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="hover:bg-tr-hover-bg cursor-pointer">
                                        <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] font-medium text-[#212837] text-sm whitespace-nowrap">
                                            2024-12-19 17:07:23
                                        </td>
                                        <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] text-[#212837] text-sm">
                                            6764991b2b8b5b0dbc0dab92
                                        </td>
                                        <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] text-[#212837] text-sm">
                                            1
                                        </td>
                                        <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] font-medium text-[#212837] text-sm text-left whitespace-nowrap">
                                            <p className='bg-[#1abd36] w-fit text-white font-bold text-[10px] py-[2px] px-1 rounded-[6px]'>Completed</p>
                                        </td>

                                        <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] text-left whitespace-nowrap">
                                            <FaDownload size={16} className='text-[#0671e3] cursor-pointer' />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>


            {isOpenExportReportModal && <CustomerExportModal onClose={handleCloseExportReport} />}
        </Layout>
    );
};

export default CustomerExpert;