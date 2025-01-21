import React from 'react'

const CurrencySetting = () => {
  return (
    <div className="flex gap-5 items-start justify-between flex-col xl:flex-row">
      <div className='max-w-[33%] w-full'>
        <h2 className="text-xl font-medium mb-2 text-wrap">Currency</h2>
        <p className="text-sm text-[#606060]">
          The Currency your products are sold in.
        </p>
      </div>

      <div className="w-full shadow-6 p-3 md:p-5 bg-white rounded-md xl:max-w-[66%]">
        <fieldset className='mb-4'>
          <label htmlFor="currency" className='pb-2 block font-medium text-sm'>Currency</label>
          <select className="custom-select w-full border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md" required="required" aria-required="true">
            <option value="EUR">Euro (€)</option>
            <option value="AED">United Arab Emirates Dirham (AED)</option>
            <option value="AFN">Afghan Afghani (Af)</option>
            <option value="XCD">Eastern Caribbean Dollar (EC$)</option>
            <option value="ALL">Albanian Lek (ALL)</option>
            <option value="AMD">Armenian Dram (AMD)</option>
          </select>
        </fieldset>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
          <fieldset>
            <label htmlFor="symbol_type" className='pb-2 block font-medium text-sm'>Symbol Type</label>
            <select className="custom-select w-full border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md" required="required" aria-required="true">
              <option value="symbol">Symbol (PKRs)</option>
              <option value="symbol_native">Symbol Native (₨)</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="symbol_direction" className='pb-2 block font-medium text-sm'>Symbol Direction</label>
            <select className="custom-select w-full border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md" required="required" aria-required="true">
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </fieldset>

        </div>
      </div>
    </div>
  )
}

export default CurrencySetting