import React from 'react'

const TimeZone = () => {
  return (
    <div className="flex gap-5 items-start justify-between flex-col xl:flex-row">
      <div className='max-w-[33%] w-full'>
        <h2 className="text-xl font-medium mb-2 text-wrap">Timezone</h2>
        <p className="text-sm text-[#606060]">
          Timezone your products are sold in.
        </p>
      </div>

      <div className="w-full shadow-6 p-3 md:p-5 bg-white rounded-md xl:max-w-[66%]">
        <fieldset>
          <label htmlFor="merchant_country" className='pb-2 block font-medium text-sm'>Timezone</label>
          <select className="custom-select w-full border-[0.5px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md" required="required" aria-required="true">
            <option value="Africa/Abidjan">Africa/Abidjan</option>
            <option value="Africa/Accra">Africa/Accra</option>
            <option value="Africa/Addis_Ababa">Africa/Addis_Ababa</option>
            <option value="Africa/Algiers">Africa/Algiers</option>
            <option value="Africa/Asmara">Africa/Asmara</option>
            <option value="Africa/Bamako">Africa/Bamako</option>
          </select>
        </fieldset>
      </div>
    </div>
  )
}

export default TimeZone