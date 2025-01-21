import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import EditIcon from "../../../assets/edit-icon.svg";
import Toggle from '../../../components/Toggle';

const CustomCharges = () => {
  const [charges, setCharges] = useState([
    { chargename: "frais administratif", disc: "frais administratif", appliceable: "merchant", active: true }
  ]);

  const handleToggle = (index) => {
    const updatedCharges = [...charges];
    updatedCharges[index].active = !updatedCharges[index].active;
    setCharges(updatedCharges);
  };

  return (
    <div className='w-full'>
      <div className="w-full">
        <div className='flex justify-between items-center gap-4 mb-2'>
          <h2 className="text-xl font-medium mb-2 text-wrap">Checkout Charges</h2>

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
                  Charge Name
                </th>

                <th className="border-b border-[#dae0ec] uppercase text-xs font-semibold p-[.9rem] text-left whitespace-nowrap">
                  Applicable On
                </th>

                <th className="border-b border-[#dae0ec] uppercase text-xs font-semibold p-[.9rem] text-center whitespace-nowrap">
                  Status
                </th>

                <th className="border-b border-[#dae0ec] opacity-0 uppercase text-xs font-semibold p-[.9rem] text-end">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {charges && charges.length > 0 ? (
                charges.map((item, index) => (
                  <tr key={index} className="hover:bg-tr-hover-bg">
                    <td className="border-t border-[#f2f2f2] px-3 py-5 text-[#212837] text-sm">
                        <h3 className='font-medium text-[#212837] text-sm'>{item.chargename}</h3>
                      <div>
                        <p className='text-[#00000066] text-xs pt-1'>{item.disc}</p>
                      </div>
                    </td>

                    <td className="border-t border-[#f2f2f2] capitalize px-3 py-5 font-medium text-[#212837] text-sm whitespace-nowrap">
                      {item.appliceable}
                    </td>

                    <td className="border-t border-[#f2f2f2] text-center capitalize px-3 py-5 font-medium text-[#212837] text-sm whitespace-nowrap">
                      <Toggle
                        enabled={item.active}
                        onChange={() => handleToggle(index)}
                      />
                    </td>

                    <td className="border-t border-[#f2f2f2] px-3 py-5 font-medium text-[#212837] text-sm whitespace-nowrap text-end">
                      <div className="flex justify-end">
                        <button
                          title="Edit"
                          className="bg-[#f2f2f2] w-9 h-[30px] rounded flex items-center justify-center"
                        >
                          <img src={EditIcon} alt="Edit Icon" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="border-t border-[#f2f2f2] px-3 py-5 text-center text-[#212837] text-sm"
                  >
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomCharges;
