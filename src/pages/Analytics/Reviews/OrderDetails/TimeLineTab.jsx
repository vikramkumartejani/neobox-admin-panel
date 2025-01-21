import React from 'react'
import { GiPlainCircle } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";


const TimeLineTab = () => {
    return (
        <div>
            <div className='my-2 p-5'>
                <div className='flex flex-wrap pb-4'>
                    <div className='w-[70px]'></div>

                    <div className='w-12 px-2 text-center relative'>
                        <div className='mr-8 min-w-[30px] w-[30px]'>
                            <span className='text-[.9em] text-[#212837] rounded-lg bg-[#0b12230d] w-[30px] h-[30px] flex items-center justify-center'><FaLocationDot /></span>
                        </div>
                        <div className='ml-[14px] w-[1px] border-l-2 border-black h-full'></div>
                    </div>

                    <div className='text-sm pl-2 pb-4 flex-1'>
                        <span className='text-[13px] block'>Merchant</span>
                        <span className='text-sm font-semibold'>donald-foods-products</span>
                    </div>
                </div>

                <div className='flex flex-wrap pb-4 mt-1'>
                    <div className='w-[70px]'>
                        <h6 className='text-[13px] font-semibold'>12:13 AM</h6>
                        <p className='text-[11px]'>14 Dec 2024</p>
                    </div>

                    <div className='w-12 px-2 text-center relative'>
                        <div className='mr-8 min-w-[30px] w-[30px]'>
                            <span className='text-[.9em] text-[#008000] w-[30px] flex items-center justify-center'><GiPlainCircle /></span>
                        </div>
                    </div>

                    <div className='text-sm pl-2 pb-4 flex-1'>
                        <span className='text-sm font-semibold'>en attente</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default TimeLineTab