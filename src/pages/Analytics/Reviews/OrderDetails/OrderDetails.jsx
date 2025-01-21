import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import CustomerTab from "./CustomerTab";
import TimeLineTab from "./TimeLineTab";
import OrderTab from "./OrderTab";




const OrderDetails = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('order');



    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        // Cleanup when the component unmounts
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isOpen]);

    return (
        <>
            {/* Modal */}
            <div className={`fixed top-0 right-0 w-full shadow-8 max-w-[600px] bg-white shadow-lg z-50 transform transition-transform duration-300 h-screen overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"}`} >
                {/* header  */}
                <div className="bg-[#071331] pt-8 px-5 border-b border-[#f2f2f2]">
                    <div className="flex flex-wrap gap-8">
                        <button onClick={onClose}><IoCloseSharp size={25} className="text-white" /></button>

                        <div>
                            <div className="flex items-center gap-2 text-white font-medium text-sm mb-2">
                                Order #1048 <span className="bg-[#cee9fe] text-xs px-2 py-1 rounded-[30px] text-black">Delivery</span>
                            </div>

                            <p className="text-[#ffffff80] font-semibold text-lg">14 Dec 2024 00:13 AM</p>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3">
                        <div className="px-2 text-center">
                            <button onClick={() => setActiveTab('order')} className={`border-b-4 pb-[.8rem] text-center text-sm p-3 mr-2 ${activeTab === "order" ? "text-white border-[#0671e3]" : "text-[#ffffff80] border-transparent hover:text-white duration-300 transition-colorsF"}`}>
                                Order
                            </button>
                        </div>

                        <div className="px-2 text-center">
                            <button onClick={() => setActiveTab('timeline')} className={`border-b-4 pb-[.8rem] text-center text-sm p-3 mr-2 ${activeTab === "timeline" ? "text-white border-[#0671e3]" : "text-[#ffffff80] border-transparent hover:text-white duration-300 transition-colorsF"}`}>
                                Timeline
                            </button>
                        </div>

                        <div className="px-2 text-center">
                            <button onClick={() => setActiveTab('customer')} className={`border-b-4 pb-[.8rem] text-center text-sm p-3 mr-2 ${activeTab === "customer" ? "text-white border-[#0671e3]" : "text-[#ffffff80] border-transparent hover:text-white duration-300 transition-colorsF"}`}>
                                Customer
                            </button>
                        </div>
                    </div>
                </div>


                {/* Render Components */}
                <div>
                    {activeTab === 'order' && (
                        <div>
                            <OrderTab />
                        </div>
                    )}
                    {activeTab === 'timeline' && (
                        <div>
                            <TimeLineTab />
                        </div>
                    )}
                    {activeTab === 'customer' && (
                        <div>
                            <CustomerTab />
                        </div>
                    )}
                </div>

            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={onClose}
                ></div>
            )}
        </>
    )
}

export default OrderDetails