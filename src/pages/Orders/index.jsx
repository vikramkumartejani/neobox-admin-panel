import React, { useState } from "react";
import Layout from "../../components/Layout";
import Tab from "./Tab";
import SubTab from "./SubTab";
import Dropdown from "./Dropdown";
import OrdersTable from "./OrdersTable";
import CalendarDropdown from "../../components/Calendar";

const ordersData = {
  All: [
    {
      id: "ORD001",
      date: "2025-01-10 10:00 AM",
      merchant: "Merchant A",
      customer: "Customer X",
      items: 3,
      total: "$150",
      type: "Pickup",
      payment: "Paid",
      status: "Completed",
      notes: "None",
    },
    {
      id: "ORD002",
      date: "2025-01-11 02:30 PM",
      merchant: "Merchant B",
      customer: "Customer Y",
      items: 5,
      total: "$250",
      type: "Delivery",
      payment: "Pending",
      status: "Processing",
      notes: "Urgent",
    },
  ],
  Pending: [
    {
      id: "ORD003",
      date: "2025-01-12 01:00 PM",
      merchant: "Merchant C",
      customer: "Customer Z",
      items: 2,
      total: "$100",
      type: "Delivery",
      payment: "Pending",
      status: "Pending",
      notes: "Call before delivery",
    },
  ],
  Accepted: [],
  Ready: [],
  Collected: [],
  Completed: [
    {
      id: "ORD004",
      date: "2025-01-09 09:00 AM",
      merchant: "Merchant A",
      customer: "Customer X",
      items: 4,
      total: "$200",
      type: "Pickup",
      payment: "Paid",
      status: "Completed",
      notes: "-",
    },
  ],
  Cancelled: [],
};

const scheduledData = [
  {
    id: "SCH001",
    date: "2025-01-15 12:00 PM",
    merchant: "Merchant D",
    customer: "Customer W",
    items: 1,
    total: "$50",
    type: "Delivery",
    completedIn: "-",
    payment: "Paid",
    status: "Scheduled",
    notes: "Deliver before 1 PM",
  },
  {
    id: "SCH002",
    date: "2025-01-16 03:00 PM",
    merchant: "Merchant E",
    customer: "Customer V",
    items: 2,
    total: "$120",
    type: "Pickup",
    completedIn: "-",
    payment: "Pending",
    status: "Scheduled",
    notes: "None",
  },
];

const Orders = () => {
  const [mainTab, setMainTab] = useState("All Orders");
  const [activeSubTab, setActiveSubTab] = useState("All");
  const [selectedOption, setSelectedOption] = useState(25);

  const handleMainTabClick = (tab) => {
    setMainTab(tab);
    setActiveSubTab(tab === "Scheduled" ? "" : "All");
  };

  const handleSubTabClick = (tab) => {
    setActiveSubTab(tab);
  };

  return (
    <Layout>
      <section className="pt-[60px] pb-32">
        {/* Header */}
        <div className="py-[10px] px-5 lg:px-[50px] w-full sticky top-0 bg-white shadow-2 h-[60px] mb-12 flex items-center justify-between">
          <h1 className="text-xl font-medium capitalize">Orders</h1>

          <CalendarDropdown />
        </div>

        <div className="px-5 lg:px-[50px] pb-10">
          <div className="max-w-[1200px] w-full mx-auto">
            <div className="flex justify-between lg:items-center mb-8 gap-5 flex-col lg:flex-row">
              <div className="flex gap-5 lg:gap-10 flex-1 flex-col lg:flex-row">
                {/* Tabs */}
                <Tab
                  tabs={["All Orders", "Scheduled"]}
                  activeTab={mainTab}
                  onTabClick={handleMainTabClick}
                />

                <input
                  type="text"
                  placeholder="Search Orders"
                  className="bg-white border border-[#d2cfcf] rounded-md px-3 py-[6px] h-9 text-base text-[#3c4e71] w-full lg:max-w-[330px]"
                />
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#869ac0]">Per Page</span>
                <Dropdown
                  options={[25, 50, 75, 100]}
                  selectedOption={selectedOption}
                  onOptionChange={(e) => setSelectedOption(Number(e.target.value))}
                />
              </div>
            </div>

            {mainTab === "All Orders" && (
              <div className="shadow-3 rounded-lg bg-white overflow-y-hidden">
                <SubTab
                  tabs={Object.keys(ordersData)}
                  activeTab={activeSubTab}
                  onTabClick={handleSubTabClick}
                />

                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm border-collapse">
                    <thead className="bg-[#f9fafb] rounded-2xl">
                      <tr>
                        <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">ORDER ID</th>
                        <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">DATE & TIME</th>
                        <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">MERCHANT</th>
                        <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">CUSTOMER</th>
                        <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">ITEMS</th>
                        <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">TOTAL</th>
                        <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">TYPE</th>
                        <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">PAYMENT</th>
                        <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">STATUS</th>
                        <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">NOTES</th>
                      </tr>
                    </thead>
                    <tbody>
                      <OrdersTable data={ordersData[activeSubTab] || []} />
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {mainTab === "Scheduled" && (
              <div className="overflow-x-auto shadow-3 rounded-lg bg-white">
                <table className="min-w-full text-sm border-collapse">
                  <thead className="bg-[#f9fafb] rounded-2xl">
                    <tr>
                      <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">ORDER ID</th>
                      <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">DATE & TIME</th>
                      <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">MERCHANT</th>
                      <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">CUSTOMER</th>
                      <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">ITEMS</th>
                      <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">TOTAL</th>
                      <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">TYPE</th>
                      <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">PAYMENT</th>
                      <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">STATUS</th>
                      <th className="font-semibold border-b border-[#dae0ec] uppercase text-xs p-[.9rem] whitespace-nowrap text-[#707275]">NOTES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <OrdersTable data={scheduledData} />
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Orders;
