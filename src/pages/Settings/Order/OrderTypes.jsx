import React, { useState } from 'react';
import { HiDotsHorizontal } from "react-icons/hi";
import Toggle from '../../../components/Toggle';

const OrderTypes = () => {
  const [deliveryTypes, setDeliveryTypes] = useState([
    { name: 'Delivery', active: true },
    { name: 'Pickup', active: false },
    { name: 'Pick & Drop', active: false },
    { name: 'Custom', active: false },
  ]);

  return (
    <div className="flex gap-5 items-start justify-between flex-col xl:flex-row">
      <div className="xl:max-w-[33%] w-full">
        <h2 className="text-xl font-medium mb-2 text-wrap">Order Types</h2>
        <p className="text-sm text-[#606060]">
          List of available order types
        </p>
      </div>

      <div className="w-full xl:max-w-[66%]">
        <div className="shadow-9 border border-black/20 rounded-[5px] overflow-hidden flex-1 w-full">
          <table className="border-collapse w-full">
            <thead className="bg-[#131516] border border-[#131516] text-white">
              <tr>
                <th className="px-[.9rem] py-[.7rem] text-left text-white font-semibold text-sm uppercase">Name</th>
                <th className="px-[.9rem] py-[.7rem] text-center text-white font-semibold text-sm uppercase">Status</th>
                <th className="px-[.9rem] py-[.7rem] text-center text-white font-semibold text-sm uppercase"></th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {deliveryTypes.map((type, index) => (
                <tr key={index}>
                  <td className="border-t border-[#f2f2f2] py-[.7rem] px-[.9rem]">
                    {type.name}
                  </td>

                  <td className="border-t border-[#f2f2f2] py-[.7rem] px-[.9rem] text-center">
                    <Toggle
                      enabled={type.active}
                      onChange={() => {
                        const updatedTypes = [...deliveryTypes];
                        updatedTypes[index].active = !updatedTypes[index].active;
                        setDeliveryTypes(updatedTypes);
                      }}
                    />
                  </td>

                  <td className="border-t border-[#f2f2f2] py-[.7rem] px-[.9rem] text-center">
                    <button className="mx-auto text-2xl font-medium">
                      <HiDotsHorizontal />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderTypes;
