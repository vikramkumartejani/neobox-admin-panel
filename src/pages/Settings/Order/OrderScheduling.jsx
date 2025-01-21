import React, { useState } from 'react'
import Toggle from '../../../components/Toggle';

const OrderScheduling = () => {
    const [isEnabled, setIsEnabled] = useState(true);

    return (
        <div className="flex gap-5 items-start justify-between flex-col xl:flex-row">
            <div className='xl:max-w-[33%] w-full'>
                <h2 className="text-xl font-medium mb-2 text-wrap">Order Scheduling</h2>
            </div>

            <div className="w-full xl:max-w-[66%]">
                <div className="flex items-center gap-4">
                    <p
                        className={`text-lg font-medium transition-opacity uppercase duration-300 ${isEnabled ? "opacity-50" : "opacity-100"}`}
                    >
                        Disable
                    </p>
                    <Toggle
                        enabled={isEnabled}
                        onChange={() => setIsEnabled(!isEnabled)}
                    />
                    <p
                        className={`text-lg font-medium transition-opacity uppercase duration-300 ${isEnabled ? "opacity-100" : "opacity-50"}`}
                    >
                        Enable
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OrderScheduling