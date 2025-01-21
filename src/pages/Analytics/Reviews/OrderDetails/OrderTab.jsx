import React from 'react'
import { GoCircle } from "react-icons/go";
import { GiPlainCircle } from "react-icons/gi";
import BarbecuLogo from "../../../../assets/barbeque.jpg"
import Star from "../../../../assets/full-star.svg"


const OrderTab = () => {
  return (
    <div>
      <div className='border-b border-[#dae0ec] px-4 py-1 flex justify-end'>
        <button className='bg-[#0671e3] border border-[#0671e3] text-white rounded text-center py-1 px-4 hover:opacity-90 transition-all duration-300'>Print</button>
      </div>

      <div className='my-2 p-5'>
        <div className='flex flex-wrap'>
          <div className='w-10 px-2 text-center relative'>
            <span className='text-[.9em] relative text-[#008000]'><GoCircle /></span>
            <span className='border-l-[.336606px] absolute left-[38%] top-[15px] h-full'></span>
          </div>

          <div className='flex-1 flex px-2'>
            <p className='text-[#13151680] text-sm pr-2 pb-4'>
              Pick:
            </p>

            <div className='text-sm pl-2 pb-4 flex-1'>
              <span className='text-[#0671e3] block'> donald-foods-products </span>
              <span> 2525 Avenue Gérard Leduc</span>
            </div>

            <img src={BarbecuLogo} alt="BarbecuLogo" className='rounded-md w-10 h-10 object-cover' />

          </div>
        </div>

        <div className='flex flex-wrap'>
          <div className='w-10 px-2 text-center relative'>
            <span className='text-[.9em] relative text-[#008000]'><GiPlainCircle /></span>
          </div>

          <div className='flex-1 flex px-2'>
            <p className='text-[#13151680] text-sm pr-2 pb-4'>
              Drop:
            </p>

            <div className='text-sm pl-2 pb-4 flex-1'>
              Seb <br />
              1110 Boulevard Moody, Terrebonne, QC J6W 3K9, Canada <br />
              Building: 1237, City: Terrebonne
            </div>


          </div>
        </div>

        <div className='ml-[8.3%] px-2 text-sm'>
          <div className='flex mb-2'>
            <p className='text-black/50 mr-1'>Mob:</p>
            <p>+15143214565</p>
          </div>

          <div className='flex mb-2'>
            <p className='text-black/50 mr-1'>Type:</p>
            <p>+Delivery</p>
          </div>

          <div className='flex mb-2'>
            <p className='text-black/50 mr-1'>Mop:</p>
            <p>+Invoice</p>
          </div>

          <div className='flex mb-2'>
            <p className='text-black/50 mr-1'>Source:</p>
            <p>+ios</p>
          </div>

          <div className='flex mb-2'>
            <p className='text-black/50 mr-3'>Reviews:</p>
            <div>
              <div className='flex gap-1'>
                <img src={Star} alt="Star" className='h-[14px]' />
                <img src={Star} alt="Star" className='h-[14px]' />
                <img src={Star} alt="Star" className='h-[14px]' />
                <img src={Star} alt="Star" className='h-[14px]' />
                <img src={Star} alt="Star" className='h-[14px]' />
              </div>
              <p className='text-sm my-1'>super !</p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#f8f8f8] border-y border-black/10 p-5 text-lg font-medium uppercase'>
        Bill Details
      </div>

      <div className='mb-20'>
        <table className='w-full'>
          <thead className='bg-[#f9fafb]'>
            <tr>
              <th className='px-4 pt-4 pb-2 text-sm text-[#707275] text-left uppercase'> Product </th>
              <th className='px-4 pt-4 pb-2 text-sm text-[#707275] uppercase text-center'>  Qty  </th>
              <th className='px-4 pt-4 pb-2 text-sm text-[#707275] uppercase text-right'> Price </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='py-[.7rem] px-[.9rem] text-sm text-left border-t border-[#f2f2f2]'>
                <h6 className='text-[#666] px-1 font-semibold'>bbq sauces</h6>
                <div className='ml-3 my-2'>
                  <h6 className='text-[#0b1223] font-semibold'>units</h6>
                  <div className='text-[#13151680]'>1x case of 12</div>
                </div>
              </td>
              <td className='px-4 pt-4 pb-2 text-sm text-[#707275] text-center'>1</td>
              <td className='px-4 pt-4 pb-2 text-sm text-[#707275] text-right'>
                <h6>$100</h6>
                <div className='my-4'>$0</div>
              </td>
            </tr>

            <tr className='border-y border-black/10'>
              <td className='px-4 pb-2 pt-4 text-sm font-semibold text-[#707275]'>
                Subtotal
              </td>
              
              <td></td>

              <td className='px-4 pb-2 pt-4 text-sm text-right font-semibold'>
                $100.00
              </td>
            </tr>

            <tr>
              <td className='px-4 pt-2 text-sm font-semibold text-[#707275]'>
                Total
              </td>

              <td></td>

              <td className='px-4 pt-2 text-right text-base font-semibold'>
                $100.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderTab