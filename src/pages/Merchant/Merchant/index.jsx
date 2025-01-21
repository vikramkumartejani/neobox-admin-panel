import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import Layout from '../../../components/Layout'
import MerchantTable from './MerchantTable'
import CategoryTable from './CategoryTable'
import CreateCategory from './CreateCategory'

const Supplier = () => {
    const [activeTab, setActiveTab] = useState('merchant');
    const [isOpenCreateCatgeory, setIsCreateCatgeory] = useState(false);


    const handleOpenCreateMerchant = () => setIsCreateCatgeory(true);
    const handleCloseCreateMerchant = () => setIsCreateCatgeory(false);


    return (
        <Layout>
            <section className="md:pt-[60px] pb-20">
                {/* Header */}
                <div className="py-[10px] px-5 lg:px-[50px] w-full sticky top-0 md:top-[60px] left-0 bg-white flex items-center justify-between shadow-2 h-[60px] mb-6">
                    {activeTab == "merchant" && (<h1 className="text-xl font-medium capitalize">Merchant</h1>)}
                    {activeTab == "category" && (<h1 className="text-xl font-medium capitalize">Categories</h1>)}

                    <div className="flex gap-2">
                        {activeTab === 'merchant' && (
                            <>
                                <button className="bg-[#0671E3] text-white py-[6px] px-3 rounded-md text-xs sm:text-[15px] font-normal hover:bg-opacity-90 transition-all duration-200">
                                    Create New
                                </button>

                                <Link to="/product-import" className="bg-[#c9d2e3] py-[6px] px-3 rounded-md text-xs sm:text-[15px] font-normal hover:bg-opacity-90 transition-all duration-200">
                                    Import
                                </Link>

                                <Link to="/product-export" className="bg-[#c9d2e3] py-[6px] px-3 rounded-md text-xs sm:text-[15px] font-normal hover:bg-opacity-90 transition-all duration-200">
                                    Export
                                </Link>
                            </>
                        )}

                        {activeTab === "category" && (
                            <button onClick={handleOpenCreateMerchant} className="bg-[#0671E3] text-white py-[6px] px-3 rounded-md text-[15px] font-normal hover:bg-opacity-90 transition-all duration-200">
                                Create New
                            </button>
                        )}
                    </div>
                </div>

                <div className="px-5 lg:px-[50px]">
                    {/* Tabs */}
                    <div className="flex bg-white rounded-[10px] overflow-hidden w-fit border border-[#c4c4c4] mb-12">
                        <button
                            className={`min-w-[150px] md:min-w-[180px] p-2 rounded-[10px] border border-transparent text-sm ${activeTab === "merchant" ? "bg-[#131516] text-white" : "bg-transparent text-black"
                                }`}
                            onClick={() => setActiveTab('merchant')}
                        >
                            Merchant
                        </button>

                        <button
                            className={`min-w-[150px] md:min-w-[180px] p-2 rounded-[10px] border border-transparent text-sm ${activeTab === "category" ? "bg-[#131516] text-white" : "bg-transparent text-black"
                                }`}
                            onClick={() => setActiveTab('category')}
                        >
                            Category
                        </button>
                    </div>

                    {/* Render Components */}
                    <div>
                        {activeTab === 'merchant' && (
                            <div>
                                <MerchantTable />
                            </div>
                        )}
                        {activeTab === 'category' && (
                            <div>
                                <CategoryTable />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {isOpenCreateCatgeory && <CreateCategory onClose={handleCloseCreateMerchant} />}
        </Layout>

    )
}

export default Supplier