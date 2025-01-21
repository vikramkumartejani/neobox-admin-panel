import React, { useState } from "react";
import Layout from "../../components/Layout";
import CouponsTable from "./CouponsTable";
import PopupsTable from "./PopupsTable";
import NotificationCampaignsTable from "./NotificationCampaignsTable";
import CreatePopups from "./CreatePopus/CreatePopus";
import AddCouponsModal from "./AddCoupns/AddCoupons";




const Coupons = () => {
    const [activeTab, setActiveTab] = useState('coupons');
    const [isOpenAddCouponModal, setIsOpenAddCouponModal] = useState(false)
    const [isOpenCreatePopusModal, setIsOpenCreatePopusModal] = useState(false)


    // Create New Coupons 
    const handleOpenAddCouponModal = () => {
        setIsOpenAddCouponModal(true)
    }
    const handleCloseAddCouponModal = () => {
        setIsOpenAddCouponModal(false)
    }

    // Create New Popus 
    const handleOpenCreatePopusModal = () => {
        setIsOpenCreatePopusModal(true)
    }
    const handleCloseCreatePopusModal = () => {
        setIsOpenCreatePopusModal(false)
    }

    return (
        <Layout>
            <section className="pt-[60px] pb-32">
                {/* Header */}
                <div className="py-[10px] px-5 lg:px-[50px] w-full sticky top-[60px] left-0 bg-white flex items-center justify-between shadow-2 h-[60px] mb-6">
                    {/* Titles  */}
                    <div>
                        {activeTab === "coupons" && <h1 className="text-xl font-medium capitalize">Coupons</h1>}
                        {activeTab === "popups" && <h1 className="text-xl font-medium capitalize">Popups</h1>}
                        {activeTab === "pushnotifications" && <h1 className="text-xl font-medium capitalize">Notification Campaigns</h1>}
                    </div>
                    {/* btns  */}
                    <div>
                        {activeTab === "coupons" &&
                            <button onClick={handleOpenAddCouponModal} className="bg-[#0671E3] text-white py-[6px] px-3 rounded-md text-[15px] font-normal hover:bg-opacity-90 transition-all duration-200">
                                Create New
                            </button>
                        }
                        {activeTab === "popups" &&
                            <button onClick={handleOpenCreatePopusModal} className="bg-[#0671E3] text-white py-[6px] px-3 rounded-md text-[15px] font-normal hover:bg-opacity-90 transition-all duration-200">
                                Create New
                            </button>
                        }
                        {activeTab === "pushnotifications" &&
                            <button className="bg-[#0671E3] text-white py-[6px] px-3 rounded-md text-[15px] font-normal hover:bg-opacity-90 transition-all duration-200">
                                Create
                            </button>
                        }
                    </div>
                </div>

                <div className="px-5 lg:px-[50px]">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="max-w-fit overflow-auto overflow-x-scroll overflow-y-hidden scroll-smooth mb-12 scrollbar">
                            <div className="border border-[#c4c4c4] rounded-[10px] w-fit flex">
                                {/* Coupons Tab */}
                                <button
                                    onClick={() => setActiveTab('coupons')}
                                    className={`w-full min-w-[150px] text-sm capitalize py-2 ${activeTab === 'coupons'
                                        ? 'bg-black text-white rounded-[10px]'
                                        : 'bg-white text-[#131516] rounded-tl-[10px] rounded-bl-[10px]'
                                        }`}
                                >
                                    <div className={`px-[.8rem] ${activeTab === 'coupons' || activeTab === 'popups' ? "border-r-0" : "border-r border-[#c4c4c4]"}`}>Coupons</div>
                                </button>

                                {/* popups Tab */}
                                <button
                                    onClick={() => setActiveTab('popups')}
                                    className={`w-full min-w-[150px] text-sm capitalize py-2 ${activeTab === 'popups'
                                        ? 'bg-black text-white rounded-[10px]'
                                        : 'bg-white text-[#131516]'
                                        }`}
                                >
                                    <div className={`px-[.8rem]`}>Popups</div>
                                </button>

                                {/* Push Notifications Tab */}
                                <button
                                    onClick={() => setActiveTab('pushnotifications')}
                                    className={`w-[150px] min-w-[150px] text-sm capitalize py-2 ${activeTab === 'pushnotifications'
                                        ? 'bg-black text-white rounded-[10px]'
                                        : 'bg-white text-[#131516] rounded-tr-[10px] rounded-br-[10px]'
                                        }`}
                                >
                                    <div className={`px-[.8rem] whitespace-nowrap ${activeTab === 'pushnotifications' || activeTab === 'popups' ? "border-l-0 border-l-black" : "border-l border-[#c4c4c4]"}`}>Push Notifications</div>
                                </button>
                            </div>
                        </div>

                        {/* Render Components */}
                        <div>
                            {activeTab === 'coupons' && (
                                <div>
                                    <CouponsTable />
                                </div>
                            )}
                            {activeTab === 'popups' && (
                                <div>
                                    <PopupsTable />
                                </div>
                            )}
                            {activeTab === 'pushnotifications' && (
                                <div>
                                    <NotificationCampaignsTable />
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </section>

            {isOpenAddCouponModal && <AddCouponsModal onClose={handleCloseAddCouponModal} />}
            {isOpenCreatePopusModal && <CreatePopups onClose={handleCloseCreatePopusModal} />}
        </Layout>
    )
}

export default Coupons