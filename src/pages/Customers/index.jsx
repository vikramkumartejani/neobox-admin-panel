import React, { useState } from 'react'

import Layout from '../../components/Layout'
import CustomerTable from './Customers/CustomerTable';
import SegmentationTable from './SegmentationTable';
import Tab from './Tabs';
import { Link } from 'react-router-dom';




const Customers = () => {
    const [mainTab, setMainTab] = useState("Customers");

    const handleMainTabClick = (tab) => {
        setMainTab(tab);
    };


    return (
        <Layout>
            <section className='md:pt-[60px] pb-32'>
                {/* header  */}
                <div className='py-[10px] px-5 lg:px-[50px] w-full sticky top-0 md:top-[60px] left-0 bg-white flex items-center justify-between shadow-2 h-[60px] mb-6'>

                    {mainTab === "Customers" && <h1 className='text-xl font-medium capitalize'>Customers</h1>}
                    {mainTab === "Segmention" && <h1 className='text-xl font-medium capitalize'>Segmention</h1>}

                    {mainTab === "Customers" && (
                        <div className='flex gap-2'>
                            <Link to="/customer-import" className='bg-[#c9d2e3] py-[6px] px-3 rounded-md text-sm font-normal hover:bg-[#b0bdd6] transition-all duration-200'>Import</Link>
                            <Link to="/customer-export" className='bg-[#c9d2e3] py-[6px] px-3 rounded-md text-sm font-normal hover:bg-[#b0bdd6] transition-all duration-200'>Export</Link>
                        </div>
                    )}
                </div>

                <div className='px-5 lg:px-[50px]'>
                    <div className='max-w-[1200px] w-full mx-auto'>

                        <div>
                            {/* Tabs */}
                            <Tab
                                tabs={["Customers", "Segmention"]}
                                activeTab={mainTab}
                                onTabClick={handleMainTabClick}
                            />

                            <div className='pt-12'>
                                {mainTab === "Customers" && (
                                    <CustomerTable />
                                )}

                                {mainTab === "Segmention" && (
                                    <SegmentationTable />
                                )}
                            </div>


                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Customers