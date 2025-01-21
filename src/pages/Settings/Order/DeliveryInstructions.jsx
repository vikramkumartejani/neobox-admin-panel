import React, { useState } from 'react'
import Toggle from '../../../components/Toggle';
import { FiPlus } from "react-icons/fi";
import EditIcon from "../../../assets/edit-icon.svg";
import DeleteIcon from "../../../assets/delete-icon.svg";


const data = [
  { name: "djlsjkljz" }
];


const DeliveryInstructions = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div className="flex gap-5 items-start justify-between flex-col xl:flex-row">
      <div className="xl:max-w-[33%] w-full">
        <h2 className="text-xl font-medium mb-2 text-wrap">Delivery Instructions</h2>
        <p className="text-sm text-[#606060]">
          Enable delivery instructions and showcase the specified guidelines to drivers during order drop-off.
        </p>
      </div>

      <div className="w-full xl:max-w-[66%]">
        <div className='flex justify-between items-center gap-4 mb-4'>
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

          <button className='px-3 py-[6px] flex items-center gap-1 rounded-md bg-[#212837] text-white text-center text-sm hover:bg-[#13171f] transition-all duration-300'>
            Create
            <FiPlus />
          </button>
        </div>

        <div className="overflow-x-auto w-full block bg-white border">
          <table className="w-full border-collapse">
            <thead className="bg-black text-white">
              <tr>
                <th className="border-b border-[#dae0ec] uppercase text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                  name
                </th>
                <th className="border-b border-[#dae0ec] opacity-0 uppercase text-xs font-semibold p-[.9rem] text-end whitespace-nowrap">
                  actions
                </th>
              </tr>
            </thead>

            <tbody>
              {data && data.length > 0 ? (
                data.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-tr-hover-bg cursor-pointer"
                  >
                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] font-medium text-[#212837] text-sm whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] font-medium text-[#212837] text-sm whitespace-nowrap text-end">
                      <div className="flex gap-2 justify-end">
                        <button
                          title="Edit"
                          className="bg-[#f2f2f2] w-9 h-[30px] rounded flex items-center justify-center"
                        >
                          <img src={EditIcon} alt="Edit Icon" />
                        </button>
                        <button
                          title="Delete"
                          className="bg-[#f2f2f2] w-9 h-[30px] rounded flex items-center justify-center"
                        >
                          <img src={DeleteIcon} alt="Delete Icon" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="2"
                    className="border-t border-[#f2f2f2] px-[.9rem] py-[.9rem] text-center text-[#212837] text-sm"
                  >
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div >
  )
}

export default DeliveryInstructions