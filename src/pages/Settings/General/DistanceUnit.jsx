import React from 'react'

const DistanceUnit = () => {
  return (
    <div className="flex gap-5 items-start justify-between flex-col xl:flex-row">
      <div className='max-w-[33%] w-full'>
        <h2 className="text-xl font-medium mb-2 text-wrap">Default Distance Unit</h2>
        <p className="text-sm text-[#606060]">
          This includes Default Distance settings
        </p>
      </div>

      <div className="w-full shadow-6 p-3 md:p-5 bg-white rounded-md xl:max-w-[66%]">
        <fieldset>
          <label htmlFor="distance_unit" className='pb-2 block font-medium text-sm'>Distance Unit</label>

          <select className="custom-select w-full border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md" required="required" aria-required="true">
            <option value="km">Kilometers</option>
            <option value="mi">Miles</option>
          </select>
        </fieldset>
      </div>
    </div>
  )
}

export default DistanceUnit