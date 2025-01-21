import React from 'react';
import Layout from '../../../components/Layout';
import Boxes from './Boxes';
import { Link } from 'react-router-dom';
import CalendarDropdown from '../../../components/Calendar';



const reportsData = [
    {
        id: 1,
        merchant: "Abcds",
        orders: "34",
        grandtotal: "$100",
        commision: "$0.00",
    }
];

const Reports = () => {

    return (
        <Layout>
            <section className='pt-[60px] pb-32'>
                {/* header */}
                <div className='py-[10px] px-5 lg:px-[50px] w-full sticky top-0 md:top-[60px] left-0 bg-white flex items-center justify-between shadow-2 h-[60px] mb-6'>
                    <h1 className='text-xl font-medium capitalize'>Reports</h1>

                    <CalendarDropdown />
                </div>

                <div className='px-5 lg:px-[50px]'>
                    <div className='max-w-[1200px] w-full mx-auto'>
                        {/* Search INput & Merchants btn  */}
                        <div className='flex items-center gap-3 mb-8'>
                            <input type="text" placeholder='Search Merchants' className='bg-white border border-[#d2cfcf] rounded-md w-full max-w-[330px] px-3 py-[6px] h-9 text-base text-[#3c4e71]' />
                            <button className='px-3 py-[6px] h-9 flex items-center gap-1 rounded-md bg-[#212837] text-white text-center text-sm hover:bg-[#13171f] transition-all duration-300'>
                                Search
                            </button>
                        </div>

                        <div>
                            <Boxes />

                            {/* header  */}
                            <div className='flex justify-between align-items-center mb-3'>
                                <h2 className='text-lg font-semibold'>COMMISSION REPORTS</h2>

                                <Link to="/order-expert" className='bg-[#212837] py-[.375rem] text-white px-3 rounded-md text-sm font-normal hover:bg-[#13171f] transition-all duration-200'>
                                    Export
                                </Link>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto w-full block bg-white rounded-xl border">
                                <table className="w-full border-collapse">
                                    <thead className="bg-[#F9FAFB]">
                                        <tr>
                                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                                Merchant
                                            </th>
                                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                                                Orders
                                            </th>
                                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center whitespace-nowrap">
                                                Grand Total
                                            </th>
                                            <th className="border-b border-[#dae0ec] uppercase text-[#707275] text-xs font-semibold p-[.9rem] text-center whitespace-nowrap">
                                                Commission
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {reportsData.length > 0 ? (
                                            reportsData.map((reports) => (
                                                <tr key={reports.id} className="hover:bg-tr-hover-bg cursor-pointer">
                                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] font-medium text-[#212837] text-sm whitespace-nowrap">
                                                        {reports.merchant}
                                                    </td>
                                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] text-[#212837] text-sm">
                                                        {reports.orders}
                                                    </td>
                                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] text-[#212837] text-sm text-center">
                                                        {reports.grandtotal}
                                                    </td>
                                                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] font-medium text-[#212837] text-sm text-center whitespace-nowrap">
                                                        {reports.commision}
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
                </div>
            </section>

        </Layout>
    );
};

export default Reports;
