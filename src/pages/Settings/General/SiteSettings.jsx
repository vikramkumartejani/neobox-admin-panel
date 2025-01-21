import React from 'react';

const SiteSettings = () => {

    return (
        <div>
            <div className="flex gap-5 items-start justify-between flex-col xl:flex-row">
                <div className='max-w-[33%] w-full'>
                    <h2 className="text-xl font-medium mb-2 text-wrap">Site Settings</h2>
                    <p className="text-sm text-[#606060]">
                        This includes basic site settings
                    </p>
                </div>

                <div className="w-full shadow-6 p-3 md:p-5 bg-white rounded-md xl:max-w-[66%]">
                    <fieldset className='mb-2 flex justify-end'>
                        <select className="custom-select w-full border-[0.5px] max-w-[150px] border-[#d2cfcf] inline-block h-10 py-[6px] px-3 text-[#3c4e71] rounded-md">
                            <option value="true">Select Locale</option>
                            <option value="english">English</option>
                        </select>
                    </fieldset>

                    <fieldset className='mb-4'>
                        <label htmlFor="site_title" className='pb-2 block font-medium text-sm'>Site Title</label>
                        <input type="text" placeholder='Site Title' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                    </fieldset>

                    <fieldset className='mb-4'>
                        <label htmlFor="site_tagline" className='pb-2 block font-medium text-sm'>Site Tagline</label>
                        <input type="text" placeholder='Site Tagline' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default SiteSettings;
