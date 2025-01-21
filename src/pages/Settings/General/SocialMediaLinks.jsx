import React from 'react'
import { FiPlus } from "react-icons/fi";

const SocialMediaLinks = () => {
  return (
    <div className="flex gap-5 items-start justify-between flex-col xl:flex-row">
      <div className='max-w-[33%] w-full'>
        <h2 className="text-xl font-medium mb-2 text-wrap">Social Media Links</h2>
        <p className="text-sm text-[#606060]">
          Update Social Media pages links
        </p>
      </div>

      <div className='w-full xl:max-w-[66%]'>
        <div className="w-full shadow-6 p-3 md:p-5 bg-white rounded-md">
          <fieldset className='mb-4'>
            <label htmlFor="facebook" className='pb-2 block font-medium text-sm'>Facebook</label>
            <input type="text" placeholder='www.facebook.com' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
          </fieldset>

          <fieldset className='mb-4'>
            <label htmlFor="instagram" className='pb-2 block font-medium text-sm'>Instagram</label>
            <input type="text" placeholder='www.instagram.com' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
          </fieldset>

          <fieldset className='mb-4'>
            <label htmlFor="twitter" className='pb-2 block font-medium text-sm'>Twitter</label>
            <input type="text" placeholder='www.twitter.com' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
          </fieldset>

          <fieldset className='mb-4'>
            <label htmlFor="linkedin" className='pb-2 block font-medium text-sm'>Linkedin</label>
            <input type="text" placeholder='www.linkedin.com' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
          </fieldset>

          <fieldset className='mb-4'>
            <label htmlFor="youTube" className='pb-2 block font-medium text-sm'>YouTube</label>
            <input type="text" placeholder='www.youtube.com' className='border-[.5px] border-[#d2cfcf] h-10 text-base py-[6px] px-3 w-full rounded-md' />
          </fieldset>
        </div>

        <button className='px-3 py-[6px] flex items-center gap-1 mt-2 rounded-md bg-[#212837] text-white text-center text-sm hover:bg-[#13171f] transition-all duration-300'>
          Add New
          <FiPlus />
        </button>
      </div>
    </div>
  )
}

export default SocialMediaLinks