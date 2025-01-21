import React from 'react';
import { IconButton, Tooltip } from "@mui/material";
import { FaInfoCircle } from "react-icons/fa";

import Layout from '../../../components/Layout';
import CalendarDropdown from '../../../components/Calendar';


const BusinessAnalytics = () => {

    return (
        <Layout>
            <section className='pt-[60px] pb-32'>
                {/* header */}
                <div className='py-[10px] px-5 lg:px-[50px] w-full z-30 sticky top-[60px] left-0 bg-white flex items-center justify-between shadow-2 h-[60px] mb-6'>
                    <h1 className='text-xl font-medium capitalize'>Analytics</h1>

                    <CalendarDropdown />
                </div>

                <div className='px-5 lg:px-[50px]'>
                    <div className='max-w-[1200px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className="p-4 shadow-10 bg-white rounded-[5px]">
                            <div className="grid grid-cols-2 gap-2 h-[80px]">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <h2 className="text-lg font-medium">Total Orders</h2>
                                        <Tooltip title="Tenant's total orders" arrow>
                                            <IconButton className="hover:bg-none">
                                                <FaInfoCircle size={15} className="text-black/50" />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                    <h2 className="text-[28px] font-light">0</h2>
                                </div>

                                <div className="px-2 mt-1">
                                    <div className="mb-1 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#0671E3]"></div>
                                        <span className="flex-1 text-sm font-normal">Active</span>
                                        <span className="text-sm font-semibold">0</span>
                                    </div>

                                    <div className="my-1 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#40C16A]"></div>
                                        <span className="flex-1 text-sm font-normal">Completed</span>
                                        <span className="text-sm font-semibold">0</span>
                                    </div>

                                    <div className="my-1 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#FCA432]"></div>
                                        <span className="flex-1 text-sm font-normal">Cancelled</span>
                                        <span className="text-sm font-semibold">0</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 mt-4 mb-6">
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 opacity-70 text-right">10</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">9</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1 justify-end">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">8</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">7</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">6</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">5</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">4</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">3</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">2</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">1</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">0</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 shadow-10 bg-white rounded-[5px]">
                            <div className="h-[80px]">
                                <div className="flex items-center gap-2 mb-2">
                                    <h2 className="text-lg font-medium">Total Sales</h2>
                                    <Tooltip title="Tenant's total sales" arrow>
                                        <IconButton className="hover:bg-none">
                                            <FaInfoCircle size={15} className="text-black/50" />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                                <h2 className="text-[28px] font-light">₨0</h2>
                            </div>

                            <div className="space-y-2 mt-4 mb-6">
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 opacity-70 text-right">10.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">9.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1 justify-end">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">8.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">7.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">6.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">5.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">4.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">3.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">2.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">1.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">0.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 shadow-10 bg-white rounded-[5px]">
                            <div className="h-[80px]">
                                <div className="flex items-center gap-2 mb-2">
                                    <h2 className="text-lg font-medium">Total Delivery Fees</h2>
                                    <Tooltip title="Tenant's total delivery fees" arrow>
                                        <IconButton className="hover:bg-none">
                                            <FaInfoCircle size={15} className="text-black/50" />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                                <h2 className="text-[28px] font-light">₨0</h2>
                            </div>

                            <div className="space-y-2 mt-4 mb-6">
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 opacity-70 text-right">10.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">9.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1 justify-end">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">8.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">7.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">6.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">5.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">4.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">3.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">2.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">1.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-7 text-right opacity-70">0.00</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 shadow-10 bg-white rounded-[5px]">
                            <div className="grid grid-cols-2 gap-2 h-[80px]">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <h2 className="text-lg font-medium">Total Customer</h2>
                                        <Tooltip title="Tenant's total customer" arrow>
                                            <IconButton className="hover:bg-none">
                                                <FaInfoCircle size={15} className="text-black/50" />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                    <h2 className="text-[28px] font-light">0</h2>
                                </div>

                                <div className="px-2 mt-1">
                                    <div className="mb-1 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#0671E3]"></div>
                                        <span className="flex-1 text-sm font-normal">Existing Customers</span>
                                        <span className="text-sm font-semibold">0</span>
                                    </div>

                                    <div className="my-1 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#FCA432]"></div>
                                        <span className="flex-1 text-sm font-normal">New Customers</span>
                                        <span className="text-sm font-semibold">0</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 mt-4 mb-6">
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 opacity-70 text-right">10</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">9</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1 justify-end">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">8</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">7</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">6</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">5</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">4</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">3</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">2</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">1</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs font-normal w-3 text-right opacity-70">0</span>
                                    <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 shadow-10 bg-white rounded-[5px] min-h-[350px]">
                            <div className="flex items-center gap-2 mb-2">
                                <h2 className="text-lg font-medium">Platform Overview</h2>
                                <Tooltip title="Tenant's platform overview" arrow>
                                    <IconButton className="hover:bg-none">
                                        <FaInfoCircle size={15} className="text-black/50" />
                                    </IconButton>
                                </Tooltip>
                            </div>

                            <div className="mt-4 grid grid-cols-3 gap-2">
                                <div className="mb-1 flex items-center">
                                    <div className="w-2 h-2 rounded-full mr-2" style={{ background: "#0671E3" }}></div>
                                    <span className="text-sm font-normal mr-4">iOS</span>
                                    <span className="text-sm font-semibold">0</span>
                                </div>

                                <div className="mb-1 flex items-center">
                                    <div className="w-2 h-2 rounded-full mr-2" style={{ background: "#FCA432" }}></div>
                                    <span className="text-sm font-normal mr-4">Android</span>
                                    <span className="text-sm font-semibold">0</span>
                                </div>

                                <div className="mb-1 flex items-center">
                                    <div className="w-2 h-2 rounded-full mr-2" style={{ background: "#39D159" }}></div>
                                    <span className="text-sm font-normal mr-4">Web</span>
                                    <span className="text-sm font-semibold">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default BusinessAnalytics;
