import React from 'react'
import BarchartIcon from "../../../assets/bar-chart.png"
import CommissionIcon from "../../../assets/commission-icon.png"
import OrdersIcon from "../../../assets/orders-icon.png"
import CancelIcon from "../../../assets/cancel-icon.png"

const Boxes = () => {
    return (
        <div className='mb-16 max-w-[800px] w-full grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8'>
            <div className='p-5 flex flex-col items-center shadow-6 rounded bg-white'>
                <img src={BarchartIcon} alt="bar chart icon" />
                <p className="mt-[0.7rem] mb-6 text-[#13151680] text-sm">Total Sales</p>
                <h3 className='text-2xl mb-2 font-semibold'>$0.00</h3>
            </div>

            <div className='p-5 flex flex-col items-center shadow-6 rounded bg-white'>
                <img src={CommissionIcon} alt="commission icon" />
                <p className="mt-[0.7rem] mb-6 text-[#13151680] text-sm">Total Commission</p>
                <h3 className='text-2xl mb-2 font-semibold'>$0.00</h3>
            </div>

            <div className='p-5 flex flex-col items-center shadow-6 rounded bg-white'>
                <img src={OrdersIcon} alt="orders icon" />
                <p className="mt-[0.7rem] mb-6 text-[#13151680] text-sm">Total Orders</p>
                <h3 className='text-2xl mb-2 font-semibold'>0</h3>
            </div>

            <div className='p-5 flex flex-col items-center shadow-6 rounded bg-white'>
                <img src={CancelIcon} alt="Cancel icon" />
                <p className="mt-[0.7rem] mb-6 text-[#13151680] text-sm">Cancelled orders</p>
                <h3 className='text-2xl mb-2 font-semibold'>0</h3>
            </div>
        </div>
    )
}

export default Boxes