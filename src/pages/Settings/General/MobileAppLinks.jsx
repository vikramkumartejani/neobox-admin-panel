import React, { useState } from 'react'

const MobileAppLinks = () => {
  const [activeTab, setActiveTab] = useState('appstore');

  return (
    <div className="flex gap-5 items-start justify-between flex-col xl:flex-row">
      <div className='max-w-[33%] w-full'>
        <h2 className="text-xl font-medium mb-2 text-wrap">Mobile App Links</h2>
        <p className="text-sm text-[#606060]">
          Playstore and Appstore links of your Mobile application
        </p>
      </div>

      <div className='w-full xl:max-w-[66%]'>
        <div className="flex bg-white rounded-[10px] overflow-hidden w-fit border border-[#c4c4c4] mb-12">
          <button
            className={`min-w-[150px] md:min-w-[180px] p-2 rounded-[10px] border border-transparent text-sm ${activeTab === "appstore" ? "bg-[#131516] text-white" : "bg-transparent text-black"
              }`}
            onClick={() => setActiveTab('appstore')}
          >
            Appstore
          </button>

          <button
            className={`min-w-[150px] md:min-w-[180px] p-2 rounded-[10px] border border-transparent text-sm ${activeTab === "playstore" ? "bg-[#131516] text-white" : "bg-transparent text-black"
              }`}
            onClick={() => setActiveTab('playstore')}
          >
            Playstore
          </button>
        </div>

        <div className="w-full shadow-6 p-3 md:p-5 bg-white rounded-md">
          {activeTab === "appstore" && (
            <fieldset className='mb-4'>
              <label htmlFor="appstore" className='pb-2 block font-medium text-sm'>Appstore</label>
              <input type="text" placeholder='https://apps.apple.com' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
            </fieldset>
          )}

          {activeTab === "playstore" && (
            <fieldset className='mb-4'>
              <label htmlFor="playstore" className='pb-2 block font-medium text-sm'>Playstore</label>
              <input type="text" placeholder='https://playstore.google.com' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
            </fieldset>
          )}
        </div>
      </div>
    </div>
  )
}

export default MobileAppLinks