import React from 'react';
import Layout from '../../components/Layout';
import GeneralIcon from "../../assets/general-icon.svg"
import OrderIcon from "../../assets/order-icon.svg"
import UserPermissionIcon from "../../assets/users-permission-icon.svg"
import ServiceableIcon from "../../assets/serviceable-zone-icon.svg"
import { Link } from 'react-router-dom';


const Settings = () => {
    return (
        <Layout>
            <section className='pt-[60px] pb-32'>
                {/* header */}
                <div className='py-[10px] px-5 lg:px-[50px] w-full sticky top-[60px] left-0 bg-white flex items-center justify-between shadow-2 h-[60px] mb-6'>
                    <h1 className='text-xl font-medium capitalize'>Settings</h1>
                </div>

                <div className='px-5 lg:px-[50px]'>
                    <div className='mb-16 max-w-[912px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 sm:gap-y-8 gap-x-12'>
                        <Link to='/settings/general'>
                            <div className='p-4 flex items-center gap-4 h-[60px] rounded-lg bg-white border border-[#e5e5e5] hover:border-[#3f30ed] transform transition-transform duration-300'>
                                <img src={GeneralIcon} alt="general setting icon" loading='lazy' className='h-[38px]' />
                                <h3 className='text-sm font-semibold text-[#3a3a3a] text-center'>General</h3>
                            </div>
                        </Link>

                        <Link to='/settings/order'>
                            <div className='p-4 flex items-center gap-4 h-[60px] rounded-lg bg-white border border-[#e5e5e5] hover:border-[#3f30ed] transform transition-transform duration-300'>
                                <img src={OrderIcon} alt="order setting icon" loading='lazy' className='h-[38px]' />
                                <h3 className='text-sm font-semibold text-[#3a3a3a] text-center'>Order</h3>
                            </div>
                        </Link>

                        <Link to='/settings/users'>
                            <div className='p-4 flex items-center gap-4 h-[60px] rounded-lg bg-white border border-[#e5e5e5] hover:border-[#3f30ed] transform transition-transform duration-300'>
                                <img src={UserPermissionIcon} alt="user-permission setting icon" loading='lazy' className='h-[38px]' />
                                <h3 className='text-sm font-semibold text-[#3a3a3a] text-center'>Users & Permissions</h3>
                            </div>
                        </Link>

                        <Link to='/settings/serviceable-zones'>
                            <div className='p-4 flex items-center gap-4 h-[60px] rounded-lg bg-white border border-[#e5e5e5] hover:border-[#3f30ed] transform transition-transform duration-300'>
                                <img src={ServiceableIcon} alt="serviceable-zone setting icon" loading='lazy' className='h-[38px]' />
                                <h3 className='text-sm font-semibold text-[#3a3a3a] text-center'>Serviceable zones</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Settings;
