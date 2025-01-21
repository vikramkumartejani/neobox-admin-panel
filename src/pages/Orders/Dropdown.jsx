import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ options, selectedOption, onOptionChange }) => {
  return (
    <div className="relative">
      <select
        value={selectedOption}
        onChange={onOptionChange}
        className="appearance-none bg-white border border-[#d2cfcf] rounded-md w-full min-w-[72px] max-w-[72px] px-3 py-[6px] h-9 text-base text-[#3c4e71] cursor-pointer focus:outline-none"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="text-black bg-white hover:bg-red-500 hover:text-white"
          >
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <IoIosArrowDown className="text-lg text-gray-500" />
      </div>
    </div>
  );
};

export default Dropdown;
