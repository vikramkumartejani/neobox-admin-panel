import React, { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import Layout from "../../components/Layout";
import { FaInfoCircle } from "react-icons/fa";
import Calendar from "../../components/Calendar";


const Dashboard = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleToggle = () => {
    setIsOnline((prev) => !prev);
  };

  return (
    <Layout>
      <section className='pt-[60px] pb-5'>
        {/* header */}
        <div className='py-[10px] px-4 lg:px-[50px] w-full z-30 sticky top-[60px] left-0 bg-white flex md:items-center flex-col md:flex-row justify-between shadow-2 h-24 md:h-[60px] mb-6'>
          <h1 className='text-xl font-medium capitalize'>Dashboard</h1>

          <Calendar />
        </div>

        <div className="px-4 lg:px-[50px] pb-32">
          <div className="flex justify-between gap-4 flex-col xsm:flex-row mb-8">
            <div>
              <h1 className="text-2xl font-medium">Welcome Sebastien</h1>
              <h2 className="text-base">Here's the latest on your store today</h2>
            </div>

            <fieldset className='xsm:max-w-[140px] w-full'>
              <label htmlFor="refresh_every" className='pb-[5px] block font-medium text-sm'>Refresh every</label>
              <select className="custom-select w-full border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md">
                <option value="0">Off</option>
                <option value="10">10 seconds</option>
                <option value="30">30 seconds</option>
                <option value="60">60 seconds</option>
              </select>
            </fieldset>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="p-4 shadow-10 bg-white rounded-[5px]">
              <div className="grid grid-cols-2 gap-2 h-[80px]">
                <div>
                  <h2 className="text-lg font-medium mb-2">Orders</h2>
                  <h2 className="text-[28px] font-light">0</h2>
                </div>

                <div className="px-2 mt-1">
                  <div className="mb-1 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: "rgb(6, 113, 227)" }}></div>
                    <span className="flex-1 text-sm font-normal">Active</span>
                    <span className="text-sm font-semibold">0</span>
                  </div>

                  <div className="my-1 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: "rgb(64, 193, 106)" }}></div>
                    <span className="flex-1 text-sm font-normal">Completed</span>
                    <span className="text-sm font-semibold">0</span>
                  </div>

                  <div className="my-1 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: "rgb(252, 164, 50)" }}></div>
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
                <div className="flex items-center gap-1 justify-end">
                  <span className="text-xs font-normal w-3 text-right opacity-70">8</span>
                  <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-normal w-3 text-right opacity-70">6</span>
                  <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-normal w-3 text-right opacity-70">4</span>
                  <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-normal w-3 text-right opacity-70">2</span>
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
                <h2 className="text-lg font-medium mb-2">Sales</h2>
                <h2 className="text-[28px] font-light">$0.00</h2>
              </div>

              <div className="space-y-2 mt-4 mb-6">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-normal w-7 opacity-70 text-right">10.00</span>
                  <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                </div>
                <div className="flex items-center gap-1 justify-end">
                  <span className="text-xs font-normal w-7 text-right opacity-70">8.00</span>
                  <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-normal w-7 text-right opacity-70">6.00</span>
                  <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-normal w-7 text-right opacity-70">4.00</span>
                  <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-normal w-7 text-right opacity-70">2.00</span>
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
                <h2 className="text-lg font-medium mb-2">Delivery Fee</h2>
                <h2 className="text-[28px] font-light">$0.00</h2>
              </div>

              <div className="space-y-2 mt-4 mb-6">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-normal w-7 opacity-70 text-right">10.00</span>
                  <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                </div>
                <div className="flex items-center gap-1 justify-end">
                  <span className="text-xs font-normal w-7 text-right opacity-70">8.00</span>
                  <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-normal w-7 text-right opacity-70">6.00</span>
                  <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-normal w-7 text-right opacity-70">4.00</span>
                  <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-normal w-7 text-right opacity-70">2.00</span>
                  <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-normal w-7 text-right opacity-70">0.00</span>
                  <div className="w-full flex-1 h-[1px] bg-black/20"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
            <div className="w-full shadow-10 rounded-[5px] bg-white">
              <div className="p-4 flex items-center">
                <h3 className="mr-4 text-lg font-semibold">Top Performing Products</h3>
              </div>

              <table className="w-full">
                <thead className="bg-[#f9fafb]">
                  <tr>
                    <th className="text-[#707275] font-semibold text-xs uppercase p-[.7rem] text-left border-b bordr-[#dae0ec]">Product</th>
                    <th className="text-[#707275] font-semibold text-xs uppercase p-[.7rem] border-b bordr-[#dae0ec] text-left">Merchant</th>
                    <th className="text-[#707275] font-semibold text-xs uppercase p-[.7rem] border-b bordr-[#dae0ec]">Quantity</th>
                  </tr>
                </thead>
              </table>
              <div className="w-full">
                <p className="text-[#212529] text-center text-sm my-2 p-3 mx-auto">There are no records to show</p>
              </div>
            </div>

            <div className="w-full shadow-10 rounded-[5px] bg-white">
              <div className="p-4 flex items-center">
                <h3 className="mr-4 text-lg font-semibold">Top Performing Merchants</h3>
              </div>

              <table className="w-full">
                <thead className="bg-[#f9fafb]">
                  <tr>
                    <th className="text-[#707275] font-semibold text-xs uppercase p-[.7rem] text-left border-b bordr-[#dae0ec]">Merchant</th>
                    <th className="text-[#707275] font-semibold text-xs uppercase p-[.7rem] border-b bordr-[#dae0ec]">Orders</th>
                  </tr>
                </thead>
              </table>
              <div className="w-full">
                <p className="text-[#212529] text-center text-sm my-2 p-3 mx-auto">There are no records to show</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
