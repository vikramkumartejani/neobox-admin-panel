import React, { useState } from 'react'
import Toggle from '../../../components/Toggle';

const AcceptOrders = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div className="flex gap-5 items-start justify-between flex-col xl:flex-row">
      <div className="xl:max-w-[33%] w-full">
        <h2 className="text-xl font-medium mb-2 text-wrap">Accept Orders</h2>
        <p className="text-sm text-[#606060]">
          Order accepting/not accepting setting
        </p>
      </div>

      <div className="w-full xl:max-w-[66%]">
        {/* Toggle for Enable/Disable */}
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

        <div className="w-full shadow-6 p-3 md:p-5 bg-white rounded-md mt-6">
          <fieldset className='mb-4'>
            <label htmlFor="custom_message" className='pb-2 block font-medium text-sm'>Custom Message</label>
            <input
              type="text"
              placeholder='Currently we are not accepting orders. Come gain after sometime.'
              className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md'
              disabled={!isEnabled}
              style={{ backgroundColor: !isEnabled ? "#dae0ec" : "white" }}
            />
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default AcceptOrders